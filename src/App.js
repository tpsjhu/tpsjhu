import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './components/Footer'
import { createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Archive from './Archive';
import BlogPage from './BlogPage';

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
      <Router>
        <Header theme={theme}/>
          <Routes>
            <Route path="/" element={<Home theme={theme}/>} /> 
            <Route path="/archive" element={<Archive theme={theme}/>} /> 
            <Route path="/blog" element={<BlogPage theme={theme}/>} /> 
          </Routes>
        </Router>
      </Container>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
