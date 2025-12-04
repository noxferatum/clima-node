const axios = require('axios');

// Usa la API de geocodificación de OpenWeather para obtener lat/lon a partir del nombre.
const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURIComponent(dir);
    const appId = 'a6558cff4a1485c9911b0860350982a0';
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodedUlr}&limit=1&appid=${appId}`;

    const resp = await axios.get(url);

    if (!resp.data || resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};
