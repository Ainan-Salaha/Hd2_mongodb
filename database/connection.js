const { query } = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb://127.0.0.1:27017/db";
const client = new MongoClient(url);

const insterToDB = async (data) => {
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.insertOne(data)
    await client.close();
    return dbResponse
}

/*Query the collection ""employee"" and list all the documents */

const findAllEmpInDB = async (query) => {
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find().toArray()
    await client.close();
    return dbResponse
}

/*Query the collection ""employee"" and list the employees who are having salary more than 30000 */

const findEmpsalaryInDB = async (query) => {
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray()
    await client.close();
    return dbResponse
}

/*Query the collection ""employee"" and list the employees who are having experience more than 2 years. */
const findEmpExperienceInDB = async (query) => {
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray()
    await client.close();
    return dbResponse
}

/*Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year */
const findEmpExperienceAndGraduateInDB = async (query) => {
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.find(query).toArray()
    await client.close();
    return dbResponse
}

/*Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.*/

const updateSalaryInDB = async(filter,value)=>{
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.updateOne(filter,value)
    await client.close();
    return dbResponse   
}

/*Delete all the documents from ""employee"" where last company is Y"*/
const DeleteInDB = async(filter)=>{
    const database = client.db("Human_Resourse");
    const collection = database.collection("employee");
    await client.connect();
    const dbResponse = await collection.deleteOne(filter)
    await client.close();
    return dbResponse   
}


module.exports = {
    insterToDB, findAllEmpInDB, findEmpsalaryInDB,
    findEmpExperienceInDB , 
    findEmpExperienceAndGraduateInDB,
    updateSalaryInDB,
    DeleteInDB
}