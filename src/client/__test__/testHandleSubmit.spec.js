import 'babel-polyfill'
import { handleSubmit } from '../js/formHandler'

describe('Client Test', () => {
    test('handleSubmit should return true', () => {
        expect(handleSubmit('https://jamesclear.com/saying-no')).toBeTruthy()
    })
})
