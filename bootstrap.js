const path = require('path');
const fs = require('fs').promises;
const { readFile, existsSync } = require('fs');
const util = require('util');
const http = require('http');
const exec = util.promisify(require('child_process').exec);
const projectRootFolder = 'rds-projects';
const distPath = path.join(__dirname, 'dist');
const elementsFilePath = path.join(__dirname, 'rds-projects', 'app-config', 'src', 'lib', 'elements.ts')

const buildAllProjects = async (directories, projectToBuild) => {
    if (projectToBuild) {
        console.log('building ' + projectToBuild + '...')
        await exec(`npm run build --project="${projectToBuild}" --href=/${projectToBuild}/`, { cwd: path.join(__dirname) });
    } else {
        for (const dir of directories) {
            if (dir === 'app-config') continue;
            console.log('building ' + dir + '...')
            await exec(`npm run build --project="${dir}" --href=/${dir}/`, { cwd: path.join(__dirname) });
        }
    }
}

const updateElementsTsFile = async () => {
    if (existsSync(distPath)) {
        const dirs = await getDirectories(distPath);
        const elementsTsFile = (await fs.readFile(elementsFilePath)).toString().split('=')[1].trim().split('').filter(r => r !== ` ` && r !== `\r` && r !== `\n` && r !== `'`).join('');
        const openingBracketIndex = elementsTsFile.indexOf('[');
        const closingBracketIndex = elementsTsFile.indexOf(']');
        let arr = elementsTsFile.substring(openingBracketIndex + 1, closingBracketIndex).split(',');

        for (const dir of dirs) {
            if (arr.includes(dir)) continue;
            arr.push(dir);
        }
        arr.shift()
        await fs.writeFile(elementsFilePath, `export const elements: string[] = [${arr.map(r => `'${r}'`).join(',')}]`)
    }
}

const getDirectories = source => {
    return fs.readdir(source, { withFileTypes: true })
        .then(directories => directories.filter(d => d.isDirectory()).map(d => d.name))

}

const startServer = () => {
    const server = http.createServer(async (request, response) => {
        if (!request.url?.includes('.')) request.url = request.url + '/index.html';
        let filePath = path.join(distPath, `${request.url.substring(1)}`);
        if (existsSync(filePath)) {
            readFile(filePath, function (error, content) {
                if (request.url?.endsWith('js')) {
                    response.writeHead(200, { 'Content-Type': 'text/javascript' });
                } else {
                    response.writeHead(200);
                }
                response.end(content, 'utf-8');
            });
        } else {
            response.writeHead(404);
            response.end('Resource not found', 'utf-8');
        }
    })
    server.listen(3000);
    console.log('Server listening on localhost:3000');
}


async function start() {
    const args = getArgs();
    console.log(args)
    if (args?.build !== "false") {
        const directories = await getDirectories(path.join(__dirname, projectRootFolder));
        const projectToBuild = args?.project;
        if (projectToBuild) {
            if (!directories.includes(projectToBuild)) {
                console.log("invalid project name");
                return;
            }
            await buildAllProjects(directories, projectToBuild);
        } else {
            await fs.rm(path.join(__dirname, 'dist'), { recursive: true, force: true });
            await fs.mkdir(path.join(__dirname, 'dist'));
            console.log('Building projects from ' + projectRootFolder);
            await buildAllProjects(directories, projectToBuild);
        }
    }
    await updateElementsTsFile();
    startServer();
}


function getArgs() {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach(arg => {
            // long arg
            if (arg.slice(0, 2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2, longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1, arg.length).split('');
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}


start();