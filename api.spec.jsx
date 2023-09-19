const fetch = require('node-fetch');
const { digiAPI }= require('./api');

describe('Testa se a API está retornando o desejado', () => {
  it('Deve retornar qualquer coisa', async () => {

    const result = await digiAPI();

    expect(result).toBe('aloha');
  })
})
