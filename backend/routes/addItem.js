const db = require('../db');
const { v4: uuid } = require('uuid');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        title: req.body.title,
        publication_year: req.body.publication_year,
    };

    await db.storeItem(item);
    res.send(item);
};
