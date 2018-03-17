const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to Mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5aaca3b7275e9d750d01f30f")
  // }).toArray().then((docs)=>{
  //   console.log('Todos:-');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //    console.log('Unable to fetch todos',err);
  // })

// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos count: ${count}`);
// },(err)=>{
//   console.log('Unable to fetch todos');
// });

db.collection('Users').find({
  name: 'Divansh'
}).toArray().then((docs)=>{
  console.log('Todos with name Divyansh:-');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to find data');
})
  // db.close();
});
