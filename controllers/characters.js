var Character = require('../models/characters');

export.insert = function (reg, res)  {
    var userData = reg.body;
    if(userData == null)  {
        res.status(403).send('No data sent!')
    }
    try  {
        var character = new Character({
            first_name: userData.firstname,
            family_name: userData.lastname,
            dob: userData.year
        });
        console.log('received: ' + character);

        character.save(function (err,results)  {
            console.log(results._id);
            if(err)
                res.status(500).send('Invalid data!');

            res.setHeader('Content-Type', ('application/json');
            res.send(JSON.stringify(character));
        });
    }
    catch(e)  {
        res.status(500).send('error ' + e);
    }
};