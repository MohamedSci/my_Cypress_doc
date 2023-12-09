1) npm install cypress --save-dev
2) npx cypress verify
3) npm install -D start-server-and-test //start server
4) npm install -D angular-http-server // start Angular server with Deep Linking
 // Start Server Locally Add these lines in package.json
     "start": "npm run open",
    "open": "concurrently \"http-server -a localhost -p 1234\" \"open http://localhost:1234/build\""
