const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

const playGround = async () => {
    const saltRounds = 10;
    const myPlaintextPassword = 'some password';

    let hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
    console.log(`let hash =  bcrypt.hash(myPlaintextPassword, saltRounds)`, hash);
    console.log(`typeof hash`, typeof hash);

    let res = await bcrypt.compare('some password', hash);
    console.log(`bcrypt.compare('some password', hash)`, res);

    let paylode = {
        name: 'Smbat',
        _id: 'some id xyz'
    };
    let secretKey = 'some mysterious secret key xy$';

    let token = jwt.sign(paylode, secretKey);
    console.log(`token ----->`, token);
    console.log(`typeof token ----->`, typeof token);

    jwt.verify(token, secretKey, function(err, decoded) {
        if(err) return console.log(`jwt.verify err -->`, err);
        console.log(`jwt.verify decoded-->`, decoded);
    });


};


module.exports = playGround;
