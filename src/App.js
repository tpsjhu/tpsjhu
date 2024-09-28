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
import AboutUs from './AboutUs';
import Tree from './Tree';
import NewPost from './NewPost';
import SignIn from './SignIn';
import Events from './Events';
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import AdminDashboard from "./AdminDashboard";
import {useEffect, useState} from "react";
import StateProvider from "./Provider/StateProvider";
import Loader from "./common/Loader/Loader";
import NewEvent from "./NewEvent";

// I don't think createTheme is created on time before it is passed to the different routes initially
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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("token")){
        setLoggedIn(true);
    }
  }, [])


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return loading ? (
      <Loader />
  ) : (
    <div className="App">
      <StateProvider loggedIn={loggedIn} setLoggedIn={setLoggedIn} >
      <Container maxWidth="lg">
      <Router>
        <Header theme={theme}/>
          <Routes>
            <Route  path="/" element={<Home theme={theme}/>} />
            <Route path="/archive" element={<Archive theme={theme}/>} /> 
            <Route path="/blog/:uuid" element={<BlogPage theme={theme} />} />
            <Route path="/aboutus" element={<AboutUs theme={theme}/>} /> 
            <Route path="/tree" element={<Tree theme={theme}/>} />
            <Route path="/newPost/:pathId?" element={<NewPost theme={theme}/>} />
            <Route path="/newEvent" element={<NewEvent theme={theme}/> } />
            <Route path="/signin" element={<SignIn theme={theme}/>} />
            <Route path="/events" element={<Events theme={theme}/>} />
            <Route path='/dashboard' element={<AdminDashboard theme={theme}/>} />
          </Routes>
        </Router>
      </Container>
      </StateProvider>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
