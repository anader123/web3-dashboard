export const addressShortener = (address) => {
  if(address !== undefined) {
    const shortAddress = `${address.slice(0, 6)}...${address.slice(37, 42)}`;
    return shortAddress;
  }
}
