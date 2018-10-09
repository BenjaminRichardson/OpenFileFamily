//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import { createFileFamilyLookup } from '../createFileFamilyLookup';
import { FileFamily } from '../types/FileFamily.type';


// Defines a Mocha test suite to group tests of similar kind together
suite('createFileFamilyLookup()', () => {
    suite('when input is array of string arrays', () => {
        test('should create map of file suffixes to familes', () => {
            const inputConfigFamilies: (string[])[] = [
                ['a', 'b', 'c'],
                ['d', 'e', 'f']
            ];
            
            const fileFamilyLookup = createFileFamilyLookup(inputConfigFamilies);
            
            const expectedMap = new Map<string, FileFamily>([
                ['a',  {fileExtensions:['a', 'b', 'c'], columnIndex: 1}],
                ['b',  {fileExtensions:['a', 'b', 'c'], columnIndex: 1}],
                ['c',  {fileExtensions:['a', 'b', 'c'], columnIndex: 1}],
                ['d',  {fileExtensions:['d', 'e', 'f'], columnIndex: 1}],
                ['e',  {fileExtensions:['d', 'e', 'f'], columnIndex: 1}],
                ['f',  {fileExtensions:['d', 'e', 'f'], columnIndex: 1}],
            ]);
            assert.deepEqual(fileFamilyLookup, expectedMap);
        });
    });
    suite('when input is multidimensional array of strings', () => {
        test('should create map of file suffixes to familes', () => {
            const inputConfigFamilies: (string[][])[] = [
                [['a'], ['b', 'c']],
                [['d', 'e'], ['f']]
            ];
            
            const fileFamilyLookup = createFileFamilyLookup(inputConfigFamilies);
            
            const expectedMap = new Map<string, FileFamily>([
                ['a',  {fileExtensions: [['a'], ['b', 'c']], columnIndex: 1}],
                ['b',  {fileExtensions: [['a'], ['b', 'c']], columnIndex: 2}],
                ['c',  {fileExtensions: [['a'], ['b', 'c']], columnIndex: 2}],
                ['d',  {fileExtensions: [['d', 'e'], ['f']], columnIndex: 1}],
                ['e',  {fileExtensions: [['d', 'e'], ['f']], columnIndex: 1}],
                ['f',  {fileExtensions: [['d', 'e'], ['f']], columnIndex: 2}],
            ]);
            assert.deepEqual(fileFamilyLookup, expectedMap);
        });
    });
});
