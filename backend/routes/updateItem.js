const db = require('../db');

module.exports = async (req, res) => {
    await db.updateItem(req.params.id, {
        title: req.body.title,
        publication_year: req.body.publication_year,
    });
    const item = await db.getItem(req.params.id);
    res.send(item);
};
