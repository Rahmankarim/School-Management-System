import { useState, useEffect } from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';

import "../../css/dashboardComponents-css/SideMenu-css.css";

const SideMenu = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CDBSidebar
      textColor="#FFFFFF"
      backgroundColor="#1F283E"
      breakpoint={768}
      minWidth="100px"
      maxWidth="100%"
      className={`SideMenu ${isSmallScreen ? 'horizontal-menu' : ''}`}
      toggled={false}
    >
      {!isSmallScreen && (
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={'/src/assets/images/logo sms.png'}
              alt=""
              style={{ width: '30px' }}
            />
            <h6 className="ms-2">IndeSet Pvt Ltd</h6>
          </div>
        </CDBSidebarHeader>
      )}
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large" active>Dashboard</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="bell">Notifications</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa fa-list-alt" iconType="solid">Result</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-calendar">Time Table</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fa fa-book" iconType="solid">Courses</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-pen" iconType="solid">Assignment</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-money-bill">Fee</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-book-open" iconType="solid">Library</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="fas fa-sign-out-alt" iconType="solid">Signout</CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export { SideMenu };
