//nodejs

import fs from "fs";
import path from "path";

console.log('');
console.log('Clearing the clutter for you! ✨');
console.log('.');
console.log('..');
console.log('...');

const folderPath = "{/path-to-the-folder}";

fs.readdir(folderPath, (err, items) => {
    if (err) {
        console.error("Damn! Couldn't read the folder:", err);
        return;
    }

    let files = [];
    let folders = [];

    let pending = items.length;
    if (!pending) {
        console.log('No items found!');
        return;
    }

    items.forEach(item => {
        const fullPath = path.join(folderPath, item);

        fs.lstat(fullPath, (err, stats) => {
            if (err) {
                console.error('Oopsie with:', item, err);
                pending--;
                return;
            }

            if (stats.isFile()) {
                files.push(item);
            } else if (stats.isDirectory()) {
                folders.push(item);
            }

            pending--;
            if (pending === 0) {
                moveFiles();
            }
        });
    });

    function moveFiles() {
        for (let i = 0; i < files.length; i++) {
            let filePath = path.join(folderPath, files[i]);
            let fileName = path.basename(filePath);
            let extension = path.extname(filePath);
            let cleanedExt = extension.slice(1);

            if (!folders.includes(cleanedExt)) {
                fs.mkdir(path.join(folderPath, cleanedExt), () => {
                    moveFileToFolder(files[i], cleanedExt);
                    folders.push(cleanedExt); 
                });
            } else {
                moveFileToFolder(files[i], cleanedExt);
            }
        }
    }

    function moveFileToFolder(file, folder) {
        let oldPath = path.join(folderPath, file);
        let newPath = path.join(folderPath, folder, file);

        fs.rename(oldPath, newPath, () => { });
    }
});

console.log('Organised every file into separate folders!');
console.log('');
