const path = require('path');
const fs = require('fs').promises;
const { readFile, existsSync } = require('fs');
const util = require('util');
const http = require('http');
const exec = util.promisify(require('child_process').exec);
const projectRootFolder = 'rds-projects';
const distPath = path.join(__dirname, 'dist');

const buildAllProjects = async (directories) => {
    for (const dir of directories) {
        console.log('building ' + dir + '...')
        await exec(`npm run build --project="${dir}" --href=/${dir}/`, { cwd: path.join(__dirname) });
    }
}

// const setLocalDevValue = async (directories, localDev) => {
//     for (const dir of directories) {
//         const envFilePath = path.join(__dirname, projectRootFolder, dir, 'src', 'environments', 'environment.prod.ts');
//         if (existsSync(envFilePath)) {
//             const config = (await fs.readFile(envFilePath)).toString();
//             console.log(config.split("=")[1].trim())
//             const modifiedConfig = JSON.parse(config.split("=")[1].trim());
//             modifiedConfig.localDev = localDev;
//             await fs.writeFile(envFilePath, config.split("=")[0] + JSON.stringify(modifiedConfig));
//         }
//     }
// }

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
    // if (args?.localDev === 'true' || args?.localDev === 'false') {
    //     const directories = await getDirectories(path.join(__dirname, projectRootFolder));
    //     await setLocalDevValue(directories, args.localDev);
    // }
    console.log(args)
    if (args?.build !== "false") {
        await fs.rm(path.join(__dirname, 'dist'), { recursive: true, force: true });
        await fs.mkdir(path.join(__dirname, 'dist'));
        console.log('Building projects from ' + projectRootFolder);
        const directories = await getDirectories(path.join(__dirname, projectRootFolder));
        await buildAllProjects(directories);
    }
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