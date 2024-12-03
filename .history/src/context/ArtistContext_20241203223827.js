import {createContext, useState} from 'react';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  const [artists, setArtist] = useState([]);

  return <ArtistContext.Provider value={{}}>{children}</ArtistContext.Provider>;
};

export {ArtistContext, ArtistProvider};
