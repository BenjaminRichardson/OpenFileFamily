import { TextEditor } from "vscode";
import { displayError } from "./displayError";
import { getCurrentDocument } from "./getCurrentDocument";
import { getFamilyKey } from "./getFamilyKey";
import { getFamilyPaths } from "./getFamilyPaths";
import { isFile } from "./isFile";
import { openFile } from "./openFile";
import { FileFamily } from "./types/FileFamily.type";

export async function openFileFamily(fileMap: Map<string, FileFamily>, textEditor: TextEditor) {
    const currentFile = getCurrentDocument();
    if(!isFile(currentFile)){ return; }

    const key = getFamilyKey(currentFile, fileMap);
    if(key === null){ return; }  

    const keyColumn = fileMap.get(key)!.columnIndex;
    const filePaths = getFamilyPaths(currentFile, key, keyColumn, fileMap.get(key)!); // key would be null if filemap does not have entry
    filePaths.forEach(fp => { 
        try{
            openFile(fp.path, (textEditor.viewColumn || 0) + fp.relativeColumn);
        }catch(err){
            displayError('Error opening file at ' + fp.path, err);
        }
    });
}