import BaseValidator from './BaseValidator';

describe('BaseValidator', () => {
    it('should pass with valid data', () => {
        const email = 'mail@test.com';
        const validator = new BaseValidator(email, 'メールアドレス');
        return validator._cannotEmpty()
            .then((res) => {
                expect(res).toEqual(validator)
            })
    });

    it('should return error with empty value', () => {
        const email = '';
        const validator = new BaseValidator(email, 'メールアドレス');
        return validator._cannotEmpty()
            .catch((err) => {
                expect(err.success).toBeFalsy();
                expect(err.message).toBe('メールアドレスは必須です。')
            });
    });
})
