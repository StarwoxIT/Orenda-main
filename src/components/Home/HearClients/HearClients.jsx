import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HearClient.css";
import quote from "../../../assets/quote.png";
import hear_client_background from '../../../assets/hear_client_background.png';

const HearClients = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    adaptiveHeight: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const reviews = [
    {
      text: "“Dr. Luong is always compassionate, empathetic, and helpful during our sessions and has been the best experience with mental health providers I've had to date.”",
      initials: "KH",
      name: "Kim H."
    },
    {
      text: "“Dr. Barbara at Orenda is fantastic and has been really supportive! The staff is always responsive and accommodating. I’ve seen great improvements in my mental health since I started here. 10/10 experience!!!”",
      initials: "G",
      name: "Gabriel"
    },
    {
      text: "“Easy to book with someone for an appt, very responsive, even via text messages. Sends scripts right then and there, always available via email also. I would recommend.”",
      initials: "KS",
      name: "Keith S"
    },
    {
      text: "“Danielle listens without judgement and she has an amazing team! The practice staff have  always supported me promptly and are really nice to speak to, I've made significant progress with Orenda, thank youu!!!”",
      initials: "JO",
      name: "Joseph O"
    },
    {
      text: "“Since I’ve been seeing my psychiatrist. I do feel like I’m getting better and Sitora really does listen to me and my concerns.”",
      initials: "ES",
      name: "Ericka S."
    },
    {
      text: "“Dr. Lindon Richard, is the best doctor Orenda Psychiatry has to offer and has listened to me without judgment and has helped me with my mental health immensely way better than any other doctor I have been to in the past. Also, he stays on appointments with me for over 30 minutes.”",
      initials: "DB",
      name: "D. Br"
    },
    {
      text: "“I was so very happy to get connected to my provider through their team. I consider myself lucky that I am receiving the right care and attention. Their admin is also very professional and thorough.”",
      initials: "BM",
      name: "Bela M."
    },
    {
      text: "“Great office, amazing staff and I have a great doctor who is very attentive and helpful. Thank you so much with helping with my recovery plan.”",
      initials: "AC",
      name: "Amelia C."
    },
    {
      text: "“I am currently working with Danielle Overton and she is very professional, kind, compassionate and is a great listener. She has helped me a lot during this tough time in my life. I would highly recommend Ms. Overton and Orenda Psychiatry! They have helped me tremendously!”",
      initials: "KM",
      name: "Kimberly M"
    },
    {
      text: "“This place is really great. I have been with the same practitioner for years now and when she started at this practice I was really impressed by their efficiency. Highly recommend. If you get to see Bethany, she is a fantastic practitioner and really knows her stuff. Couldn’t recommend her more”",
      initials: "DG",
      name: "Deb G."
    },
    {
      text: "“Organized, well trained staff, technology platform that works well. I have been happy and would recommend”",
      initials: "AW",
      name: "Andrew W."
    },
    {
      text: "“Fantastic therapist. Very easy going person and atmosphere which puts me at ease and makes me feel comfortable.”",
      initials: "K",
      name: "Ken"
    },
    {
      text: "“Chelsea is thoughtful, respectful, and a great listener. I highly recommend her!”",
      initials: "KC",
      name: "Karan Chopra"
    },
    {
      text: "“Always a pleasant experience with provider. Compassionate, caring and never late for appointment. Listens to me and let's me decide about treatment options”",
      initials: "KW",
      name: "Kelly W"
    },
    {
      text: "“I’ve been using Orenda Psych. for a few months and it’s been very supportive. I found them through ZocDoc and even though the original person I had made an appt with wasn’t available, Danielle was assigned and she’s the best! You can definitely give them a try!”",
      initials: "ZH",
      name: "Zehra H"
    },
    {
      text: "“Jena S has been really amazing and I’d highly really recommended her”",
      initials: "TK",
      name: "Tiffany K"
    },
    {
      text: "“I have had many sessions and I’m very happy with the results. My nurse practitioner is great. Her name is Jessica.”",
      initials: "JF",
      name: "Jennifer F."
    },
    {
      text: "“If you’re reading this, then I assume that you’re looking to see what people think of their experience with this office. Well I’m 52 years old as of december 4 in all my years I’ve never ever had an office with a physician and workers who respond to you so fast. You’re not put on the shelf, you’re not ignored.”",
      initials: "NW",
      name: "Nicolette W"
    },
    {
      text: "“Orendas office staff is absolutely wonderful! They’re accommodating, caring, professional, and most importantly patient!!! The support staff took the time to really listen to me and went above and beyond to accommodate me! It’s such a breath of fresh air!! HIGHLY RECOMMENDED.”",
      initials: "JM",
      name: "-Jeannie M."
    },
    {
      text: "“Time and time again I have received thorough customer service from the Orenda team. So grateful”",
      initials: "FF",
      name: "--Fatimah F."
    },
    {
      text: "“I was at a loss of what to do with my sister and went online to check a few options and happened to find Zocdoc - Orenda Psychiatry. The phone was picked up swiftly, and the process was seamless. I was impressed. Keep it up!”",
      initials: "BB",
      name: "Beulah B"
    },
    {
      text: "“I have had nothing but wonderful experiences here. Both my NP, Shelley Padgett, and the support team have been nothing short of wonderful to work with. I receive the best psychiatric care I’ve ever received from Shelley, and the support team have gone above and beyond multiple times to help me fix billing issues. Can’t recommend this company enough!”",
      initials: "DA",
      name: "-Desiree A."
    },
    {
      text: "“The staff at this location is amazing! The providers are great, easy to schedule with and extremely accommodating! They are so helpful in trying to make sure all of your needs are met in addition to being so responsive and supportive. I also have to mention how great the women who answer the phones are! ”",
      initials: "VE",
      name: "Vanessa E"
    },
    {
      text: "“I called Orenda on New Year's Eve, having left my scripts in the subway and thinking I’d be without them for days.  They were there for me and made sure they told me the steps I needed to take to get my medication and I had it within a few hours.  They are awesome!!!”",
      initials: "MS",
      name: "Matthew S."
    },
    {
      text: "“Shelley is an incredible psychiatrist who has had a profoundly positive impact on my life. From our very first session I felt understood and supported in ways I hadn't experienced before. She was able to refine my diagnosis so my treatment plan could be more tailored to my specific needs, and she uncovered another diagnosis that had been missed by countless previous doctors.”",
      initials: "CA",
      name: "Colette A."
    },
    {
      text: "I was so very happy to get connected to my provider through their team. I consider myself lucky that I am receiving the right care and attention. Their admin is also very professional and thorough.",
      initials: "JD",
      name: "John D."
    },
    {
      text: "Shelley is an incredible psychiatrist who has had a profoundly positive impact on my life. From our very first session I felt understood and supported in ways I hadn't experienced before. She was able to refine my diagnosis so my treatment plan could be more tailored to my specific needs.",
      initials: "SH",
      name: "Shelley H."
    }
  ];

  return (
    <div className="hearclient-container">
      <img className="hear_client_background" src={hear_client_background} alt="" />
      <div className="hear-client-wrapper">
        <h1 className="hear-heading">Hear from our Clients!</h1>

        <div className="main-hear">
          {/* <img src={quote} alt="" /> */}

          <div className="text-arrow custom-slick-slider">
            <Slider ref={slider} {...settings}>
              {reviews.map((review, index) => (
                <div className="review-p" key={index}>
                  <p>{review.text}</p>
                </div>
              ))}
            </Slider>

            <hr className="mt-6 w-full" />

            <div className="individual-arrow mt-6">
              <div className="individual">
                <div className="individual-circle">
                  <h3>{reviews[activeSlide].initials}</h3>
                </div>
                <h3 className="individual-name">{reviews[activeSlide].name}</h3>
              </div>

              <div className="arrow">
                <button
                  className={activeSlide === 0 ? 'cursor-not-allowed' : ''}
                  onClick={() => slider.current.slickPrev()}
                  disabled={activeSlide === 0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M31.6667 20H9.99999M18.3333 10L9.51184 18.8215C8.86096 19.4724 8.86096 20.5276 9.51184 21.1785L18.3333 30"
                      stroke={activeSlide === 0 ? '#D5D5D5' : '#2E0086'}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <button
                  className={activeSlide === reviews.length - 1 ? 'cursor-not-allowed' : ''}
                  onClick={() => slider.current.slickNext()}
                  disabled={activeSlide === reviews.length - 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M8.33398 20H30.0007M21.6673 10L30.4888 18.8215C31.1397 19.4724 31.1397 20.5276 30.4888 21.1785L21.6673 30"
                      stroke={activeSlide === reviews.length - 1 ? '#D5D5D5' : '#2E0086'}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HearClients;
