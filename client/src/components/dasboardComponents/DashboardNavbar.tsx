
function DashboardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius: "12px"}}>
      <div className="container-fluid">
        <div className="row ms-2">
          <div className="col-12 mt-2"> <a className="navbar-brand display-1" href="">
          <i className="fas fa-home"></i> / Dashboard
        </a></div>
        <div className="col-12">      
            <h1 className="navbar-brand " style={{fontSize: "16px"}}>Dashboard</h1>
        </div>
        </div>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Add navigation items here */}
          </ul>
         
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li>
            <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here"
              aria-label="Search"
            />
          </form>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-cog"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export  {DashboardNavbar};