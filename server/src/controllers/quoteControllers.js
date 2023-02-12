const { Quote } = require('../../db/models');

const setQuote = async (req, res) => {
  try {
    const quoteDataLength = await Quote.findAll();
    // console.log('quoteDataLength------>', quoteDataLength.length);
    const min = 1;
    const max = quoteDataLength.length;
    const randomId = Math.floor(Math.random() * (max - min) + min);
    // console.log('randomId------>', randomId);
    const quoteData = await Quote.findOne({
      where: { id: randomId },
      // attributes: ['text'],
      raw: true,
    });
    // const text = quoteData.text;
    console.log('+++text+++++++', quoteData);
    res.json(quoteData);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

module.exports = setQuote;
