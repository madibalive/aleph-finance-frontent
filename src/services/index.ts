import axiosInstance from '../utils/axios';

const SummaryData = {
  user: {
    name: 'Adam.eth',
    address: '0x1234567890123456789012345678901234567890',
    net_worth: 1234.56,
  },
  nodes: [
    {
      total: 123.45,
      last_24_hours: 9.45,
      name: 'Daily Rewards',
    },
    {
      total: 345.45,
      last_24_hours: 12.45,
      name: 'Monthly Rewards',
    },
    {
      total: 3450.45,
      last_24_hours: 2.45,
      name: 'Total Claimable ',
    },
  ],
};

const getEndpoinst = (address: string) => {
  const endpoints = ['bsc', 'eth', 'xdai', 'matic', 'ftm', 'okt', 'heco', 'avax'].map((item) => {
    return {
      chain: item,
      endpoint: `token/balance_list?user_addr=${address}&is_all=false&chain=${item}`,
    };
  });

  return endpoints;
};

// axios promise all request
const fetchAddressData = async (address: any[]) => {
  //   const response = await axiosInstance.get(`address/${address}`);
  // axios post request
  const response = await axiosInstance.post('address', address);
  return response.data;
  //   return response.data.data;
};

// axios promise all request
const fetchweb3Data = async (address: any[]) => {
  //   const response = await axiosInstance.get(`address/${address}`);
  // axios post request
  const response = await axiosInstance.post('web3', address);
  return response.data;
  //   return response.data.data;
};

export { fetchAddressData, fetchweb3Data, SummaryData };
