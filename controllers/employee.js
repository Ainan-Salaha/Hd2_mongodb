const mongoClient = require ('../database/connection');

/*Query the collection ""employee"" and list all the documents */
const insertEmpData = async(req,res)=>{
    const empData = req.body;
    console.log(empData)
    try{
        const result = await mongoClient.insterToDB(empData)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

/*Query the collection ""employee"" and list the employees who are having salary more than 30000 */
const findAllEmp= async(req,res)=>{
    const queryParam = req.body;
    console.log(queryParam);
    try {
        const result = await mongoClient.findAllEmpInDB(queryParam)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

/*Query the collection ""employee"" and list the employees who are having experience more than 2 years*/
const findEmpsalary= async(req,res)=>{
    const query = {salary: { $gt : "30000" }};
    try {
        const result = await mongoClient.findEmpsalaryInDB(query)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

/*Query the collection ""employee"" and list the employees who are having experience more than 2 years. */
const findEmpExperiecne= async(req,res)=>{
    const query = {overallExp : { $gte : "2" }};
    try {
        const result = await mongoClient.findEmpExperienceInDB(query)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}
/*list the employees who are graduated after 2015 and having experience more than 1 year */
const findEmpExperiecneAndGraduate= async(req,res)=>{
    const query = {$and: [{ yearGrad : { $gt : "2015" }},{ overallExp : { $gt : "1" }}]};
    try {
        const result = await mongoClient.findEmpExperienceAndGraduateInDB(query)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
}

/*update the salary of the employee whose salary is greater than 70000 to 65000.*/ 
const updateSalary = async (req,res)=>{
    const updateSalary = req.body;
    const filter = updateSalary.filter;
    const value = {$set:updateSalary.value}
    console.log(filter)
    console.log(value)
    try {
        const result = await mongoClient.updateSalaryInDB(filter,value)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }
    
}

/*Delete all the documents from ""employee"" where last company is Y"*/
const deleteEmp = async(req,res)=>{
    const query = { lastCompany: "Y" } ;
    try{
        const result = await mongoClient.DeleteInDB(query)
        console.log(" The result of database operation =>",result)
        return res.status(200).send(result)
    }catch(error){
        console.log("Something went wrong while performing db opeartion");
        return res.status(500).send({message: "Something went wrong while performing the operation"})
    }

}
module.exports={
    insertEmpData,findAllEmp,
    findEmpsalary,findEmpExperiecne,
    findEmpExperiecneAndGraduate,
    updateSalary,deleteEmp
}