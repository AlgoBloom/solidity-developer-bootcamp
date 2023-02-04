const Token = artifacts.require("./Token")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', (accounts) => {
    const name = 'DApp Token'
    const symbol = 'DAPP'
    const decimals = '18'
    const totalSupply = '1000000000000000000000000'
    let token

    beforeEach(async () => {
        // fetch token from the blockchain
        token = await Token.new()
    })

    describe('deployment', () => {
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
                result.toString().should.equal(decimals)
            })

            it('tracks the total supply', async () => {
                const result = await token.totalSupply()
                // check the total supply
                result.toString().should.equal(totalSupply)
            })
    })
})