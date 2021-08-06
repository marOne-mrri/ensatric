const db = require('mongoose');

module.exports.start = () => {
    db.connect('mongodb://localhost:27017/ensatric', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, }).then(() => {
    }).catch(err => {
        console.log(`Error database : ${err}`);
        process.exit(1);
    });
}

module.exports.close = async () => {
    try {
        await db.disconnect();
    } catch (error) {
        return console.log(`${error}`);
    }
}