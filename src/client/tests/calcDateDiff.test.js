import { getDateDiff } from '../js/calcDateDiff'


 test('This function should return diff in days = 0 if I pass to it the current date which is 26, may in a string ',  ()=>{
         expect(getDateDiff('2020-05-26')).toBe(0)
      });
