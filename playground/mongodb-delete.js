const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to Mongodb server');

  //Delete Many
  // db.collection('Todos').deleteMany({text:'course'}).then((result)=>{
  //   console.log(result);
  // });
  //Delete ONE
  // db.collection('Todos').deleteOne({text:'course'}).then((result)=>{
  //   console.log(result);
  // });
  //FIND AND DELETE ONE
  db.collection('Todos').findOneAndDelete({
    _id: new ObjectID("5aacc306275e9d750d01f594")
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
