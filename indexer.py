import fitz, os, json, re, string

PDF_PATHS = "./public/database/published" #get path
OUT_PATH = "public/assets/search_index.json"

docs = []
doc_id = 0

def get_imsc(metadata):
    kwrds = metadata["keywords"]
    imscIndex = kwrds.find("IMSC: ") + len("IMSC: ")
    return kwrds[imscIndex:]

def get_title(file):
    return metadata["title"]

for root, dirs, files in os.walk(PDF_PATHS):
    for filename in files:
        if (filename.lower().endswith(".pdf")) and (filename.lower().startswith("j(") or filename.lower().startswith("s-")):
            pass # DO this file
        else:
            continue
        
        # open file and get clean path
        filepath = os.path.join(root, filename)
        relative_path = os.path.relpath(filepath, PDF_PATHS)
        relative_path = relative_path.replace("\\", "/")
    
        pdf = fitz.open(filepath)
        
        metadata = pdf.metadata
        
        #get imsc
        imsc = get_imsc(metadata)
        if not imsc:
            raise Exception(f"File at location = {filepath}\nwith name = {filename}\nhas no imsc.")
        
        #find title
        title = get_title(metadata)
        
        #find authorCode
        authorCode = imsc[imsc.find("-")+1:imsc.find("-", imsc.find("-")+1)]
        
        #n publication
        nPublished = imsc[-1]
        
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
                
                "title": title,
                "imsc": imsc,
                "authorCode": authorCode,
                "nPublished": nPublished,
                "publicationUsed": publicationUsed,
                "wordCount": str(wordCount),
            })
            
            doc_id += 1 #++ doc id
            
        wordCount = 0
        
out = open(OUT_PATH, "w")
json.dump(docs, out, indent=4)

print(f"index made at {OUT_PATH}")