import "./Hear.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ReviewsNavigation from "./ReviewsNavigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from "../../../assets/quote.png"

const Hear = () => {
  const clientsReviews = [
    {
      name: "Vanessa E.",
      initials: "VE",
      review:`“The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”`
    },
    {
      name: "Deb G.",
      initials: "DG",
      review:`"This place is really great. I have been with the same practitioner for years now and when she started at this practice I was really impressed by their efficiency. Highly recommend. If you get to see Bethany, she is a fantastic practitioner and really knows her stuff. Couldn’t recommend her more"`
    },
    {
      name: "Bela M.",
      initials: "BM",
      review:` "I was so very happy to get connected to my provider through their team. I consider myself lucky that I am receiving the right care and attention. Their admin is also very professional and thorough."`
    },
    {
      name: "Kimnerly M.",
      initials: "KM",
      review:` "I am currently working with Danielle Overton and she is very professional, kind, compassionate and is a great listener. She has helped me a lot during this tough time in my life. I would highly recommend Ms. Overton and Orenda Psychiatry! They have helped me tremendously!"`
    },
    {
      name: "Collette A",
      initials: "CA",
      review:`"Shelley is an incredible psychiatrist who has had a profoundly positive impact on my life. From our very first session I felt understood and supported in ways I hadn't experienced before. She was able to refine my diagnosis so my treatment plan could be more tailored to my specific needs, and she uncovered another diagnosis that had been missed by countless previous doctors. Shelley’s empathetic in her approach, listens attentively, and offers invaluable insights."`
    },
  ]

  return (
    <div className="hear-container">
      <div className="px-0">
        <h2 className="font-heading  text-center hear-text">Hear from our Clients</h2>
        <div className="px-4">
        <div className="max-w-[50.13rem] mx-auto relative">
          <Swiper modules={[Navigation, Pagination]} autoHeight = {true}>
         
            {clientsReviews.map(client => (<SwiperSlide className="relative sslide">
              <div className=" grid gap-6 font-dm-sans text-[18px] leading-[26px]">
                <p>
                 {client.review}
                </p>
              </div>
              <div className=" bg-[rgb(239,235,223)]  mx-auto mt-6 mb-4">
                <hr className="w-full" />
              </div>
              <div className="flex  items-center gap-4 ">
                <div className="initials font-open-sans bg-white">{client.initials}</div>
                <p className="font-open-sans font-bold ~text-[1.2rem]/[1.66rem]">{client.name}</p>
              </div>
            </SwiperSlide>))}
            

            <ReviewsNavigation />
          </Swiper>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hear;
