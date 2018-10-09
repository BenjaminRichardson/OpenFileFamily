import { TextDocument } from "vscode";
import { FileFamily } from "./types/FileFamily.type";
import { replaceSuffixInPath } from "./replaceSuffixInPath";

export function getFamilyPaths(rootFile: TextDocument, rootFileSuffix: string, rootColumn: number, family: FileFamily) {
    const familyPaths: {path: string, relativeColumn: number}[] = [];
    let extensions: string[][] | string [];
    if(Array.isArray(family.fileExtensions[0])){
        extensions = family.fileExtensions as string[][];
        extensions.forEach((famGroup, groupIndex) => {
            famGroup.forEach((famGroupSuffix) => {
                familyPaths.push(
                    {path: replaceSuffixInPath(rootFile, rootFileSuffix, famGroupSuffix), relativeColumn: groupIndex - rootColumn}
                );
            });
        });
    }else{
        extensions = family.fileExtensions as string[];
        extensions.forEach((famSuffix) => {
            familyPaths.push(
                {path: replaceSuffixInPath(rootFile, rootFileSuffix, famSuffix), relativeColumn: rootColumn}
            );
        });
    }
    return familyPaths;
}