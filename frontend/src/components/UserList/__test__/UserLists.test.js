import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../UserList'; 

describe('UserList Component', () => {
  it('should render loading state', () => {
    render(<UserList isLoading={true} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument(); 
  });

  it('should render error state', () => {
    render(<UserList error="Error message" />);
    expect(screen.getByText('Error: Error message')).toBeInTheDocument(); 
  });

  it('should render user list', () => {
    const mockData = {
      usersData: {
        data: [
          { id: 1, name: 'User 1' },
          { id: 2, name: 'User 2' },
        ],
      },
    };

    render(<UserList data={mockData} isLoading={false} />);
    expect(screen.getByText('User 1')).toBeInTheDocument();
    expect(screen.getByText('User 2')).toBeInTheDocument();
  });
});
