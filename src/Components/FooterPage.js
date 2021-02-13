import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="Footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title text-center">Homely Design</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, maxime?
            </p>
            <button type="button" className="btn btn-primary mybtn">
            TOP PAGE
            </button>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">HelpTools</h5>
            <p>For config please contact us.</p>
            <ul>
              <li className="list-unstyled">
              <h6>Report</h6>
              </li>
              <li className="list-unstyled">
              <h6>Purchase</h6>
              </li>
              <li className="list-unstyled">
               <h6>Comment</h6> 
              </li>
              <li className="list-unstyled">
               <h6>Contact</h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Deneme</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );  
}

export default FooterPage;