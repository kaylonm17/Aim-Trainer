require('dotenv').config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

app.use(express.json())

const users = []

const posts = [
    {
        username: 'Joe',
        title: 'Post 1'
    },
    {
        username: 'Jerrod',
        title: 'Post 2'
    }
]
app.get('/post', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.get('/users', (req, res) => {
    console.log("hi")
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }

})
// get the usename and password from the req.body (the client POST request)
// get the user out of the database that has the username in req.body
// take the req.body.password and compare it to the database password using bcrypt.compare
// if they are the same , log the user in by createing a jwt and sending it back to the client

app.post('/login', (req, res) => {
    // authenticate user

    const username = req.body.username
    const user = {name: username }

    // example of signing a jwt and sending it back to the client
    const accessToken =jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user 
        next()
    })
}

app.post('/signup', (req, res) => {
    
    console.log(req.body.signUpPassword)
    res.json({temporaryData: req.body})
})
// take a users email and password
// encrypt the password using bycrypt
// save the email and the encrypted password in the database for that user
// sign a jwt and send it back in the response
app.listen(3001)