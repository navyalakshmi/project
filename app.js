const EventEmitter=require('events');
const eventEmitter= new EventEmitter();
/*eventEmitter.on('tutorial',()=>{
    console.log("turorial event occured");
})
eventEmitter.emit('tutorial');*/
class Person extends EventEmitter
{
constructor(name)
{
    super();
    this._name=name;
}
get name()
{
    return this._name;
}
set name(name)
{
    this._name=name;
}
}
let per=new Person('navya');
per.on('name',()=>{
  console.log("my name is"+ per.name);
})
per.emit('name');

let per2=new Person('lakshmi');
per2.on('name',()=>{
    console.log("my name is"+ per2.name);
})
per2.emit('name');