require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('templates/activation-email', { name: 'Joko', url: 'https://google.com' });
});

const authRouter = require('./routes/auth.route');
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => console.log('Listening on port', PORT));