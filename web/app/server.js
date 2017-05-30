const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
  res.send('welcome')
});
const data = require('./data.json');
const seller = data.seller;
const list = data.list;
const routes = express.Router();
routes.get('/seller',(req,res)=>{
  res.json({
    errno:0,
    data:seller
  });
});
routes.get('/list',(req,res)=>{
  res.json({
    errno:0,
    data:list
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
