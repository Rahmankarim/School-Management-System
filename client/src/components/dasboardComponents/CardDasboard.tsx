import React from 'react';
import { StudentData } from '../../@types/StudentData';

interface CardDasboardProps {
  userData: StudentData | null; 
}

const CardDasboard: React.FC<CardDasboardProps> = ({ userData }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 mb-5 col-lg-3">
          <a href="">
            <div className="card">
              <div className="card-body">
                <section className="d-flex justify-content-between align-items-center">
                  <div className="rightsideIcon">
                    <i className="fas fa-chart-bar text-success display-6"></i>
                  </div>
                  <div className="leftsideNames">
                    <h5 className="card-title">Std Progress</h5>
                    <h5 className="card-text">Sem: {userData?.semester || 'N/A'}</h5>
                  </div>
                </section>
                <div className="down-things">
                  <hr />
                  <p className="card-text">Std progress so far</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Courses Card */}
        <div className="col-md-6 mb-5 col-lg-3">
          <a href="#">
            <div className="card">
              <div className="card-body">
                <section className="d-flex justify-content-between align-items-center">
                  <div className="rightsideIcon">
                    <i className="fas fa-book text-primary display-6"></i>
                  </div>
                  <div className="leftsideNames">
                    <h5 className="card-title">Courses</h5>
                    <h5 className="card-text">Sub: {userData?.semester || 'N/A'}</h5>
                  </div>
                </section>
                <div className="down-things">
                  <hr />
                  <p className="card-text">Courses of this Sem</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Result Card */}
        <div className="col-md-6 mb-5 col-lg-3">
          <a href="">
            <div className="card">
              <div className="card-body">
                <section className="d-flex justify-content-between align-items-center">
                  <div className="rightsideIcon">
                    <i className="fa fa-list-alt text-success display-6"></i>
                  </div>
                  <div className="leftsideNames">
                    <h5 className="card-title">Result</h5>
                    <h5 className="card-text">Sem: {userData?.semester || 'N/A'}</h5>
                  </div>
                </section>
                <div className="down-things">
                  <hr />
                  <p className="card-text">CGPA: {userData?.cgpa || 'N/A'}</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Student Details Card */}
        <div className="col-md-6 mb-5 col-lg-3">
          <a href="">
            <div className="card">
              <div className="card-body">
                <section className="d-flex justify-content-between align-items-center">
                  <div className="row">
                    <div className="col-6">
                      <div className="rightsideIcon">
                        <div className="row">
                          <div className="col-6">
                            <img
                              src={'./src/assets/images/user.png'}
                              alt="User"
                              className="img-fluid userImage"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 nameText">
                      <div className="leftsideNames">
                        <h5 className="card-title">{userData?.name || 'Std Name'}</h5>
                        <h5 className="card-text">{userData?.rollNum || 'Student ID'}</h5>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="down-things">
                  <hr />
                  <p className="card-text">Student Details</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export { CardDasboard };
