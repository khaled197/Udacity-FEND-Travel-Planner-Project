import { getGeoData } from '../js/app'
import img from '../media/pyramids.jpg';

test('this Url should take a city: Cairo and return countryName: Egypt', ()=>{
      return getGeoData('cairo').then(data => {
        expect(data.geonames[0]['countryName']).toBe('Egypt');
      });
    });
