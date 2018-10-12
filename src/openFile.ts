import {
    workspace as vscodeWorkspace, 
    window as vscodeWindow, 
    TextDocument,
} from 'vscode';

export async function openFile(filePath: string, column: number){
    return vscodeWorkspace.openTextDocument(filePath)
        .then((doc: TextDocument) => {
            return vscodeWindow.showTextDocument(doc, {preview: false, viewColumn: column+1});
        });
}
