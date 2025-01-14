"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
class CustomClient extends discord_js_1.Client {
    constructor() {
        super({ intents: [] });
        this.config = require(`${process.cwd()}/data/config.json`);
    }
    Init() {
        this.login(this.config.token)
            .then(() => console.log(`Logged in!`))
            .catch((error) => console.log(error));
    }
}
exports.default = CustomClient;
