import { expect, test } from 'vitest' 
import * as math from './sum'

test('sum test', ()=>{
  expect(math.sum(1,2)).toEqual(3)
})