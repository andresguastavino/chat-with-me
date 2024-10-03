Steps to build similar project:

1. Run "npx create-next-app@latest <project-name>"
2. Run "npm install socket.io socket.io-client"
3. Add server.js.example file to your project root dir and remove .example from file name
4. Change dev script in package.json to "node server.js" and run "npm run dev" (If you get an error when running "npm run dev" related to importing modules add "type":"module" to package.json)
5. Add socket.js.example to your project app dir (or wherever you wish). This will be your entry point to connect with the server and you'll need to import it in every page that you wish to connect with server
6. Import socket.js in the pages you wish to connect with server
