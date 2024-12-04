import {createContext, useState} from 'react';

export const AlbumContext = createContext();

export const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: 'Turkiye de populer olanlar',
      type: 'albums',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5',
    },
    headers: {
      'x-rapidapi-key': '0ae73afa42msh492c768e6f710ddp1f96e6jsnc03826257744',
      'x-rapidapi-host': 'spotify23.p.rapidapi.com',
    },
  };

  return (
    <AlbumContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumContext.Provider>
  );
};