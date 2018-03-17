// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to Mongodb server');

  var user ={
    name: 'Divyansh',
    age: 20
  }
  var {name} = user;
  console.log(name);

  // db.collection('Todos').insertOne({
  //   text: 'Something here',
  //   completed: false
  // },(err,result)=>{
    // if(err){
    //   console.log('Unable to insert todo',err);
    // }else{
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // }
  // })

  // db.collection('Users').insertOne({
  //   name: 'Divansh',
  //   age: 20,
  //   location: 'Delhi'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert user',err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // })


  db.close();
});
