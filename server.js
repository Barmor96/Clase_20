const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');


});

app.use('/asset', router);

app.listen(9000, () => {

    console.log('El servidor está en 9000');

});
