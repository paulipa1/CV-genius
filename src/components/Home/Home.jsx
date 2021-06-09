import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import imagehome from './img/computer.jpg';
import cvexample from './img/cv-example.jpg';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div className="container-homepage">
        <div className="container-home">
          <h1>Create a CV that will land you a job</h1>
          <p>
            Looking for a job can be challenging, but we are here to empower you
            to make the best first impression with your CV.
          </p>
          <Link className="create-cv" to="/cv-generator">
            Create your CV
          </Link>
          <img className="image-home" src={imagehome} alt="computer"></img>
        </div>
        <div className="container-home-statistics">
          <h2 className="header-medium">Did you know that...</h2>
          <div className="container-home-numbers-text">
            <div>
              <ul className="statistics">
                <li className="statistics-list">
                  On average, 10% of job applications result in interview
                  invites.
                </li>
                <li className="statistics-list">
                  Out of those who land the interview, 20% are offered the job.
                </li>
                <li className="statistics-list">
                  The job application success rate is between 2% and 3.4%.
                </li>
              </ul>
              <p>Your CV really matters if you want to get the job</p>
            </div>
          </div>
        </div>
        <div className="container-home-action">
          <h2 className="header-medium">Let the journey begin!</h2>
          <p>Create a custom CV for a position you are applying for.</p>
          <Link className="create-cv" to="/cv-generator">
            Create your CV
          </Link>
          <img className="cv-example" src={cvexample} alt="cv-example" />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
