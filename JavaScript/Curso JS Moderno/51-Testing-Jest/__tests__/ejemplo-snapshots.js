const cliente = {
    nombre: 'Emanuel',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Emanuel', () => {
        expect(cliente).toMatchSnapshot();
    });
});