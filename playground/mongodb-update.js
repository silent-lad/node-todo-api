const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to Mongodb server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5aaca3b7275e9d750d01f30f")
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5aac9b7ac377e2545f3999b3")
},{
  $inc: {
    age: -2
  }
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});

  // db.close();
});
