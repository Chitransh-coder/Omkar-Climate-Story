// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p>We are dedicated to providing quality education for everyone.</p>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#courses">Courses</a></li>
//             <li><a href="#resources">Resources</a></li>
//             <li><a href="#blog">Blog</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Connect With Us</h3>
//           <div className="social-icons">
//             <a href="#facebook" aria-label="Facebook">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#twitter" aria-label="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#linkedin" aria-label="LinkedIn">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//             <a href="#instagram" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 Educational Platform. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// const styles = `
//   .footer {
//     background-color: #000;
//     color: #fff;
//     padding: 2rem 0;
//     font-family: Arial, sans-serif;
//   }

//   .footer-content {
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 1rem;
//   }

//   .footer-section {
//     flex: 1;
//     margin-bottom: 1.5rem;
//     min-width: 200px;
//   }

//   .footer-section h3 {
//     font-size: 1.2rem;
//     margin-bottom: 1rem;
//   }

//   .footer-section ul {
//     list-style-type: none;
//     padding: 0;
//   }

//   .footer-section ul li {
//     margin-bottom: 0.5rem;
//   }

//   .footer-section a {
//     color: #ccc;
//     text-decoration: none;
//     transition: color 0.3s ease;
//   }

//   .footer-section a:hover {
//     color: #fff;
//   }

//   .social-icons {
//     display: flex;
//     gap: 1rem;
//   }

//   .social-icons a {
//     color: #fff;
//     font-size: 1.5rem;
//   }

//   .footer-bottom {
//     text-align: center;
//     margin-top: 2rem;
//     padding-top: 1rem;
//     border-top: 1px solid #333;
//   }

//   @media (max-width: 768px) {
//     .footer-content {
//       flex-direction: column;
//     }

//     .footer-section {
//       margin-bottom: 2rem;
//     }
//   }
// `;

// // Add the styles to the document
// const styleElement = document.createElement('style');
// styleElement.textContent = styles;
// document.head.appendChild(styleElement);



import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are dedicated to providing quality education for everyone.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="/facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="/twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="/linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="/instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Educational Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

const styles = `
  .footer {
    background-color: #000;
    color: #fff;
    padding: 2rem 0;
    font-family: Arial, sans-serif;
  }

  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-section {
    flex: 1;
    margin-bottom: 1.5rem;
    min-width: 200px;
  }

  .footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-section ul li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-section a:hover {
    color: #fff;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    color: #fff;
    font-size: 1.5rem;
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #333;
  }

  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }

    .footer-section {
      margin-bottom: 2rem;
    }
  }
`;

// Add the styles to the document
const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);