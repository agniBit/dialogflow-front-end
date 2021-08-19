const [executeQueries,listIntents] = require('./dialogflow');
const router = require('express').Router();

router.get('/getIntentsList', async (req, res) => {
    try {
        const response = await listIntents();
        if (response) {
            res.status(200).send(response);
        } else {
            res.status(400).send({status:'error',error:'anable to fetch data'});
        }
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
});


router.post('/getQueryResult', async (req, res) => {
    try {
        if (req.body.queryText){
            res.send(await executeQueries([req.body.queryText],'test'));
        } else {
            res.status(400).send({status:'error',error:'emptyQueryText'});
        }
    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;