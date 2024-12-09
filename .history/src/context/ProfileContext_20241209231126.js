import {createContext} from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
};
