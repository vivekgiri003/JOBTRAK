import main from "../assets/images/vk.svg";
import { Link } from "react-router-dom";
// import logo from '../assets/images/LOGO1.png';
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Unlock your true potential by managing your job applications
            efficiently. Every opportunity is a step closer to your dream job!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const StyledWrapper = styled.section`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }
//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//     margin-bottom: 1.5rem;
//   }
//   p {
//     line-height: 2;
//     color: var(--text-secondary-color);
//     margin-bottom: 1.5rem;
//     max-width: 35em;
//   }
//   .register-link {
//     margin-right: 1rem;
//   }
//   .main-img {
//     display: none;
//   }
//   .btn {
//     padding: 0.75rem 1rem;
//   }
//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 400px;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;

export default Landing;
