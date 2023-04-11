const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})

app.use('/dev', require('./routes/dev'));
app.use('/',(req,res) => {
    res.send("You are at Home Screen")
})

try {
    app.listen(process.env.EXTERNAL_PORT || 3002);
    console.log("server is running on 3002");
} catch (error) {
    console.log(error);
}