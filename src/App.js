import './App.css';
import Home from './Home'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5271FF',
      darker: '#021882',
    },
    // neutral: {
    //   main: '#64748B',
    //   contrastText: '#fff',
    // },
  },
});

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Technology and Policy Society at Johns Hopkins
        </p>
      </header> */}
      <Home theme={theme}/>
    </div>
  );
}

export default App;
