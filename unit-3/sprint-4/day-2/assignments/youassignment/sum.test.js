import {sum,timetostr} from "./scripts/sum"

test('Just Testing', ()=>{
    expect(sum(1,2)).toBe(3)    
})


test('Get Time', () => {
    
    expect(timetostr(5400000)).toBe('5 seconds');
})