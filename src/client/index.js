import {handleSubmit} from './js/app'
import {removeTrip} from './js/app'
import {setDateStartLimit} from './js/app'


setDateStartLimit();
document.getElementById('rm-btn').addEventListener('click',removeTrip);
