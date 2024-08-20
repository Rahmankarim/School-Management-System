function Navbar()
{
return (
    <nav className="navbar loginNavbar ">
      <div className="container-fluid">
        <a className="navbar-brand loginNavbarBrand ms-3 ThoughtNest text-white">SignIn/SignUp</a>
        <div className="d-flex">
          <button
            className="btn btn-outline-light me-3 p-2 reportProblem btn-sm"
            type="button"
          > Report a Problem</button>

        </div>
      </div>
    </nav>
)
}

export {Navbar};