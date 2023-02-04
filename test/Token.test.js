const Token = artifacts.require("./Token")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', (accounts) => {
    const name = 'My Name'
    const symbol = 'Symbol'
    const decimals = 'Decimals'
    const totalSupply = 'Total Supply'
    let token

    describe('deployment', () => {
        beforeEach(async () => {
            // fetch token from the blockchain
            const token = await Token.new()
        })

        it('tracks the name', async () => {
            const result = await token.name()
            // check the name
            result.should.equal(name)
        })

        it('tracks the symbol', async () => {
            const result = await token.symbol()
            // check the symbol
            result.should.equal(symbol)
        })

        it('tracks the decimals', async () => {
            const result = await token.decimals()
            // check the decimals
            result.should.equal(decimals)
        })

        it('tracks the total supply', async () => {
            const result = await token.totalSupply()
            // check the total supply
            result.should.equal(totalSupply)
        })
    })
})