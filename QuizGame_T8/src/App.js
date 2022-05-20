import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import WelcomePage from './components/WelcomePage';
import QuizGame from './components/QuizGame';
import {Container} from '@mui/material';

function App() {
  return (
    <div className="App">
           <Router>
             <Container maxWidth='100%' sx={{bgcolor:"#3ca6a4"}}>
                  <Routes>
                      <Route path="/" element={<WelcomePage/>}/>
                      <Route path="/QuizGame" element={<QuizGame/>}/>
                  </Routes>
              </Container>
           </Router>
    </div>
  );
}

export default App;
