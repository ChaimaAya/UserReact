import axios from 'axios';
import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
  const Logout=(e)=>{
  //   e.preventDefault();
  //   const token = localStorage.getItem('token');
  //   axios.post("http://127.0.0.1:8000/api/logout", null, {
  //       headers: {
  //           'Authorization': `Bearer ${token}` 
  //       }
  //   })
  //   .then(() => {
  //     localStorage.removeItem('token');
  //     delete axios.defaults.headers.common['Authorization'];
  //     navigate('/login');
  //  })
  //   .catch((err)=>{console.log(err)})

  }
  return (
  <>

<header className="navbar-light fixed-top header-static bg-mode">
  {/* Logo Nav START */}
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      {/* Logo START */}
      <a className="navbar-brand" href="index.html">
        <img className="light-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
        <img className="dark-mode-item navbar-brand-item" src="assets/images/logo.svg" alt="logo" />
      </a>
      {/* Logo END */}
      {/* Responsive navbar toggler */}
      <button className="navbar-toggler ms-auto icon-md btn btn-light p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-animation">
          <span />
          <span />
          <span />
        </span>
      </button>
      {/* Main navbar START */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {/* Nav Search START */}
        <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
          <div className="nav-item w-100">
            <form className="rounded position-relative">
              <input className="form-control ps-5 bg-light" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y" type="submit"><i className="bi bi-search fs-5"> </i></button>
            </form>
          </div>
        </div>
        {/* Nav Search END */}
      </div>
      {/* Main navbar END */}
      {/* Nav right START */}
      <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
        <li className="nav-item ms-2">
          <a className="nav-link bg-light icon-md btn btn-light p-0" href="messaging.html">
            <i className="bi bi-chat-left-text-fill fs-6"> </i>
          </a>
        </li>
        <li className="nav-item dropdown ms-2">
          <a className="nav-link bg-light icon-md btn btn-light p-0" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            <span className="badge-notif animation-blink" />
            <i className="bi bi-bell-fill fs-6"> </i>
          </a>
          <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0" aria-labelledby="notifDropdown">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                <a className="small" href="#">Clear all</a>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush list-unstyled p-2">
                  <li>
                    <div className="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <div>
                          <p className="small mb-2">Wish <b>Amanda Reed</b> a happy birthday (Nov 12)</p>
                          <button className="btn btn-sm btn-outline-light py-1 me-2">Say happy birthday 🎂</button>
                        </div>
                        <p className="small ms-3">2min</p>
                      </div>
                    </div>
                  </li>
                  {/* Notif item */}
                  {/* Notif item */}
                  <li>
                    <a href="#" className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1">
                      <div className="avatar text-center d-none d-sm-inline-block">
                        <img className="avatar-img rounded-circle" src="assets/images/logo/12.svg" alt />
                      </div>
                      <div className="ms-sm-3 d-flex">
                        <p className="small mb-2"><b>Bootstrap in the news:</b> The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.</p>
                        <p className="small ms-3">4hr</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer text-center">
                <a href="notifications.html" className="btn btn-sm btn-primary-soft">See all incoming activity</a>
              </div>
            </div>
          </div>
        </li>
        {/* Notification dropdown END */}
        <li className="nav-item ms-2 dropdown">
          <a className="nav-link btn icon-md p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="avatar-img rounded-2" src="assets/images/avatar/07.jpg" alt />
          </a>
          <ul className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3" aria-labelledby="profileDropdown">
            {/* Profile info */}
            <li className="px-3">
              <div className="d-flex align-items-center position-relative">
                {/* Avatar */}
                <div className="avatar me-3">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="avatar" />
                </div>
                <div>
                  <a className="h6 stretched-link" href="#">Lori Ferguson</a>
                  <p className="small m-0">Web Developer</p>
                </div>
              </div>
              <a className="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" href="my-profile.html">View profile</a>
            </li>
            {/* Links */}
            <li className="dropdown-divider" />
            <li><Link className="dropdown-item bg-danger-soft-hover" onClick={Logout}><i className="bi bi-power fa-fw me-2" />Sign Out</Link></li>
            <li> <hr className="dropdown-divider" /></li>
            {/* Dark mode options START */}
            <li>
              <div className="modeswitch-item theme-icon-active d-flex justify-content-center gap-3 align-items-center p-2 pb-0">
                <span>Mode:</span>
                <button type="button" className="btn btn-modeswitch nav-link text-primary-hover mb-0" data-bs-theme-value="light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Light">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    <use href="#" />
                  </svg>
                </button>
                <button type="button" className="btn btn-modeswitch nav-link text-primary-hover mb-0" data-bs-theme-value="dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dark">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    <use href="#" />
                  </svg>
                </button>
                <button type="button" className="btn btn-modeswitch nav-link text-primary-hover mb-0 active" data-bs-theme-value="auto" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg>
                </button>
              </div>
            </li> 
            {/* Dark mode options END*/}
          </ul>
        </li>
        {/* Profile START */}
      </ul>
      {/* Nav right END */}
    </div>
  </nav>
  {/* Logo Nav END */}
</header>

  </>

  )
}

export default Header