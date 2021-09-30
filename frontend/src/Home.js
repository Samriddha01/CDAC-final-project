import React from "react";
import Navbar from "./Navbar";

class Home extends React.Component {
  render() {
   let isLoginStatus=localStorage.getItem("status");
    return (
     
       <div>
          
        {/* <div> */}
        {/* experiment 1 starts*/}
        <div>
          <div className="main1">
            <header>
              {" "}
              <h1> Welcome to IACSD </h1>
            </header>

            <br />
            <br />
            <h5 align="justify"> <i class="fa fa-envelope-o" aria-hidden="true"></i> IACSD Akurdi is an Authorized Training Centre of C-DAC ACTS
              Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.<br />
              ✓  The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial of import of Supercomputers by USA. Since then C-DAC has been undertaking building of multiple generations of Supercomputer starting from PARAM with 1 GF in 1988.<br />
              ✓  Almost at the same time, C-DAC started building Indian Language Computing Solutions with setting up of GIST group (Graphics and Intelligence based Script Technology); National Centre for Software Technology (NCST) set up in 1985 had also initiated work in Indian Language Computing around the same period.<br />
              ✓  Electronic Research and Development Centre of India (ER&DCI) with various constituents starting as adjunct entities of various State Electronic Corporations, had been brought under the hold of Department of Electronics and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects of applied electronics, technology and applications.</h5>
          </div>
          <b></b>

        </div>

        {/* experiment 1 ends*/}

        {/* <div className="container p-3 my-3 border"> */}

        {/* <div className="row">

            <div className="col-sm-12">
              <h2>Welcome to IACSD</h2>
              <p style={{ textAlign: "justify" }}>IACSD Akurdi is an Authorized Training Centre of C-DAC ACTS
                Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.<br />
                ✓  The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial of import of Supercomputers by USA. Since then C-DAC has been undertaking building of multiple generations of Supercomputer starting from PARAM with 1 GF in 1988.<br />
                ✓  Almost at the same time, C-DAC started building Indian Language Computing Solutions with setting up of GIST group (Graphics and Intelligence based Script Technology); National Centre for Software Technology (NCST) set up in 1985 had also initiated work in Indian Language Computing around the same period.<br />
                ✓  Electronic Research and Development Centre of India (ER&DCI) with various constituents starting as adjunct entities of various State Electronic Corporations, had been brought under the hold of Department of Electronics and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects of applied electronics, technology and applications.

              </p>
            </div>

          </div> */}
        {/* </div> */}

        <div>
          <div className="main1">
            <header>
              {" "}
              <h1> Our Mission </h1>
            </header>

            <br />
            <br />
            <h5 align="justify"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Our mission is to create high skilled IT resources which are recognized by major corporates in India. We strive to inculcate strong technical and interpersonal skills that help the students excel in the corporate world.</h5>
          </div>
          <b></b>

        </div>

        {/* <div className="container-xl border p-3 my-3" style={{ backgroundColor: "#ffcccc" }}>


          <div className=" col-sm-12">
            <h3>Our Mission</h3>
            <p>Our mission is to create high skilled IT resources which are recognized by major corporates in India. We strive to inculcate strong technical and interpersonal skills that help the students excel in the corporate world.</p>
          </div>
        </div> */}



        <div className="main1 container-xl border p-3 my-3 ">

          <div className="row">

            
                    <div className="col-4">
                      <header>
                        {" "}
                        <h1> Our Courses </h1>

                      </header>

                      <br />
                      <br />
                      <h5 align="center"> <i class="fa fa-envelope-o" aria-hidden="true"></i> <p>Pre-CAT <br /> PG-DAC <br /> PG-DBDA <br /> PG-DITISS</p></h5>
                    </div>
                    <b></b>

              
                  {/* experiment ends */}
                  {/* <h3>Our Courses</h3>
              <p>Pre-CAT <br /> PG-DAC <br /> PG-DBDA <br /> PG-DITISS</p> */}


                
                   
                      <div className="col-8">
                        <header>
                          {" "}
                          <h1> News & Articles </h1>
                        </header>

                        <br />
                        <br />
                        <h5 align="center"> <i class="fa fa-envelope-o" aria-hidden="true"></i> <marquee width="60%" direction="up" height="100px" scrollamount="5">
                          <h6>Online PG Diploma Course</h6>
                          <p> <a href="https://www.cdac.in/index.aspx?id=newregister1">Commencement: 21 September 2021 Register</a></p>
                          <hr />
                          <h6>  Commencement: 21 September 2021 Register Here </h6>
                          <p><a href="https://www.cdac.in/index.aspx?id=application_warning">Download Admission Booklet Here for more details call 9607690988 / 9699050370</a></p>
                          <hr />
                          <h6>  AWP & JAVA Modular Batch! </h6>
                          <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdTggFkXbe8vHOxkrYgMglHhHpxx4QpdPBDmQcoYGdsq1IGmA/viewform">Starting Modular batch on Advanced Web Programming and Java Programming from 10th August 2021 Register Here or Contact 9607690988</a></p>
                          <hr />
                        </marquee></h5>
                      </div>
                      <b></b>

              



            {/* <div className="col-sm-6"> */}
            {/* <h3>News & Articles</h3> */}
            {/* <marquee width="60%" direction="up" height="100px" scrollamount="5">
                <h6>Online PG Diploma Course</h6>
                <p> <a href="https://www.cdac.in/index.aspx?id=newregister1">Commencement: 21 September 2021 Register</a></p>
                <hr />
                <h6>  Commencement: 21 September 2021 Register Here </h6>
                <p><a href="https://www.cdac.in/index.aspx?id=application_warning">Download Admission Booklet Here for more details call 9607690988 / 9699050370</a></p>
                <hr />
                <h6>  AWP & JAVA Modular Batch! </h6>
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdTggFkXbe8vHOxkrYgMglHhHpxx4QpdPBDmQcoYGdsq1IGmA/viewform">Starting Modular batch on Advanced Web Programming and Java Programming from 10th August 2021 Register Here or Contact 9607690988</a></p>
                <hr />
              </marquee> */}
            {/* </div> */}

          </div>

        </div>
        <br/>
        <br/>
                <br/>
       </div>

    );
  }
}

export default Home;