// import { Component } from 'react';
// import {Link} from 'react-router-dom';

// export default class Footer extends Component {
//     constructor(props) {
//         super(props)
//         this.selectcategory = this.selectcategory.bind(this);
//     }

//     selectcategory(id, name) {
//         window.localStorage.setItem("category_id", id);
//         window.localStorage.setItem("category_name", name);
//         this.props.history.push('/product-category');
//     }

//     render(){
//         return (
//         <div className="footer">
//             <div  >
//                 <table width="90%" style={{marginLeft: "16px"}}>
//                     <br></br>
//                     <tr>
//                     <td>
//                     <tr>
//                         <a href="/aboutus" className="nav-link">
//                             <h6 className="nameColor">About Us</h6>
//                         </a>
//                     </tr>
//                     <tr>
//                         <a href="/contactus" className=" nav-link">
//                             <h6 className="nameColor">Contact Us</h6>
//                         </a>
//                     </tr>
//                     <tr>
//                         <a href="/TermAndConditionScreen" className="nav-link">
//                             <h6 className="nameColor">Terms & Conditions</h6>
//                         </a>
//                     </tr>

//                     <tr>
//                         <a href="/PrivacyPolicyScreen" className="nav-link">
//                             <h6 className="nameColor">Privacy Policy</h6>
//                         </a>
//                     </tr>

//                     <tr>
//                         <a href="/faqs" className="nav-link">
//                             <h6 className="nameColor">FAQs</h6>
//                         </a>
//                     </tr>
//                 </td>

//                 <td className="float-end">
//                     <div className="nameColor">
//                         {' '}
//                         <h2>Contact Us</h2> WhatsApp us :{' '}
//                         <span
//                         style={{ display: 'inline-block;', marginBottom: '1rem;' }}>
//                         <a>
//                             9890851188
//                         </a>
//                         </span>
//                         <br />
//                         <br /> <h2>Download App</h2> <br />
//                         <a
//                         style={{ marginRight: "16px" }}>
//                         <img
//                             src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
//                             alt="Download GreenMart App for Android from Play Store"
//                         />
//                         </a>
//                         <a><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
//                             alt="Download GreenMart App for iOs from App Store"/></a>
//                     </div>{' '}
//                 </td>
//                 </tr>
//                 </table>
                
//                 <div class="copyright">
//                     <div>© 2021 IACSD Students, Faculty Student Interaction System CDAC Project, INDIA</div>
//                 </div>
//             </div>
            
//         </div>
//         )
//     }
// }

import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.selectcategory = this.selectcategory.bind(this);
    }

    selectcategory(id, name) {
        window.localStorage.setItem("category_id", id);
        window.localStorage.setItem("category_name", name);
        this.props.history.push('/product-category');
    }

    render(){
        return (
        <div className="footer" >
            <div  >
                {/* <table width="90%" style={{marginLeft: "16px"}}>
                    <br></br>
                    <tr>
                    <td>
                    <tr>
                        <a href="/aboutus" className="nav-link">
                            <h6 className="nameColor">About Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/contactus" className="nav-link">
                            <h6 className="nameColor">Contact Us</h6>
                        </a>
                    </tr>
                    <tr>
                        <a href="/termsnconditions" className="nav-link">
                            <h6 className="nameColor">Terms & Conditions</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/privacypolicy" className="nav-link">
                            <h6 className="nameColor">Privacy Policy</h6>
                        </a>
                    </tr>

                    <tr>
                        <a href="/faqs" className="nav-link">
                            <h6 className="nameColor">FAQs</h6>
                        </a>
                    </tr>
                </td>

                <td className="float-end">
                    <div className="nameColor">
                        {' '}
                        <h2>Contact Us</h2> WhatsApp us :{' '}
                        <span
                        style={{ display: 'inline-block;', marginBottom: '1rem;' }}>
                        <a>
                            8306382870
                        </a>
                        </span>
                        <br />
                        <br /> <h2>Download App</h2> <br /> */}
                         {/* <a
                        style={{ marginRight: "16px" }}>
                        <img
                            src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png"
                            alt="Download GreenMart App for Android from Play Store"
                        />
                        </a>
                        <a><img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png"
                            alt="Download GreenMart App for iOs from App Store"/></a> */}
                    {/* </div> */}
                {/* </td> */}
                {/* </tr> */}
                {/* </table> */} 
                
                <div class="container-fluid p-4 text-white" style={{backgroundColor: "#232F3E"}}>
          <div className="row align-items-center">
  
            <div className="col-sm">
            {/* <p><img src="/images/nodejs.png" width="15%" /></p> */}
             <p> <a href="/" className="nav-link text-white">
                            <h6 className="nameColor">About Us</h6>
                        </a></p>
            </div>
  
            <div className="col-sm">
            {/* <p><img src="/images/react.png" width="15%" /></p> */}
            <p>   <a href="/Contact" className="nav-link text-white">
                            <h6 className="nameColor">Contact Us</h6>
                        </a></p>
            </div>
  
            <div className="col-sm">
            {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
            <p> <a href="/TermAndConditionScreen" className="nav-link text-white">
                            <h6 className="nameColor">Terms & Conditions</h6>
                        </a></p>
            </div>
            <div className="col-sm">
            {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
            <p> <a href="/PrivacyPolicyScreen" className="nav-link text-white">
                            <h6 className="nameColor">Privacy Policy</h6>
                        </a></p>
            </div>
            <div className="col-sm">
            {/* <p><img src="/images/bs.jpg" width="15%" /></p> */}
            <p> <a href="/faqs" className="nav-link text-white">
                            <h6 className="nameColor">FAQs</h6>
                        </a></p>
            </div>
            <div className="col-sm">
            <p><img src="logo.gif" width="300" height="100"/></p>
            {/* <p> <a href="/faqs" className="nav-link">
                            <h6 className="nameColor">FAQs</h6>
                        </a></p> */}
            </div>
          </div>
        </div>


                <div class="copyright">
                    <div>Copyright © Interaction Forum | All rights reserved | Designed by Waghmare Prajwal & Samriddha Bajpai, CDAC Project</div>
                </div>
            </div>
            
        </div>
        )
    }
}
