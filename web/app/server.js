const express = require('express');
let app = express();

app.get('/',(req,res,next)=>{
    res.send('welcome')
});
const data = require('./data.json');
const sellers = data.sellers;
const lists = data.lists;
const routes = express.Router();
routes.get('/sellers',(req,res)=>{
    res.json({
        errno:0,
        data:sellers
    });
});
routes.get('/lists',(req,res)=>{
    res.json({
        errno:0,
        data:lists
    });
});
app.use('/api',routes);
app.listen(8080,(error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  Open http://localhost:8080');
    }
});