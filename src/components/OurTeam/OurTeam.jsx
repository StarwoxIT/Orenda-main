import BecomeProvider from '../About/BecomeProvider';
import AppointmentScheduling from '../Home/AppointmentScheduling/AppointmentScheduling';
import ContactUs from './ContactUs';
import ExecutiveTeam from './ExecutiveTeam';
import OurTeamIntro from './OurTeamIntro';
import Providers from './Providers';
import Team from './Team';

const Appointment = {
  heading: "Appointment Scheduling Disclaimer",
  title1: "Please note that all appointments are confirmed on a first-come, first-served basis. While we do our utmost best to accommodate your preferred schedule and provider, availability may vary due to high demand.",
  title2: "Our dedicated support team is always here to assist you in finding the right provider and scheduling a convenient appointment time. We are committed to ensuring that your intake process is smooth and that you receive the care you need in a timely manner.",
  title3: "If you encounter any scheduling conflicts or have specific needs, please don't hesitate to reach out to our support team."
};

const OurTeam = () => {
  return (
    <>
      <OurTeamIntro />
      <Providers itemsPerPage={10} numberOfColumns={5} forHome={false} />
      <AppointmentScheduling
        app_heading={Appointment.heading}
        app_tittle1={Appointment.title1}
        app_tittle2={Appointment.title2}
        app_tittle3={Appointment.title3}
      />
      <BecomeProvider bg="white" />
      <Team itemsPerPage={8} />
      <ContactUs />
      <ExecutiveTeam/>
    </>
  );
};
export default OurTeam;
