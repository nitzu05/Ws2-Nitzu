const fs = require('fs');
const path = require('path');

const copyFolderSync = (from, to) => {
    if (!fs.existsSync(to)) {
        fs.mkdirSync(to, { recursive: true });
    }

    fs.readdirSync(from).forEach(element => {
        const stat = fs.lstatSync(path.join(from, element));
        if (stat.isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else if (stat.isSymbolicLink()) {
            const symlink = fs.readlinkSync(path.join(from, element));
            fs.symlinkSync(symlink, path.join(to, element));
        } else if (stat.isDirectory()) {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
};

copyFolderSync('src', 'dist');
