import Routes from './src/navigation/Routes';
import {ArtistContext} from './src/context/ArtistContext';

const App = () => {
  return (
    <ArtistContext.Provider>
      <Routes />
    </ArtistContext.Provider>
  );
};

export default App;
