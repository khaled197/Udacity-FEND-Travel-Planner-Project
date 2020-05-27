const fetch = require("node-fetch");
const GEO_BASE_URL = 'http://api.geonames.org/searchJSON?q=city&maxRows=1&username={un}'
const GEO_USER_NAME = 'khaled_N'


/**
 * @description gets data from the geonames server
 * @param {city} string - the city which the user wants to travel to
 */
export const getGeoData = async (city) => {
    let url = GEO_BASE_URL.replace('city', city).replace('{un}', GEO_USER_NAME);
    const response = await fetch(url);
    try {
        const data = await response.json();
        // console.log(data);
        // console.log(data.geonames[0]['countryName']);
        // console.log(data.geonames[0]['lat']);
        // console.log(data.geonames[0]['lng']);
        return {
            'countryName': data.geonames[0]['countryName'],
            'lat': data.geonames[0]["lat"],
            'lng': data.geonames[0]["lng"]
        };
    } catch (e) {
        console.log('error getting the data from geonames')
    }
}
