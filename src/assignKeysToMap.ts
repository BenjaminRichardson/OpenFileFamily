import { FileFamily } from "./types/FileFamily.type";

export function assignKeysToMap(keyList: string[], groupIndex: number, extensions: string[]|string[][], map: Map<string, FileFamily>): void{
    keyList.forEach(key => {
        map.set(key, {fileExtensions: extensions, columnIndex: groupIndex});
    });
}