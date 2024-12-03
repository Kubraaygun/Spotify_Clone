import {createContext} from 'react';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  const [artists, setArtists] = useState([]);

  return <ArtistContext.Provider value={{}}>{children}</ArtistContext.Provider>;
};

export {ArtistContext, ArtistProvider};
