const BASE_URL = `https://eth-mainnet.g.alchemy.com/nft/v3/${import.meta.env.VITE_ALCHEMY_API_KEY}`;

export const fetchNFTsForWallet = async (walletAddress) => {
  try {
    const res = await fetch(
      `${BASE_URL}/getNFTsForOwner?owner=${walletAddress}&withMetadata=true&pageSize=50`
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Failed to fetch NFTs: ${errText}`);
    }

    const data = await res.json();
    return data.ownedNfts || [];
  } catch (err) {
    console.error("NFT fetch error:", err.message || err);
    return [];
  }
};

export const fetchFloorPrice = async (contractAddress) => {
  try {
    const res = await fetch(
      `${BASE_URL}/getFloorPrice?contractAddress=${contractAddress}`
    );
    const data = await res.json();
    return data.openSea?.floorPrice ?? null;
  } catch (err) {
    console.error("Floor price fetch error:", err);
    return null;
  }
};
