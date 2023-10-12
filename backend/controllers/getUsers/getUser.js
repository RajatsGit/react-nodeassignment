import fetchData from '../../utils/fetchDataFromPublicAPI.js';

export default async function getUser(req, res) {
    try {
        const usersData = await fetchData();

        if (!usersData || usersData.length === 0) {
            
            res.status(404).json({
                success: false,
                message: 'No data available',
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Data is available',
                usersData,
            });
        }
    } catch (error) {
       
        if (error.response) {
            
            res.status(error.response.status).json({
                success: false,
                message: 'API request failed',
                error: error.response.data,
            });
        } else if (error.request) {
            
            res.status(500).json({
                success: false,
                message: 'No response from the server',
            });
        } else {
            // Something else went wrong
            res.status(500).json({
                success: false,
                message: 'Failed to fetch data from API',
            });
        }
    }
}

