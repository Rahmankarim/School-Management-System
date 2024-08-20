import { useEffect, useState } from 'react';
import { CardDasboard } from './dasboardComponents/CardDasboard';
import { DashboardNavbar } from './dasboardComponents/DashboardNavbar';
import { SideMenu } from './dasboardComponents/SideMenu';
import { BarCard } from './dasboardComponents/Charts/BarCard';
import { LineChartCom } from './dasboardComponents/Charts/LineChart';
import { StudentData } from '../@types/StudentData';

const apiBaseUrl = "http://localhost:800/api"; // Corrected the base URL

const Dashboard = () => {
  const [userData, setUserData] = useState<StudentData>({
    rollNum: "",
    name: "",
    email: "",
    phoneNumber: "",
    department: "",
    semester: "",
    section: "",
    cgpa: "",
    attendance: "",
  });

  useEffect(() => {
    const fetchFilteredStudents = async () => {
      try {
        const queryParams = new URLSearchParams(userData as StudentData).toString();
        const response = await fetch(`${apiBaseUrl}/students/filter?${queryParams}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Error fetching filtered students:", response.statusText);
          alert("Failed to fetch filtered students.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while filtering students.");
      }
    };

    fetchFilteredStudents();
  }); // Empty dependency array to run once on component mount

  return (
    <>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 mt-4 d-none d-md-block">
            <SideMenu />
          </div>
          <div className="col-md-9 col-lg-10 mt-4">
            <div className="row">
              <div className="col-lg-12">
                <DashboardNavbar />
              </div>
              <div className="col-lg-12 mt-3 dashboardBackgroundColor">
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <CardDasboard userData={userData} />
                  </div>
                  <div className="col-lg-6 mt-4" style={{ height: '400px' }}>
                    <BarCard />
                  </div>
                  <div className="col-lg-6 mt-4" style={{ height: '400px' }}>
                    <LineChartCom />
                  </div>
                  <div className="col-lg-12 mt-4">
                    <hr />
                    <p>
                      Copyright © 2009 COMSATS CIIT Abbottabad | Top
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Dashboard };
