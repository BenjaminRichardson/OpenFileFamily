import { TextDocument } from "vscode";

export function isFile(file: TextDocument) {
    return file.uri.scheme === 'file';
}
