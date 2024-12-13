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
        'x-rapidapi-key': import.meta.env.API_KEY,
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
    setError(null);
  }, []);

  return (
    <ProfileContext.Provider value={{profileData, loading, error}}>
      {children}
    </ProfileContext.Provider>
  );
};
