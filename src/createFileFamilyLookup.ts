import { FileFamily } from "./types/FileFamily.type";
import { parseSingleFileFamily } from "./parseSingleFileFamily";

export function createFileFamilyLookup(configFamilies: (string[]|string[][])[]): Map<string, FileFamily> {

    const fileMap = new Map<string, FileFamily>();

    configFamilies.forEach(family => {
        parseSingleFileFamily(family, fileMap);
    });

    return fileMap;
}