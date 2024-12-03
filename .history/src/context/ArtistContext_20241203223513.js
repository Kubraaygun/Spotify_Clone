import {createContext} from 'react';

const ArtistContext = createContext();

const ArtistProvider = ({children}) => {
  return <ArtistContext.Provider>{children}</ArtistContext.Provider>;
};

export {ArtistContext, ArtistProvider};
