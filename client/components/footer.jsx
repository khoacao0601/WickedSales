import React from 'react';

export default function Footer() {
  return (
    <div className="footer mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Neighbor Market</h2>
            <p className="pr-5 text-white-50">This is a farmer market online with fruits, vegetable and used things from yours neighbor. </p>
            <p><a href="#" target="-blank"><i className="fab fa-facebook-square"></i></a> <a href="#" target="-blank"><i className="fab fa-linkedin"></i></a></p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>- <a href="https://www.localfarmmarkets.org/" target="-blank">Farmer Market</a></li>
              <li>- <a href="#" target="-blank">Nam mauris velit</a></li>
              <li>- <a href="#" target="-blank">Etiam vitae mauris</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0"><i className="fa fa-phone mr-3"></i>(***) 754-30**</p>
            <p><i className="fa fa-envelope-o mr-3"></i>info@***.com</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
