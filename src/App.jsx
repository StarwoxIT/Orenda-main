import About from "./components/About/About";
import Home from "./components/Home/Home";
import ContactUsPage from "./components/Contact Us/ContactUsPage";
// import OurTeam from './components/Our Team/OurTeam';

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./ScrollToTop";
import OurTeam from "./components/OurTeam/OurTeam";
import ProviderInfo from "./components/Provider Info/ProviderInfo";
// import Insurance from './components/Insurance/Insurance';
import Privacy from "./components/Privacy/PrivacyPolicy";
import Assessment1 from "./components/Assessment/Assessment1/Assessment1";
import Assessment2 from "./components/Assessment/Assessment2/Assessment2";
import Assessment3 from "./components/Assessment/Assessment3/Assessment3";
import Assessment4 from "./components/Assessment/Assessment4/Assessment4";
// import Blog from './components/Blog/Blogs';
// import Bloginfo from './components/Blog/Bloginfo';
import BecomeProviderPage from "./components/BecomeProviderPage/BecomeProviderPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import ConsumerTest from "./components/ConsumerTest/ConsumerTest";
import Assessment from "./components/Assessment/Assessment";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getProviders } from "./services/api";
import Contacted from "./components/Contact Us/Contacted";
import ReferAPatient from "./components/ReferAPatient/ReferAPatient";
import ExecutiveInfo from "./components/Executive Info/ExecutiveInfo";
import Blog from "./components/Blogs/Blog";
import Blogs from "./components/Blogs/Blogs";
import OurPartners from "./components/Partners/OurPartners";

function App() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["providers"],
      queryFn: getProviders,
    });
  }, []);
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="our-team/:slide/" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          {/* <Route path="Insurance" element={<Insurance />} /> */}
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="Provider/:name" element={<ProviderInfo />} />
          {/* <Route path="blogs" element={<Blog />} />
            <Route path="blog info" element={<Bloginfo />} /> */}
          <Route path="become-a-provider" element={<BecomeProviderPage />} />
          <Route path="contact/message-sent" element={<Contacted />} />
          <Route path="refer-a-patient" element={<ReferAPatient />} />
          <Route path="executive/:name" element={<ExecutiveInfo />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:title" element={<Blog />} />
          <Route path="our-partners" element={<OurPartners />} />
        </Route>
        <Route path="/Assessment1" element={<Assessment1 />} />
        <Route path="/Assessment2" element={<Assessment2 />} />
        <Route path="/Assessment3" element={<Assessment3 />} />
        <Route path="/Assessment4" element={<Assessment4 />} />
        <Route path="/Assessment" element={<Assessment />} />
        <Route path="/consumer" element={<ConsumerTest />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;

library.add(fab, fas, far);
