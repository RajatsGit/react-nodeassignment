import fetchData from '../../utils/fetchDataFromPublicAPI.js'

export default async function getUser(req,res) {
    try {
        const data = await fetchData();

        res.status(200).json({
            success:true,
            message:'data is available',
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to fetch data from API',
        })
    }
}