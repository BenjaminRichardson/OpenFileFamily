import * as vscode from 'vscode';

export function openFile(filePath: string, column: number){
    return vscode.workspace.openTextDocument(filePath)
        .then((doc) => {
            return vscode.window.showTextDocument(doc, {preview: false, viewColumn: column+1});
        });
}
