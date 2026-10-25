import fitz, os, json, re, string

PDF_PATHS = "./public/database/published" #get path
OUT_PATH = "public/assets/search_index.json"

docs = []
doc_id = 0

for root, dirs, files in os.walk(PDF_PATHS):
    for filename in files:
        if (filename.lower().endswith(".pdf")) and (filename.lower().startswith("j") or filename.lower().startswith("s")):
            pass # DO this file
        else:
            continue
        
        filepath = os.path.join(root, filename)
        relative_path = os.path.relpath(filepath, PDF_PATHS)
        relative_path = relative_path.replace("\\", "/")
    
        pdf = fitz.open(filepath)
        
        #find imsc
        firstPageText = pdf[0].get_text()
        imscIndex = firstPageText.find("IMSC: ")
        
        imsc = firstPageText[(imscIndex+6):(imscIndex+20)]
        newLineIndex = imsc.find("\n")
        imsc = imsc[0:newLineIndex]
        imsc = imsc.replace(" ", "")
        
        if "-" not in imsc:
            imsc = ""
            
        #find title
        header_text = firstPageText[:imscIndex] if imscIndex != -1 else firstPageText
        
        # Split into lines and filter out empty lines
        lines = [line.strip() for line in header_text.split("\n") if line.strip()]
        
        valid_title_lines = []
        for line in lines:
            line_lower = line.lower()
            
            # Skip lines that look like a byline, publisher header, or author metadata
            if line_lower.startswith("by") or "by:" in line_lower or line_lower.startswith("ims "):
                continue
                
            # Skip if the line is just a person's name right after a "by" line (optional safety check)
            if len(line) > 3: 
                valid_title_lines.append(line)
        
        # Take the top valid lines as the title (usually the first 1 or 2 lines)
        raw_title = " ".join(valid_title_lines[:2]) if valid_title_lines else (lines[0] if lines else filename)
        
        # Clean title using your custom punctuation rules
        custom_punct = string.punctuation.replace("[", "").replace("]", "")
        punct = re.escape(custom_punct)
        pattern = f"[^a-zA-Z0-9{punct} ]"
        title = re.sub(pattern, "", raw_title).strip()
        
        #find authorCode
        firstDashIndex = imsc.find("-")
        secondDashIndex = imsc.find("-", firstDashIndex+1, len(imsc))
        authorCode = imsc[firstDashIndex+1:secondDashIndex]
        
        #n publication
        nPublished = imsc[len(imsc)-1:]
        
        #publication used
        publicationUsed = ""
        if imsc:
            if imsc[0].lower() == "j":
                publicationUsed = "IMS Journal"
            elif imsc[0].lower() == "s":
                publicationUsed = "IMS Substack"
            
        #word count
        fullText = chr(12).join([page.get_text() for page in pdf])
        fullText = fullText.replace("\n", " ")
        fullTextArr = fullText.split(" ")
        newFullTextArr = []
        
        for word in fullTextArr:
            if word != "":
                newFullTextArr.append(word)

        wordCount = len(newFullTextArr)
        
        for page in range(len(pdf)):
            pageText = pdf[page].get_text()
            
            docs.append({ #append for MiniSearch searching in react app
                "id": doc_id,
                "file": filename,
                "path": relative_path,
                "page": page + 1,
                "content": pageText,
                
                "imsc": imsc,
                "authorCode": authorCode,
                "nPublished": nPublished,
                "publicationUsed": publicationUsed,
                "wordCount": str(wordCount),
                "title": title,
            })
            
            doc_id += 1 #++ doc id
            
        wordCount = 0
        
out = open(OUT_PATH, "w")
json.dump(docs, out, indent=4)

print(f"index made at {OUT_PATH}")