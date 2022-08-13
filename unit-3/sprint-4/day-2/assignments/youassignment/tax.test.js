import {tax} from "./scripts/tax";

test('Tax amount to be charged', ()=>{
    expect(tax(400000)).toBe('no data')
})