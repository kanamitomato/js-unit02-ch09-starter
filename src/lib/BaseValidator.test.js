import BaseValidator from './BaseValidator';

describe('base validator', () => {
    it("should pass with valid data", () => {
        const value = "value";
        const validator = new BaseValidator(value);
        return validator.validate()
            .then((res) => {
                expect(res).toEqual({
                    success: true
                });
            });
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
