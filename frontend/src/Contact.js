import React from "react";

class Contact extends React.Component {
  render() {
    return (
      // <div>
      //   <div className="container p-3 my-3 border bg-info text-white">
      //     <div className="row">
  
      //       <div className="col-sm-6">
      //         <h1>Contact us</h1>
      //         <p>  Phone:+91 9607690988 / +91 9699050370 Phone:20-27659509 / 27652794 E-mail: ittrg@iacsd.com</p>
      //       </div>
  
      //       <div className="col-sm-6">
      //         <h2>Address</h2>
      //         <p> Institute for Advanced Computing & Software Development, Dr. D.Y. Patil Educational Complex, Sector 29, Behind Akurdi Railway Station, Nigdi Pradhikaran, Akurdi Pune - 411044. </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div>
      {/* <Navigation /> */}

      <div className="main1">
        <header>
          {" "}
          <h1> Reach Us At </h1>
        </header>

        <br />
        <br />
        <h5 align="justify"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Email : dac.iacsdakurdi@gmail.com</h5>
        <h5 align="justify"> <i class="fa fa-mobile" aria-hidden="true"></i> Contact No : +919876543210</h5>
        <h5 align="justify"> <i class="fa fa-map-marker" aria-hidden="true"></i>
         Our location: Sector No. 29, Behind Akurdi Railway Station,,
         Pradhikaran Nigdi, Akurdi, Pune 411044, Pune, Maharashtra 411044
        </h5>
      </div>
      <b></b>
      
    </div>
    );
  }
}
export default Contact;