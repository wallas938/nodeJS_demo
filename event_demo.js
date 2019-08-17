const EventEmitter = require('events')

//Create class
class MyEmitter extends EventEmitter { }

//Init Object
// const myEmitter = new EventEmitter() ?????
const myEmitter = new MyEmitter()

//Event listener 
myEmitter.on('event', () => console.log('Event Fired!'))

//Init event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
