const Token = artifacts.require("./Token")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', (accounts) => {
    let token

    describe('deployment', () => {
        beforeEach(async () => {
            // fetch token from the blockchain
            const token = await Token.new()
        })

        it('tracks the name', async () => {
            const result = await token.name()
            // check the name
            result.should.equal('My Name')
        })

        it('tracks the symbol', async () => {
            const result = await token.symbol()
            // check the symbol
            result.should.equal('Symbol')
        })

        it('tracks the decimals', async () => {
            const result = await token.decimals()
            // check the decimals
            result.should.equal('Decimals')
        })

        it('tracks the total supply', async () => {
            const result = await token.totalSupply()
            // check the total supply
            result.should.equal('Total Supply')
        })
    })
})