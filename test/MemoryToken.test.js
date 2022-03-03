const { assert } = require('chai');

const MemoryToken = artifacts.require('./MemoryToken.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Memory Token', (accounts) => {
  let token;

  describe('deployment', async () => {
    it('deploys sucsessfully', async () => {
       token = await MemoryToken.deployed()
       const address = token.address
       assert.notEqual(address, 0x0)
    })
  })


  describe('token distribution ', async () => {
  let result 

  it('mints tokens ', async() => {
    await token.mint(accounts[0], 'https://www.token-uri/ntf')
    result = await token.totalSupply()
    assert.equal(result.toString(), '1', 'total supply is correct')

    result = await token.balanceOf(accounts[0])
    assert.equal(result.toString(), '1', 'balanOf is correct')

    result = await token.ownerOf('1')
    assert.equal(result.toString(), accounts[0], 'ownerOf is correct')
  })
  })

})
