import * as vscode from 'vscode';

export function getCurrentDocument() {
    return vscode.window.activeTextEditor!.document;
}
