import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginSignup.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const apiBaseUrl = "http://localhost:800/api";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });


  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupToggle = () => {
    setIsSignup(!isSignup);
    setFormData({
      rollNo: '',
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const userObj = {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
            role: formData.role,
        };

        try {
            const response = await fetch(`${apiBaseUrl}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userObj),
            });

            if (response.ok) {
                alert('Your Account is Created. Please Login');
                setIsSignup(false);
            } else {
                const errorText = await response.text();
                alert(`Error: ${errorText}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during the signup process.');
        }
    } else {
        const userObj = {
            email: formData.email,
            password: formData.password,
            role: formData.role,
        };

        if (formData.role === 'Admin' || formData.role === 'Teacher') {
            try {
                const response = await fetch(`${apiBaseUrl}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userObj),
                });

                if (response.ok) {
                    switch (userObj.role) {
                        case 'Admin':
                            navigate('/adminDashboard');
                            break;
                        default:
                            navigate('/teacherDashboard');
                       
                    }
                } else {
                    const errorText = await response.text();
                    alert(`Error: ${errorText}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during the login process.');
            }
        } else if (formData.role === 'Student') {
            const studentObj = {
                rollNo: formData.rollNo,
                password: formData.password,
                role: formData.role,
            };

            try {
                const response = await fetch(`${apiBaseUrl}/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(studentObj),
                });

                if (response.ok) {
                    navigate('/dashboard');
                } else {
                    const errorText = await response.text();
                    alert(`Error: ${errorText}`);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred during the login process.');
            }
        }
    }
};

  return (
    <>
      <Navbar />
      <section className="login-signup container-fluid">
        <div className="row">
          <div className="col-12 mb-5 vh-100">
            <div className="container h-custom">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0">
                  <img src="src/assets/images/draw2.webp" className="img-fluid" alt="Sample" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={handleSubmit}>

                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p className="lead fw-normal mb-0 me-3">
                        {isSignup ? 'Sign Up with' : 'Sign in with'}
                      </p>
                      <button type="button" className="btn btn-primary btn-floating btn-sm mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" className="btn btn-primary btn-floating btn-sm mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button type="button" className="btn btn-primary btn-floating btn-sm mx-1">
                        <i className="fab fa-linkedin-in"></i>
                      </button>
                    </div>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    
                    {isSignup &&   (
                      <>    <div className="form-outline mb-3">
                      <select
                        name="role"
                        id="roleId"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="form-select form-select-sm"
                      >
                        <option value="" disabled>
                          Select Your Role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Teacher">Teacher</option>
                      </select>
                    </div>
                           </>    )}


                    {!isSignup &&   (

                      <>   
                       <div className="form-outline mb-3">
                      <select
                        name="role"
                        id="roleId"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="form-select form-select-sm"
                      >
                        <option value="" disabled>
                          Select Your Role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                           </>    )}

                    {isSignup &&   (
                      <>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                            placeholder="Enter your Full Name"
                            required
                          />
                        </div>
                        <div className="form-outline mb-3">
                          <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="form-control form-control-sm"
                            placeholder="Enter Phone Number"
                            required
                          />
                        </div>
                      </>
                    )}

{
  formData.role == "Student" &&(
   <div className="form-outline mb-4">
   <input
     type="text"
     name="rollNo"
     value={formData.rollNo}
     onChange={handleInputChange}
     className="form-control form-control-sm"
     placeholder="Enter Your Roll Number"
     required
   />
 </div>
  )
}

{
  formData.role == "Admin" &&(              
<div className="form-outline mb-4">
   <input
     type="email"
     name="email"
     value={formData.email}
     onChange={handleInputChange}
     className="form-control form-control-sm"
     placeholder="Enter Your email "
     required
   />
 </div>
   )
  }
  {
  formData.role == "Teacher" &&(              
<div className="form-outline mb-4">
   <input
     type="email"
     name="email"
     value={formData.email}
     onChange={handleInputChange}
     className="form-control form-control-sm"
     placeholder="Enter Your email "
     required
   />
 </div>
   )
  }
  
                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-control form-control-sm"
                        placeholder="Enter password"
                        required
                      />
                    </div>

                    {isSignup && (
                      <div className="form-outline mb-3">
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="form-control form-control-sm"
                          placeholder="Confirm password"
                          required
                        />
                      </div>
                    )}

                    {!isSignup && (
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                          </label>
                        </div>
                        <a href="#!" className="text-body">
                          Forgot password?
                        </a>
                      </div>
                    )}

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                      >
                        {isSignup ? 'Sign Up' : 'Login'}
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}
                        <a href="#!" className="link-danger" onClick={handleSignupToggle}>
                          {isSignup ? 'Login' : 'Sign Up'}
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { LoginSignup };
