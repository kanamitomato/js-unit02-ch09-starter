import BaseValidator from './BaseValidator';

describe('BaseValidator', () => {
    it("should pass with valid data", async () => {
        const email = "/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i";
        const validator = new BaseValidator(email);
        return validator._cannotEmpty()
            .then((res) => {
                expect(res).toMatch(validator)
            })
    });

    it("should return error with empty value", () => {
        const value = "";
        const validator = BaseValidator(value);
        return validator.validate()
            .then((res) => {
                expect(res.success).toBeFalsy();
                expect(res.message).toBe('パスワードは必須です。')
            });
    });
})
