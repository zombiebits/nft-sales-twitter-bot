export const config = {
  // Contract Address ======================================== //
  contract_address: '0xa3738Ee6fe2d7Ed793Ae131fB279706A6e2Fccff',
  //
  // uncomment the 2 lines above to use local images instead of retrieving images from ipfs for each tweet
  use_local_images: false,
  local_image_path: './token_images/prefix',
  // 
  // this is a configuration for the phunk bid demo extension
  local_bids_image_path: './bids_images/Phunk_',
  //
  // Fiat Conversion Currency ================================ //
  // Available Options: ====================================== //
  // usd, aud, gbp, eur, cad, jpy, cny ======================= //
  currency: 'usd',
  // Message ================================================= //
  // Available Parameters: =================================== //
  // <tokenId> ==================== Token ID of transfered NFT //
  // <ethPrice> ================= Value of transactions in eth //
  // <fiatPrice> =============== Value of transactions in fiat //
  // <txHash> =========================== The transaction hash //
  // <from> ===================================== From address //
  // <to> ========================================= To address //
  saleMessage: '🚨🐮MOOOO! BFF #<tokenId> was sold for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xf07468ead8cf26c752c676e43c814fee9c8cf402/<tokenId>\nhttps://looksrare.org/collections/0xf07468ead8cf26c752c676e43c814fee9c8cf402/<tokenId>\n',
  bidMessage: '🚨🐮MOOO! BFF #<tokenId> received a bid for 💰 <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/0xf07468ead8cf26c752c676e43c814fee9c8cf402/<tokenId>\nhttps://looksrare.org/collections/0xf07468ead8cf26c752c676e43c814fee9c8cf402/<tokenId>\n',
  // Prefer ENS over 0x address (Uses more Alchemy requests) = //
  // Available Options: ====================================== //
  // true, false ============================================= //
  ens: true,
  // Include free mints in tweets ============================ //
  // Available Options: ====================================== //
  // true, false ============================================= //
  includeFreeMint: false,
};
