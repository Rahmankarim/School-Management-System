import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  async function signout() {
    try {
      const response = await fetch('http://localhost:800/api/logout', {
        method: 'POST',
        credentials: 'include', // Important for including cookies
      });
      
  
      if (!response.ok) {
        // Log the response status if not OK
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Clear authentication data from localStorage or sessionStorage
      localStorage.removeItem('token'); // Adjust if needed
      // Or sessionStorage
       //sessionStorage.removeItem('token');
  
      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Error during signout:', error);
      alert(`An error occurred during signout: ${error}`);
    }
  }
  
  
  return (
    <div className="col-12 mt-4 text-center d-flex justify-content-between">
      <h2 className="text-success">Welcome Admin!</h2>
      <button className="btn btn-outline-danger" onClick={signout}>SignOut</button>
    </div>
  );
}

export default Header;
