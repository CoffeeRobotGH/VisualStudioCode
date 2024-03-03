const cliente = {
    nombre: 'Emanuel Paredes',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Emanuel Paredes', () => {
        expect(cliente.nombre).toBe('Emanuel Paredes');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400);
    });
});