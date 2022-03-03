pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract MemoryToken is ERC721Full{
  constructor() ERC721Full("MemoryToken", "MEMORY") public {

  }
  function mint(address _to, string memory _tokenURI) public returns(bool){
    uint tokenId = totalSupply().add(1);
    _mint(_to, tokenId);
    _setTokenURI(tokenId, _tokenURI);
    return true;
  }

}
