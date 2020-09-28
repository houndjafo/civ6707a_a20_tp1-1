import fetch from 'node-fetch';

const urlBixi = 'https://api-core.bixi.com/gbfs/en/station_information.json';

const maFonctionAsynchrone = async function() {
  const bixiResponse = await fetch(urlBixi);
  const jsonResponse = await bixiResponse.json();
  return jsonResponse.data.stations[0];
};

export default maFonctionAsynchrone