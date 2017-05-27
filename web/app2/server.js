const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
  res.send('welcome')
})
const data = require('./data.json');
const home = data.home;
const detail = data.detail;
const routes = express.Router();
routes.get('/home',(req,res)=>{
  res.json({
    errno:0,
    data:home
  });
});
routes.get('/detail',(req,res)=>{
  res.json({
    errno:0,
    data:detail
  });
});
app.use('/api',routes)
app.listen(8080);
