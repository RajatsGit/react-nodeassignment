import { Box } from "@mui/material";
import FilterBar from "../../components/FilterBar";
import UserList from "../../components/UserList/UserLists";

import { useGetUsersQuery } from '../../redux/services/userDataFetch';

function Home() {

  const { data, error, isLoading } = useGetUsersQuery()
  // console.log(data.usersData.data);
 
  return (
    
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <FilterBar data={data?.usersData?.data}/>
          <UserList data={data} error={error} isLoading={isLoading}/>
        </Box>

  );
}

export default Home;