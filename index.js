const express = require('express');
const mysql = require('mysql');
const db = require('./server/config');
const app = express();
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

app.use(express.static(resolve(__dirname,'client','dist')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

function errorHandling(req, res){
    res.status(req.status || 500).send(req.error || 'Server Error');
}

require('./server/routes')(app);

// app.get('/api/userhome', async (req, res, next) => {
//     try {
//         const { user } = req;

//         const query = 'SELECT * FROM ?? WHERE ?? = ?';
//         const inserts = ['sets', 'userID', user.ID];

//         const sql = mysql.format(query, inserts);

//         const sets = await db.query(sql);

//         res.send({
//             success: true,
//             sets
//         });
//     } catch (err){
//         req.status = 500;
//         req.error = 'Error getting user sets';

//         return next();
//     }
    
// }, errorHandling);
