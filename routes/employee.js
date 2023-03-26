const express = require('express')
const empController = require('../controllers/employee')
const router = express.Router()

router.post('/employee',empController.insertEmpData)
router.get('/findallemp',empController.findAllEmp)
router.get('/salaryemp',empController.findEmpsalary)
router.get('/empexperience',empController.findEmpExperiecne)
router.get('/empgrad',empController.findEmpExperiecneAndGraduate)
router.put('/updatesalary',empController.updateSalary)
router.delete('/deleteemp',empController.deleteEmp)

module.exports=router