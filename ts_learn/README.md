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