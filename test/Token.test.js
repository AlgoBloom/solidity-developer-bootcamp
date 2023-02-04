const Token = artifacts.require("./Token")

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token', (accounts) => {
    describe('deployment', () => {
        it('tracks the name', async () => {
            // fetch token from the blockchain
            const token = await Token.new()
            const result = token.name()
            // check the name
            result.should.equal('MyName')
        })
    }
})