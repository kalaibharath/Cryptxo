// uuffKVcF0lI9Bd6DgS9rK1vwm0MeZozY
// https://eth-ropsten.alchemyapi.io/v2/uuffKVcF0lI9Bd6DgS9rK1vwm0MeZozY

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/uuffKVcF0lI9Bd6DgS9rK1vwm0MeZozY',
            accounts: ['624eeee0b5667572808ae043d1fdc4b88d51d4368b30b7a018d62be5b2a07c1e'],
        },
    },
};