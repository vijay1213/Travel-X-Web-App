import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/Tejas.jpeg";
import avatarImage1 from "../assets/vijay-1.jpeg";
import avatarImage2 from "../assets/vijay.jpeg";


export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Wow!, Trips on these website are more cheaper than other Website 
            I am Impressed with these website. I will recomment it to all my 
            relatives.
          </p>
          <div className="info">
            <img src={avatarImage2} alt="" />
            <div className="details">
              <h4>Vijay Kumar</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I stumbled upon this website while planning my dream vacation, 
          and I'm so glad I did! 
          The travel tips and destination guides provided here were invaluable in helping me make the most of my trip. 
          I can't wait to start my adventure and put all this great advice to use. 
          Thank you for the inspiration and information!"
          </p>
          <div className="info">
            <img src={avatarImage1} alt="" />
            <div className="details">
            <h4>Sidhant Sharma</h4>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I had the most incredible experience exploring the different Destination with these travel website! 
          The itinerary was well-planned, the local guides were knowledgeable and friendly, and the accommodations were top-notch. 
          Thank you for making my trip unforgettable.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
            <h4>Prajyot Jadhav </h4>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;