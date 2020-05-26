/**
* @description gets the number of days between today and the day of travelling.
* @param {fdate} dateObject - the date of travelling.
*/
export function getDateDiff (fDate) {
    let a = new Date();
    let currDate = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    let dateArray = fDate.split('-');
    const futDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    const diffTime = Math.abs(futDate - currDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // console.log(diffDays);
    return diffDays;
}
