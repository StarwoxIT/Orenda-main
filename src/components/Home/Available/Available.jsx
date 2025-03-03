import { useEffect } from "react";
import gsap from "gsap";
import "./Available.css";
import newyorkmob from "../../../assets/newyork-mob.png";
import massachusettsmob from "../../../assets/massachusetts-mob.png";
import connecticutmob from "../../../assets/connecticut-mob.png";
import newjerseymob from "../../../assets/newjersey-mob.png";

const Available = () => {

  useEffect(() => {

    let mm = gsap.matchMedia();
        //This is the service page for screen size of 999px and below
        mm.add("(max-width: 450px)", () => {
            const locations = gsap.utils.toArray(".locations");
            locations.forEach(location => {
                gsap.to(location, {
                    y:0,
                    opacity: 1,
                    scrollTrigger:{
                        trigger:location,
                        start: "top 70%",
                    }
                })
            })
        });

        mm.add("(min-width: 451px)", () => {
          let tlthree = gsap.timeline({
              scrollTrigger: {
                  trigger: '.locations',
                  start:"top 80%"
              }
          })
          tlthree.to('.avail-img', {y:0, stagger: 1.2, ease:"back", opacity: 1, delay: 1})

          gsap.to('.locations', {y:0, stagger: .2,ease:"back", opacity: 1, delay: .3,
              scrollTrigger:{
                  trigger:".locations",
                  start:"top 80%"
              }
          })
      });    

  }) 


  return (
    <div className="available-container">
      <div className="available-wrapper">
        <div className="avail-txt items-center text-center flex flex-col justify-center">
        <h1>Available Locations</h1>
        <p>We currently serve in these 4 states</p>
        </div>
        <div className="avail-img">
          <picture className="relative locations">
            <source media="(min-width: 451px)" srcset={newyorkmob} />
            <img className="border rounded-md" src={newyorkmob} alt="newyork" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans">New York</span>
          </picture>
          <picture className="relative locations">
            <source media="(min-width: 451px)" srcset={connecticutmob} />
            <img className="border rounded-md" src={connecticutmob} alt="connecticut" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans ">Connecticut</span>
          </picture>
          <picture className="relative locations">
            <source media="(min-width: 451px)" srcset={newjerseymob} />
            <img className="border rounded-md" src={newjerseymob} alt=" New Jersey" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans">New Jersey</span>
          </picture>
          <picture className="relative locations">
            <source media="(min-width: 451px)" srcset={massachusettsmob} />
            <img className="border rounded-md" src={massachusettsmob} alt="Massachusetts" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.6rem]/[9.6rem] py-2 pr-20 text-black ~text-base/lg font-dm-sans">Massachusetts</span>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Available;
