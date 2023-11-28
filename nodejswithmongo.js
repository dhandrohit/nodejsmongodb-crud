let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017";

//1. Connect with MongoDB
function connectMongoDB(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            db.close();
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
//2. Insert record into the collections
function insertOneDocument(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            var database = db.db("rkv");
            let newDept = {deptno: 102, dname: "Test Dept"};
            database.collection("dept").insertOne(newDept, function(err, result){
                if(err) throw err;
                console.log("Record Insert into the Database");
                console.log("Result ", result);
                db.close()
            });
            ;
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
// insertOneDocument(url);

//3. Insert multiple records into the collections
function insertMultipleDocuments(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            var database = db.db("rkv");
            let newDepts = [
                {deptno: 103, dname: "Test1 "},
                {deptno: 104, dname: "Test2 "}
            ]
            database.collection("dept").insertMany(newDepts, function(err, result){
                if(err) throw err;
                console.log("Record(s) Insert into the Database");
                console.log("Result ", result.insertedCount);
                db.close()
            });
            ;
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
// insertMultipleDocuments(url);
//4. Find One document within the collection
function findOneDocument(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            var database = db.db("rkv");
            database.collection("dept").findOne({}, function(err, result){
                if(err) throw err;
                console.log("Result ", result);
                db.close()
            });
            ;
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
// findOneDocument(url);
//5. Return all the documents from the collection
function returnAllDocuments(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            var database = db.db("rkv");
            database.collection("dept").find({}).toArray(function(err, result){
                if(err) throw err;
                console.log("Result ", result);
                db.close()
            });
            ;
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
// returnAllDocuments(url);
//6. Query the documents based on a certain condition
function queryDocumentWithCondition(url){
    try{
        MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db){
            if(err) throw err;
            console.log("Connected to the MongoDB instance....");
            var database = db.db("rkv");
            let query = {dname:/^T/};
            database.collection("dept").find(query).toArray(function(err, result){
                if(err) throw err;
                console.log("Result ", result);
                db.close()
            });
            ;
        });

    }catch(error){
        console.log("Error connecting to MongoDB...", error);
    }
}
queryDocumentWithCondition(url);
