import { TextDocument } from "vscode";
import { FileFamily } from "./types/FileFamily.type";

export function getFamilyKey(file: TextDocument, familyMap: Map<string, FileFamily>): string | null {
    const keys = Array.from(familyMap.keys()) || [];
    const filePath = file.uri.path;

    const matchedKey = keys.filter(x => filePath.includes(x))
                            .sort((fileExtA, fileExtB) => fileExtB.length - fileExtA.length)
                            .shift();

    return matchedKey || null;
}