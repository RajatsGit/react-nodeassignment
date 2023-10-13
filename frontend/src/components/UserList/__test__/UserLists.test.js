import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../UserLists.js'; 
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

describe('UserList Component', () => {
  it('should render error state', () => {
    render(
      <BrowserRouter>
    <UserList error="Error message" />
    </BrowserRouter>
    );
    expect(screen.getByText('Oh no, there was an error')).toBeInTheDocument(); 
  });

  it('should render user list', () => {
    const mockData = {
      usersData: {
        data: [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771",
              "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
              }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
              "name": "Deckow-Crist",
              "catchPhrase": "Proactive didactic contingency",
              "bs": "synergize scalable supply-chains"
            }
          },
          
        ],
      },
    };

    render(
      <BrowserRouter>
    <UserList data={mockData} isLoading={false} />
    </BrowserRouter>
    );
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Ervin Howell')).toBeInTheDocument();
  });
});
