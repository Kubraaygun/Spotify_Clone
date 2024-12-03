import {createContext, useState} from 'react';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  const [artists, setArtist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return <ArtistContext.Provider value={{}}>{children}</ArtistContext.Provider>;
};

export {ArtistContext, ArtistProvider};
