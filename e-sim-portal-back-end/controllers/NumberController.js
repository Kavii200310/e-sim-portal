const NumberService = require('../services/NumberService');

const getAvailableNumbers = async (req, res) => {
  try {
    const { type } = req.query;
    const numbers = await NumberService.getAvailableNumbers(type);

    if (!numbers) {
      return res.status(200).json([]);
    }
    res.status(200).json(numbers);
  } catch (error) {
    console.error('Error fetching numbers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const lockNumber = async (req, res) => {
  try {
    const { id } = req.params;
    const lockedNumber = await NumberService.lockNumber(id);

    if (!lockedNumber) {
      







































































































































      
      return res.status(409).json({ error: 'Number already taken or invalid' });
    }

    res.status(200).json({ message: 'Number reserved successfully', number: lockedNumber });
  } catch (error) {
    console.error('Error locking number:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAvailableNumbers,
  lockNumber
};