const axios = require('axios');

const getClima = async(lat, lng) => {
    const apiKey = process.env.OPENWEATHER_KEY;
    if (!apiKey) {
        throw new Error('Configura la variable de entorno OPENWEATHER_KEY');
    }

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};
