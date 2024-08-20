import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginSignup } from './components/LoginSignup';
import { Dashboard } from './components/Dashboard';
import { AdminDashboard } from './components/dasboardComponents/AdminDashboard';
import { getUser } from './context/UserContext';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard getUser={getUser} />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginSignup />} />

      </Routes>
    </Router>
  );
}

export default App;
