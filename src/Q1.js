const express = require('express');
const axios = require('axios');
const app = express();


app.get('/nums', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send({ error: 'Required URL query parameter' });
  }

  try {
    const response = await axios.get(url);
    const nums = response.data;

    if (!Array.isArray(nums)) {
      return res.status(400).send({ error: 'Must return array' });
    }

    const sortNum = nums.sort((num1, num2) => num1 - num2);
    res.send(sortNum);
  } catch (error) {
    res.status(500).send(
        { error: 'Error while fetching' });
  }
});

app.listen(3000, () => {
  console.log('Listening at port 3000');
});