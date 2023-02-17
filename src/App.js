import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './components/Footer'
import { createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 'sans-serif'
    ].join(','),
  },
    palette: {
    primary: {
      main: '#5271FF',
      darker: '#021882',
    },
    header: {
      primary: '#021882',
      secondary: '#5271FF',
    },
    },
});

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header theme={theme}/>
        <Home theme={theme}/>
      </Container>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
