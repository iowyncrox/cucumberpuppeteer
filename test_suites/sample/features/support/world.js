// features/support/world.js
const puppeteer = require('puppeteer');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.browser = puppeteer.launch();  
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})