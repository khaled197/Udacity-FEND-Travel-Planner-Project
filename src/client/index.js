import {handleSubmit} from './js/app';
import {removeTrip} from './js/app'
import {setDefaultAttributes} from './js/app'
import {getGeoData} from './js/getGeonamesData'
import 'regenerator-runtime/runtime';
import './styles/resets.scss'
import './styles/style.scss'
import './styles/header.scss'


setDefaultAttributes();

document.getElementById('rm-btn').addEventListener('click',removeTrip);

export {
    handleSubmit,
    removeTrip,
    setDefaultAttributes,
    getGeoData
}
