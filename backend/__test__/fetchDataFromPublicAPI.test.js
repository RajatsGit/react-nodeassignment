import axios from "axios";
import fetchDataFromPublicAPI from '../utils/fetchDataFromPublicAPI';

jest.mock('axios');

describe('fetchDataFromPublicAPI', () => {
  it('fetches successfully data from an API', async () => {
   
    const responseData = [{ id: 1, name: 'User 1' }];
    axios.get.mockResolvedValue({ data: responseData });

    const result = await fetchDataFromPublicAPI();

    expect(result.success).toBe(true);
    expect(result.data).toEqual(responseData);
  });

  it('handles API request error', async () => {
   
    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await fetchDataFromPublicAPI();

    expect(result.success).toBe(false);
    expect(result.message).toBe('Error in fetching data from Public API');
  });
});
