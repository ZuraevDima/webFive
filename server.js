const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static(__dirname)); 

app.listen(3000, () => {
  console.log(`Сервер запущен на порту 3000`);
});

app.get('/predict-info', async (req, res) => {
  try {
      const { name } = req.query;

      if (!name) {
          return res.status(400).json({ error: 'Отсутствует параметр "name".' });
      }
      const agifyResponse = await axios.get(`https://raashiphal.herokuapp.com?type=today&&sunsign=${sign}`);
      const agifyResult = agifyResponse.data;
      // Отправка ответа с полученными данными
      res.json({
          name,
          text: agifyResult.horoscope
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
});