import React, { useState } from "react";
import "./Aboutme.css";
import styled from "styled-components";
import Content from "../Components/ContentDiv";
import PdfViewer from "../Components/PdfViewer";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 80%;
  max-height: 90%;
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  padding-bottom: 6px;

  outline-width: 2px;

  margin: 10px;
  gap: 15px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const AboutImage = styled.img`
  width: 185px;
  height: 185px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const BackgroundImage = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  outline-style: solid;
  outline-width: 2px;
  outline-color: grey;
`;

const Aboutme = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const importAll = (r) => r.keys().map(r);
  const images = importAll(
    require.context(
      "../../public/pictures/Gallery",
      false,
      /\.(PNG|jpe?g|svg|webp|JPG|JPEG)$/
    )
  );

  return (
    <Content>
      <ImageContainer>
        {images.map((image, index) => (
          <AboutImage key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>

      <BackgroundImage image="/pictures/backgroundaboutme.jpg"></BackgroundImage>
      <div className="about-container">
        <h1 className="about-title">About Me</h1>

        <div className="about-content">
          <div className="about-left">
            <div className="photo-section">
              <img
                src="/pictures/Prof.JPEG"
                alt="Brett in a professional setting"
                className="profile-photo"
              />
            </div>
          </div>

          <div className="about-right">
            <div className="about-section">
              <h2>General</h2>
              <p>
                Hello, and welcome to my personal website, built using React. I
                started this webpage as a small project to learn the React
                library. But now it has evolved into something much more.
                Instead of letting it sit forgotten in a repository, I decided
                to turn it into a living archive of my interests, technical
                explorations, and research. While many people journal their
                thoughts with pen and paper, I prefer to express mine through
                code. This site is a personal sandbox, a place for
                experimentation, reflection, and growth. I hope that one day,
                looking back on it, I’ll see how far I’ve come and feel proud of
                what I’ve built.
              </p>
            </div>

            <div className="about-section">
              <h2>Education</h2>
              <p>
                Starting in high school, I attended a small private classical
                Christian school. This experience profoundly changed my
                perspective on academics, reshaping my outlook on learning and
                challenging my previous understandings. The school offered
                courses in Koine Greek, Latin, Philosophy, History, and many
                other valuable subjects.
              </p>
              <p>
                After high school, I enrolled in a classical-taught program in
                Pennsylvania to study Electrical Engineering. However, due to
                COVID-19 moving classes online, I took a gap year, working at a
                small upholstery shop while learning about programming in python
                and the mechanics of options in the stock market. This gap year
                is what sparked my interest in finance, I was constantly
                learning. From using options to hedge to forex, to bonds, even
                to learning about commodity futures.
              </p>
              <p>
                Fast forward to the end of my gap year, I applied to James
                Madison University and was accepted. Initially, I pursued
                Computer Science due to my strong interest in programming.
                However, I was denied entry into the major. After retaking a
                class and performing exceptionally well, I reapplied—only to be
                denied again. The JMU CS department cited that they had accepted
                too many applicants that cycle. This was a disappointing
                setback, but I refused to settle for something less challenging.
                I wanted my education to be rigorous and worth the investment.
                Ultimately, I chose to study Mathematics, a field that pushes me
                intellectually. Now, I am on track to graduate on time with a
                Math degree and a Computational Analytics concentration, all
                without extending my studies. I look forward to the future and
                remain committed to pursuing difficult and meaningful
                challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2>Resume</h2>
          <button onClick={openModal} className="resume-link">
            View My Resume
          </button>
        </div>
      </div>

      <Modal show={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={closeModal}>×</CloseButton>
          <PdfViewer fileUrl="/resume.pdf" title="Resume Viewer" />
        </ModalContent>
      </Modal>

      <BackgroundImage image="/pictures/backgroundaboutme.jpg"></BackgroundImage>

      <div className="ContactMeC">
        <div className="ContactMe">
          <h1>Contact Me</h1>
          <p>
            If you'd like to get in touch, feel free to reach out via email or
            connect with me on social media!
          </p>

          <div className="contactDetails">
            <div className="email">
              <h3>Email:</h3>
              <a href="mailto:Bretthbono1@gmail.com">Bretthbono1@gmail.com</a>
            </div>

            <div className="socials">
              <h3>Follow me:</h3>
              <a
                href="https://www.linkedin.com/in/bretthbono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/bretthb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://x.com/Bretthbono"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> x
              </a>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Aboutme;
