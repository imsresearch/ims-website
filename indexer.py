import fitz, os, json, re

PDF_PATHS = "./public/database" #get path
OUT_PATH = "public/assets/search_index.json"

docs = []
doc_id = 0

for root, dirs, files in os.walk(PDF_PATHS):
    for filename in files:
        if not filename.lower().endswith(".pdf"):
            continue
        
        filepath = os.path.join(root, filename)
        relative_path = os.path.relpath(filepath, PDF_PATHS)
        relative_path = relative_path.replace("\\", "/")
        
        pdf = fitz.open(filepath)
        
        for page in range(len(pdf)):
            pageText = pdf[page].get_text()
            
            docs.append({ #append for MiniSearch searching in react app
                "id": doc_id,
                "file": filename,
                "path": relative_path,
                "page": page + 1,
                "content": pageText
            })
            
            doc_id += 1 #++ doc id
        
out = open(OUT_PATH, "w")
json.dump(docs, out, indent=4)

print(f"index made at {OUT_PATH}")