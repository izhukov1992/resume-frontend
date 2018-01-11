import React from 'react';

class Userpic extends React.Component {
  render() {
    return (
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Start Bootstrap</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="static/assets/img/profile.jpg" alt="" />
        </span>
      </a>
    );
  }
}

export default Userpic;
