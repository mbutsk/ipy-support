const vscode = require('vscode');

function activate(context) {
    vscode.languages.setLanguageConfiguration('ipyp', {
        "name": "ipy-support",
        "displayName": "IPY Support",
        "description": "add support for IPY language to VSCode (by mbutsk)",
        "version": "0.0.1",
        "engines": {
          "vscode": "^1.92.0"
        },
        "categories": [
          "Programming Languages"
        ],
        "contributes": {
          "languages": [{
            "id": "ipy",
            "aliases": ["IPY", "ipy"],
            "extensions": [".ipyp"],
            "configuration": "./language-configuration.json"
          }],
          "grammars": [{
            "language": "ipy",
            "scopeName": "source.ipyp",
            "path": "./syntaxes/ipy.tmLanguage.json"
          }]
        },
        "main": "./extension.js"
      }
      );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
