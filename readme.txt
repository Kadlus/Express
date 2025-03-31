Příkazy:
1. npm init -y
2. npm i express
3.npm i -D nodemon (watch mode, automatický restart při změnách

V souboru package.json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "nodemon ./src/index.mjs",
    "start": "node ./src/index.mjs"
  },

  Změnit koncovky na .mjs u main.js --> main.mjs
  Před ukončovací závorku vložit
  "type": "module"

  //spuštění serveru, potřeba znovu spustit server, pokud přidám nový balíček
  npm run start:dev