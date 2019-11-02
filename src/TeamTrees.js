//Check NodeJs version
if (process.version.slice(1).split(".")[0] < 8) {
    console.error("Use NodeJs 8 or newer");
    process.exit(1);
}



//Check node modules
let modules;

try {
    const packageJson = require("../package.json");
    const dependencies = Object.entries(packageJson.dependencies);

    for (package of dependencies) {

        const packageName = package[0];
        const packageVersion = package[1].slice(1);
        const currentVersionJson = require(`${packageName}/package.json`);

        if (currentVersionJson.version !== packageVersion) {
            modules = false;
            console.error(`Detected a problem with ${currentVersionJson.name}`);
            console.error("\nSome modules are not in the correct version. Their update will start in 5 seconds.");

            setTimeout(() => {
                const childProcess = require('child_process');
                console.log(`cd ${__dirname}`);
                childProcess.execSync(`cd ${__dirname}`);
                console.log(`npm install`);
                childProcess.exec(`npm install`, async (error, stdout, stderr) => {
                    console.log(stdout);
                    console.log(stderr);
                    modules = true;
                });
            }, 5000);
            break;
        } else {
            modules = true;
        }
    }

} catch (error) {
    modules = false;
    console.error("\nSome modules are missing. Their installation will start in 5 seconds.");

    setTimeout(() => {
        const childProcess = require('child_process');
        console.log(`cd ${__dirname}`);
        childProcess.execSync(`cd ${__dirname}`);
        console.log(`npm install`);
        childProcess.exec(`npm install`, async (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            modules = true;
        })
    }, 5000);
}

const checkModules = () => {
    if (!modules) {
        setTimeout(() => {
            checkModules();
        }, 1000);
    } else {
        require("./rpc.js")
    }
}
checkModules()