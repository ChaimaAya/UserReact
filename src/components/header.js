import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { callApi } from "../api";

function Header() {
  const navigate = useNavigate();
  // const { user, logout } = useContext(UserContext);
  const [userdetail, setUserdetail] = useState();

  const getUser = () => {
    callApi("auth/user").then((data) => {
      setUserdetail(data);
      console.log(data.name);
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <header className="navbar-light fixed-top header-static bg-mode">
        <nav className="navbar">
          <div className="container">
            <Link className="navbar-brand" to="/publication">
              <img
                className="light-mode-item navbar-brand-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
              <img
                className="dark-mode-item navbar-brand-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
            </Link>

            <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
              <div className="nav-item w-100">
                <form className="rounded position-relative">
                  <Link to="/profileConnection">
                    <input
                      className="form-control ps-5 bg-light"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button
                      className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                      type="submit"
                    >
                      <i className="bi bi-search fs-5"> </i>
                    </button>
                  </Link>
                </form>
              </div>
            </div>

            <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
              <li className="nav-item ms-2">
                <Link
                  className="nav-link bg-light icon-md btn btn-light p-0"
                  to="/messaging"
                >
                  <i className="bi bi-chat-left-text-fill fs-6"> </i>
                </Link>
              </li>
              <li className="nav-item dropdown ms-2">
                <a
                  className="nav-link bg-light icon-md btn btn-light p-0"
                  href="#"
                  id="notifDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <span className="badge-notif animation-blink" />
                  <i className="bi bi-bell-fill fs-6"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
                  aria-labelledby="notifDropdown"
                >
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="m-0">
                        Notifications{" "}
                        <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                          4 new
                        </span>
                      </h6>
                      <a className="small" href="#">
                        Clear all
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush list-unstyled p-2">
                        <li>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                          >
                            <div className="avatar text-center d-none d-sm-inline-block">
                              <div className="avatar-img rounded-circle bg-success">
                                <span className="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                                  WB
                                </span>
                              </div>
                            </div>
                            <div className="ms-sm-3">
                              <div className="d-flex">
                                <p className="small mb-2">
                                  Webestica has 15 like and 1 new activity
                                </p>
                                <p className="small ms-3">1hr</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-footer text-center">
                      <Link
                        to="/notifications"
                        className="btn btn-sm btn-primary-soft"
                      >
                        See all incoming activity
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* Notification dropdown END */}
              <li className="nav-item ms-2 dropdown">
                <a
                  className="nav-link btn icon-md p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-2"
                    src="assets/images/avatar/07.jpg"
                    alt
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
                  aria-labelledby="profileDropdown"
                >
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center position-relative">
                      {/* Avatar */}
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/07.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <div>
                          <Link className="h6 stretched-link" to="/profile">
                            {userdetail && (
                              <>
                                <p>{userdetail.name}</p>
                                <p className="small m-0">{userdetail.email}</p>
                              </>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-divider" />
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      to="/reclamation"
                    >
                      <i class="bi bi-envelope-exclamation-fill" />
                      &nbsp;&nbsp; Reclamation
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      onClick=""
                    >
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
