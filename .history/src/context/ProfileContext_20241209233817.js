import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: 'nocopyrightsounds',
        playlistLimit: '10',
        artistLimit: '10',
      },
      headers: {
        'x-rapidapi-key': '0ae73afa42msh492c768e6f710ddp1f96e6jsnc03826257744',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setProfileData(response.data);
      setLoading(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
    setLoading(false);
    setError(null); // Reset error when component unmounts to avoid memory leaks.
  }, []);

  return (
    <ProfileContext.Provider value={{profileData, loading, error}}>
      {children}
    </ProfileContext.Provider>
  );
};
