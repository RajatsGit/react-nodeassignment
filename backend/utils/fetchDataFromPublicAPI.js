import axios from "axios";

export default async function fetchDataFromPublicAPI(){
try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    return {
        success:true,
        data
    };
} catch (error) {
    return {
        success:false,
        message: 'Error in fetching data from Public API'
    }
}
} 
