import { checkURL } from '../js/checkURL'

describe('checking if the URL Validator works', () => {
    test("Checking if it's defined", () => {
        expect(checkURL).toBeDefined()
    })

    test("Checking that's detects an invalid URL", () => {
        expect(checkURL('invalidURL')).toBeFalsy()
    })

    test('Checking if it returns true for valid url', () => {
        expect(checkURL('https://jamesclear.com/dont-start-from-scratch')).toBeTruthy()
    })
})
