import React from 'react';
// import Signup from './components/signup';

// function App() {
//   return (
//     <div>
//       <Signup/>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import HomePage from './pages/HomePage';
import Signup from './components/signup';
import Login from './components/login';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
