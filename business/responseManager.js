"use strict"
const { nextTick } = require("node:process")
class ResponseManager {
	async doHello() {
		return "Hello, Moleculer"
	}

	async doWelcome(name) {
		// let welcomeString = "";
		// const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
		// const example = async () => {
		// 	console.log('About to snooze without halting the event loop...');
		// 	await snooze(10000);
		// 	console.log('done!');
		// 	welcomeString = `Welcome ${name}`
		// 	return welcomeString
		// };


		return await this.example(name)
	}

	async example(name) {
		return Promise.delay(10000).then(() => { return `Welcome ${name}` })
	}
}
module.exports = ResponseManager
