# Open File Family

Opens all files with related in the specified editor pane. Especially useful for opening tests or spec files.

I created this because when working in angular I sometimes wanted to open the *.spec.ts, *.ts, *.scss, and *.html all at once, from any file. I also prefer having the spec file alongside the others. 

With this enabled with only the *.ts file open I am able to open all the related files with a shorcut.

## Features

By default the extension is triggered by `ctrl+k` + `ctrl+k` on Linux/Windws (`cmd+k` + `cmd+k` on macOS).

Allows for many different file families, but selects based on the most specific option e.g. '-service.spec.ts' will be the selected family before '.ts'.

This extension does not create new files, just opens existing ones.

## Extension Settings

This extension contributes the following settings:

* `openFileFamily.families`: List all the family of suffixes you want to open. Any member of the family is able to open its relatives.
   
    **Example 1:**
     
        * The configured family list contains ["a", "b", "c"].

        * The editor is open to "example.a" in the open editor pane.
        
        * The extension is triggered.
        
        * "example.b" and "example.c" are opened in the same editor pane as "example.a".

        
    **Example 2:**

        * The configured family list contains [["x"], ["y", "z"]].

        * The active editor is open to "test.x" in the only pane.
        
        * The extension is triggered.
        
        * "test.y" and "test.z" will be opened in a new editor pane to the right of "test.x".

    There is no limit to the number of families, but there may be performance costs on bootup if there are many families or large families.

## Known Issues

Large number of edit pane groups will likely not work as expected. I know windows of 2 or 3 work well, but anything beyond that is untested. Don't expect to get 8 different editor tab-sets to open.

Additionally starting the opening process from a tab-group other than the left-most one is still buggy.

## Release Notes


### 0.0.1

Initial release for testing with a real project.

-----------------------------------------------------------------------------------------------------------

## Thanks

Thanks to https://github.com/thekarel and all who contributed to https://github.com/thekarel/vscode-open-spec-file. **Open File Family** is grown from **Open Spec File** and would not exist without it.


**Enjoy!**
