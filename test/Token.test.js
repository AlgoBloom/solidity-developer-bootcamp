const Token = artifacts.require("./Token")

contract('Token', (accounts) => {
    describe('deployment', () => {
        it('tracks the name', () => {
            await Token.new()
        })
    }
})