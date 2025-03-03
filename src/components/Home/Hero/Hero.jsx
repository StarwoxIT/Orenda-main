import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import CountUp from "react-countup";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";
import faces from "../../../assets/faces.png";
import Icon from "../../../assets/Icon.png";
import user from "../../../assets/user.png";
import pluswhiter from "../../../assets/plus_white.png";

const Hero = () => {
  const providersRef = useRef(null);
  const livesChangedRef = useRef(null);

  const [providersInView, setProvidersInView] = useState(false);
  const [livesChangedInView, setLivesChangedInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === providersRef.current) {
              setProvidersInView(true);
            }
            if (entry.target === livesChangedRef.current) {
              setLivesChangedInView(true);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (providersRef.current) {
      observer.observe(providersRef.current);
    }
    if (livesChangedRef.current) {
      observer.observe(livesChangedRef.current);
    }

    return () => {
      if (providersRef.current) {
        observer.unobserve(providersRef.current);
      }
      if (livesChangedRef.current) {
        observer.unobserve(livesChangedRef.current);
      }
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      providersRef.current,
      { scale: 1.4 },
      { scale: 1, duration: 1, ease: "power.out", delay: 0.5 }
    );
    gsap.fromTo(
      livesChangedRef.current,
      { scale: 1.3 },
      { scale: 1, duration: 1, ease: "power.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="texts">
            <h1>
              Online Psychiatry Practice Prescription Management and Talk
              Therapy
            </h1>
            <p className="font-dm-sans">
              Providing Mental Health Care with Convenience.
            </p>
          </div>
          <button
            className="btn btn-effect"
            onClick={() =>
              window.open(
                "https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits",
                "_blank"
              )
            }
          >
            Book Now
          </button>

          <div className="items">
            <div className="items-right bord-Animation">
              <div className="items-right-contents">
                <p className="font-open-sans w-16" ref={providersRef}>
                  <CountUp start={0} end={90} duration={5} />
                  <img src={pluswhiter} alt="plus icon" style={{ width: 15 }} />
                </p>
                <img src={Icon} alt="icon" style={{ width: 13 }} />
              </div>
              <p className="min-h-8">
                {providersInView && (
                  <TypeAnimation
                    sequence={["Providers"]}
                    speed={250}
                    style={{ fontSize: "1em" }}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </p>
              <img src={faces} alt="" style={{ width: 200 }} />
            </div>
            <div className="items-left bord-Animation">
              <div className="items-left-contents">
                <div className="items-left-img" ref={livesChangedRef}>
                  <p>
                    <CountUp start={0} end={30} duration={5} />
                    k
                    <img
                      src={pluswhiter}
                      alt="plus icon"
                      style={{ width: 15 }}
                    />
                  </p>
                </div>
                <img src={user} alt="user icon" style={{ width: 45 }} />
              </div>
              <p style={{ fontSize: 20 }}>
                {livesChangedInView && (
                  <TypeAnimation
                    sequence={["Lives Changed"]}
                    speed={200}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </p>
            </div>
          </div>

          {/* HERO MOBILE SECTIONS */}
          <div className="items-mobile bord-Animation">
            <div className="it-mobile-left">
              <div>
                <h1>
                  <CountUp start={0} end={70} duration={3} />
                  <span>+</span>
                </h1>
                <img src={Icon} alt="" />
              </div>
              <p className="min-h-8">
                {providersInView && (
                  <TypeAnimation
                    sequence={["Providers", 1000, ""]}
                    speed={200}
                    style={{ fontSize: "1em" }}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </p>
              <img src={faces} alt="" />
            </div>
            <div className="line"></div>
            <div className="it-mobile-right">
              <h1>
                <CountUp
                  start={0}
                  end={21}
                  duration={4}
                />
                k
                <span>+</span>
              </h1>
              <p className="min-w-[8rem] min-h-8">
                {livesChangedInView && (
                  <TypeAnimation
                    sequence={["Lives Changed", 1000, ""]}
                    speed={200}
                    repeat={0}
                    cursor={false}
                  />
                )}
              </p>
              <img src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;