import MailValidator from './MailValidator';

describe('MailValidator', () => {
    it('should return error with invalid email adress', () => {
        const email = 'mailtest';
        const validator = new MailValidator(email, 'メールアドレス');
        return validator.validate()
            .catch((err) => {
                expect(err.success).toBeFalsy();
                expect(err.message).toBe('メールアドレスのフォーマットが異なります。')
            });
    });
});