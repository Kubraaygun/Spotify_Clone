import Routes from './src/navigation/Routes';
import {ArtistContext} from './src/context/ArtistContext';

const App = () => {
  return (
    <ArtistContext>
      <Routes />
    </ArtistContext>
  );
};

export default App;
