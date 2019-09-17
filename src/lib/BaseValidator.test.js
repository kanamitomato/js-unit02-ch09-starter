import BaseValidator from './BaseValidator';

describe('BaseValidator', () => {
    it("should pass with valid data", () => {
        const email = "/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i";
        const validator = new BaseValidator(email);
        return validator._cannotEmpty()
            .then((res) => {
                expect(res).toBe(validator)
            })
    });
})
