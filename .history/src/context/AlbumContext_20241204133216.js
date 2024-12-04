import {createContext} from 'react';

export const AlbumContext = createContext();

export const AlbumsProvider = ({children}) => {
  return <AlbumContext.Provider value={{}}>{children}</AlbumContext.Provider>;
};
