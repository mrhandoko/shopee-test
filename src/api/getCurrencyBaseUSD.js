import fetch from 'isomorphic-fetch';

const url = 'https://exchangeratesapi.io/api/latest?base=USD';

const getCurrencyBaseUSD = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export default getCurrencyBaseUSD;
