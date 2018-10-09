import * as vscode from 'vscode';

export function displayError(message: string, err: any){
    vscode.window.showErrorMessage(message);
    console.error(err);
}