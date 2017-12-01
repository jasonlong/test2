const mb = require('electron').remote.getGlobal('sharedObject').mb

const appContainer = document.querySelector('.js-app')
const startBtn = document.querySelector('.js-start-btn')
const stopBtn = document.querySelector('.js-stop-btn')
const slider = document.querySelector('.js-slider')

// Sounds
const soundWindup = new Audio(__dirname + '/wav/windup.wav');
const soundClick = new Audio(__dirname + '/wav/click.wav');
const soundDing = new Audio(__dirname + '/wav/ding.wav');

// Some other stuff
let state = ""
let currentMinute = 0
const workMinutes = 25
const breakMinutes = 5

// Timer stuff
const Timer = require('tiny-timer')
let timer = new Timer()
