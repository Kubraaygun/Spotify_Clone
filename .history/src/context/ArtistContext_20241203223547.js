import {createContext} from 'react';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  return <ArtistContext.Provider value={{}}>{children}</ArtistContext.Provider>;
};

export {ArtistContext, ArtistProvider};
