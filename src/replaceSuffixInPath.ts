import { TextDocument } from "vscode";

export function replaceSuffixInPath(file: TextDocument, origSuffix: string, newSuffix: string): string{
    return file.uri.path.replace(origSuffix, newSuffix);
}
