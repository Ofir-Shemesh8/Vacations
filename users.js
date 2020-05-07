const router = require('express').Router()
const bcrypt = require('bcryptjs')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proj3'
})
db.connect(err => {
    if (err) throw err
    console.log('connect to mysql')
})

function checkLogin(user){
    return new Promise ((resolve, reject)=>{
let q = `SELECT * from users where user_name = '${user}'`


db.query(q , function (error, results, fields) {
    if (error) throw error;
   if(results.length === 1){
       console.log(results)
       resolve(results[0])
   } else{
       reject('User not exist')
   }
  });
  
    })
}
//user login
router.post('/login', async (req, res) => {
    try{
        const { userName, password } = req.body
        let loggedUser = await checkLogin(userName)
 if(loggedUser.user_password !== password){
     res.send('Wrong password')
 } else {
    res.status(200).send(`${userName} Connected`)
 }

    }
  catch(err){
res.send(err)
  }  
})


function checkUserExist(user) {
    return new Promise((resolve, reject) => {
        let q = `SELECT * from users where user_name = '${user}'`
        db.query(q, function (error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {
          reject('User already exists')
            } else{
                resolve(true)
            }
        });
    
})
}
//register
router.post('/register', async (req, res) => {
    try {
        const { fname, lname, userName, password } = req.body
        let userExist = await checkUserExist(userName)
let q = `insert into users (f_name,l_name,user_name,user_password,admin_user)
values("${fname}","${lname}","${userName}","${password}",0)`;
db.query(q, function (error, results, fields) {
    if (error) throw error;
  console.log(`${userName} Created`)
  res.status(200).send(`${userName} Created`)
  });


    }
    catch(err){
res.send(err)
    }
})

//all flights
router.get('/user/', (req, res) => {
    db.query('SELECT * FROM vacations', (err, result) => {
        if (err) {
            res.sendStatus(500)
            throw err
        }
        res.send(result);
    })
})

//add follow
router.post('/:id', (req, res) => {
    const { vacation_followers, vacation_id } = req.body
    db.query(`UPDATE vacations
        SET vacation_followers= ${vacation_followers} +1
        WHERE vacation_id=${vacation_id}`)
})

//remove follow
router.post('/:id', (req, res) => {
    const { vacation_followers, vacation_id } = req.body
    db.query(`UPDATE vacations
        SET vacation_followers= ${vacation_followers} -1
        WHERE vacation_id=${vacation_id}`)
})



module.exports = router