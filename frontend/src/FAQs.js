import React, { useState } from 'react';
import FAQHeader from './FAQHeader';
// import Navbar from "./Navbar";
import FAQ from './FAQ';
import './FAQindex.css';

function FAQs () {
  const [faqs, setfaqs] = useState([

    {
      question: 'What is the need for this platform?',
      answer: 'This application enables both Student and Faculty to interact with each other at anytime and anywhere. This application makes any time-accurate communication between Student and Faculty. Admin will add all the details of Faculties and their departments. Faculties can view all the details of the queries sent by users and can upload materials related to the queries. Students can ask queries and view solutions and materials provided by the faculties.',
      open: false
    },
    {
      question: 'Is this the official website of IACSD?',
      answer: 'No, This is not the official website of IACSD as the official website for IACSD is as: dac.iacsdakurdi@gmail.com. This website is just a medium for students to connect with their teachers easily in order to get their doubts solved at ease.',
      open: false
    },
    {
      question: 'How do I register?',
      answer: 'You can register by clicking on the “Register” link from the Navigation bar of the homepage. Please provide the information in the form that appears. You can review the terms and conditions andsubmit the registration information.',
      open: false
    },

    {
      question: 'Can a user add a post without Registering?',
      answer: 'No. User cannot add the post without registering himself/herself',
      open: false
    },

    {
      question: 'Can we add comments on our posts?',
      answer: 'Yes, a user can add the comments on respective post. Add comment option will be shown on the post in the All Posts Column',
      open: false
    },

    {
      question: 'Can we add topic categories?',
      answer: 'No, only admin can access to add or manage the categories.',
      open: false
    },

    {
      question: 'How do I reach to institute for other Services?',
      answer: 'For any other services or concerns, we are also available by phone, at 9876543210, by email to dac.iacsdakurdi@gmail.com or you can also connct to us through the link of Contact Us form on the website. Email will be replied to within 12 hours.',
      open: false
    }

  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className="faqs" >
      <FAQHeader/>
      <br/>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FAQs;