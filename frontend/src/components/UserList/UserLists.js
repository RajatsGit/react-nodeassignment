import React, { useMemo, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';
import AccordinBox from '../Accordin/AccordinBox';
import { Box } from '@mui/material';
import { userListsStyleObject } from './Styles/UserListsStyleObject';


function UserList({ data, isLoading, error }) {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredUsers = useMemo(() => {
    let users = data?.usersData?.data || [];
    const regexName = new RegExp(searchParams.get('search'), 'i');
    const regexCity = new RegExp(searchParams.get('city'), 'i');
    const regexCompany = new RegExp(searchParams.get('company'), 'i');

    if (searchParams.get('search')) {
      users = users.filter((entry) =>
        Object.values(entry).some((val) => typeof val === 'string' && val.match(regexName))
      );
    }
    if (searchParams.get('city')) {
      users = users.filter((entry) => regexCity.test(entry?.address?.city));
    }
    if (searchParams.get('company')) {
      users = users.filter((entry) => regexCompany.test(entry?.company?.name));
    }
    return users;
  }, [data?.usersData?.data?.length, searchParams.get('search'), searchParams.get('city'),searchParams.get('company')]);

  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <CircularProgress
          sx={userListsStyleObject.circularProgress}
        />
      ) : data ? (
        <>
        <Box sx={userListsStyleObject.accordinBoxParent}>
          {filteredUsers.slice(startIndex, endIndex).map((user, id) => (
            <AccordinBox user={user}/>
          ))}
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            size='large'
            variant="outlined" 
            color="secondary"
          />
        </Box>
        </>
      ) : null}
    </div>
  );
}

export default UserList;
