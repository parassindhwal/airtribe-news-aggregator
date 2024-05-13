const {default: axios} = require('axios');

const getTopNews = async(req, res) => {
    try {
        const response = await axios.get(process.env.NEW_API_URL);
        return res.status(200).send({'news': response.data.results});
    }catch(err) {
        res.status(500).send({message: 'something went wrong'});
    }
}

module.exports = {
    getTopNews: getTopNews
}