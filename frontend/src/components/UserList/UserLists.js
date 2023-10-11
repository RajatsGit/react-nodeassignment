import React, { useMemo, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from 'react-router-dom';

function UserList({ data, isLoading, error }) {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredUsers = useMemo(() => {
    let users = data?.usersData?.data || [];
    const regexName = new RegExp(searchParams.get('search'), 'i');
    const regexCity = new RegExp(searchParams.get('city'), 'i');

    if (searchParams.get('search')) {
      users = users.filter((entry) =>
        Object.values(entry).some((val) => typeof val === 'string' && val.match(regexName))
      );
    }
    if (searchParams.get('city')) {
      users = users.filter((entry) => regexCity.test(entry?.address?.city));
    }
    return users;
  }, [data?.usersData?.data?.length, searchParams.get('search'), searchParams.get('city')]);

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
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'large' }}
        />
      ) : data ? (
        <>
          {filteredUsers.slice(startIndex, endIndex).map((user, id) => (
            <div key={user.id}>
              <h3 key={user.id}>{user.name}</h3>
            </div>
          ))}
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
          />
        </>
      ) : null}
    </div>
  );
}

export default UserList;
