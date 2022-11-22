const { execSync } = require("child_process");

console.log("Installing dependencies for all workspaces...");
execSync(`yarn`);

console.log("First build of grammar lib...");
execSync("yarn --cwd=./workspaces/grammar build");

console.log("Linking grammar library to interface...");
execSync("yarn --cwd=./workspaces/grammar/dist link");
execSync("yarn --cwd=./workspaces/react link @pgs/grammar");
execSync("yarn --cwd=./workspaces/react install");

console.log("Setup ended successfully!");
