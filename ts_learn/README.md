// initialize directory
npm init
// install typescript for dev
npm i -D typescript

// compile into JS
npx tsc src/index.ts
// execute js
npm src/index.js

// create tsconfig.json
npx tsc --init

// run ts compiler
npx tsc

// update package.json build command and hook up to tsc
npm run build

// tell npm to automatically load compile changes
npx tsc -w

//install npm nodemon
npm i -D nodemon

// run compiled changes
Option 1 : use node: 
node dist/index.js
Option 2 : nodemon
npx nodemon -w dist -q dist/index.js

//install concurrently
npm i -D concurrently

// run tsc compile and nodemon
npx concurrently -k -n COMPILER,NODEMON -c red,blue "tsc -w" "nodemon -w dist -q dist/index.js"

// install react types ( only required during development and build steps)
npm install -D @types/react