const Token = artifacts.require("./Token")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', (accounts) => {

    describe('deployment', () => {
        it('tracks the name', async () => {
            // fetch token from the blockchain
            const token = await Token.new()
            const result = await token.name()
            // check the name
            result.should.equal('My Name')
        })

        it('tracks the symbol', async () => {
        })

        it('tracks the decimals', async () => {
        })

        it('tracks the total supply', async () => {
        })
    })
})