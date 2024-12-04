import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const AlbumContext = createContext();

export const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
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

    try {
      const response = await axios.request(options);

      const albumItems = response.data?.albums?.items?.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        covertArt: item.data.coverArt?.sources[0]?.url,
        year: item.data.date.year,
      }));

      setAlbums(albumItems);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <AlbumContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumContext.Provider>
  );
};
