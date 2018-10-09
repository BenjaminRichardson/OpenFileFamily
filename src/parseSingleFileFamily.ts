import { FileFamily } from "./types/FileFamily.type";
import { assignKeysToMap } from "./assignKeysToMap";

export function parseSingleFileFamily(family: string[]|string[][], map: Map<string, FileFamily>){
    if(Array.isArray(family[0])){
        family = family as string[][]; // family is a array of arrays
        family.forEach((group: string[], groupIndex) => {
            assignKeysToMap(group, groupIndex+1, family, map);
        });
    }else{
        family = family as string[];
        assignKeysToMap(family, 1, family, map);
    }
}