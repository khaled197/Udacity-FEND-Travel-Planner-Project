import {
    getGeoData
} from '../client/js/getGeonamesData'


test('This function should take a name of city which is Cairo and return the data about it including th county name which is Egypt ', async () => {
    const data = await getGeoData('cairo');
    expect(data['countryName']).toEqual('Egypt');
});
