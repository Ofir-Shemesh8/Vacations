const router = require('express').Router()

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

//admin login
router.post('login', (req, res) => {
    const { username, password } = req.body
    if (username, password) {
        db.query(`SELECT * FROM users WHERE user_name = "${username}"`, (err, result) => {
            if (err) {
                res.sendStatus(500)
                throw err
            }
            if (result.lenght == 0) {
                res.status(400).send("user not found")
            } else {
                const correctPassword = bcrypt.compareSync(password, result[0].password)
                if (correctPassword) {
                    req.session.user = result[0]
                    res.json(result[0]);
                    res.sendStatus(200)
                } else {
                    res.status(400).send('wrong password')
                }
            }
        })
    } else {
        res.status(400).send('missing some info')
    }
})

//add vacation
router.post('/addvacation', (req, res) => {
    console.log("from req.body" + req.body.Description)
    const data = { 
        vacation_description: req.body.Description, 
        vacation_destanation: req.body.Destanation, 
        vacation_image: req.body.Image, 
        vacation_start: req.body.forth, 
        vacation_end: req.body.back, 
        vacation_price:req.body.price } 
        console.log(data)
    if (data) {
        db.query(`INSERT INTO vacations (vacation_description,vacation_destanation,vacation_image,vacation_start,vacation_end,vacation_price)
    VALUES("${data.vacation_description}","${data.vacation_destanation}","${data.vacation_image}","${data.vacation_start}","${data.vacation_end}",${data.vacation_price})`, (err, result) => {
            if (err) {
                res.sendStatus(500)
                throw err
            }
            res.sendStatus(201)
        })
    } else {
        res.status(400).send('missing some info')
    }
})

//all flights
router.get('/admin', (req,res)=>{
    db.query('SELECT * FROM vacations', (err,result)=>{
        if(err) {
            res.sendStatus(500)
            throw err
        }
        res.send(result)
    })
})
     
//delete vacation
router.delete('/delvacation', (req,res)=>{
    const vacation_id = req.body.id
    db.query(`DELETE FROM vacation WHERE vacation_id=${vacation_id}`, (err,result)=>{
        if (err) {
            res.sendStatus(500)
            throw err
        }
        res.sendStatus(201)
    })

})



module.exports = router