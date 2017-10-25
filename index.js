const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
});

app.listen(process.env.PORT || 3009 , () => console.log('Server Started'));
