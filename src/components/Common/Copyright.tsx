import React from "react";

const Copyright = () => {
  return (
    <div>
      <div className="footer py-4 d-flex flex-lg-column position-sticky bottom-0">
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-muted">
            <span>All Rights Reserved</span>
            <span className="text-muted fw-bold me-1">© 2024</span>
            <a
              data-turbo="false"
              href="https://hms-saas.infyom.com"
              className="text-hover-primary"
            >
              CityTech
            </a>
          </div>
          <div className="text-muted order-2 order-md-1">v5.7.0</div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
