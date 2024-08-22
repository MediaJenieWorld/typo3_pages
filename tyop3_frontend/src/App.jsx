import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

const Header1 = lazy(() => import("./Components/Header1/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Home = lazy(() => import("./Pages/Home/Home"));
const CardsPage = lazy(() => import("./Pages/page"));
const About = lazy(() => import("./Pages/About/About"));
const BehindUs = lazy(() => import("./Pages/BehindUs/BehindUs"));
// const AllPages = lazy(() => import("./Pages/Combined/AllPages"));
const ServicePage = lazy(() => import("./Pages/Service/Service"));
const DetailsPage = lazy(() => import("./Pages/Service/Details/Details"));
const WorkPage = lazy(() => import("./Pages/Work/Work"));
const ContactPage = lazy(() => import("./Pages/Contact/Contact"));
const WordPressPage = lazy(() => import("./Components/WorkPress/WordPressPage"));
const ResourcePage = lazy(() => import("./Pages/Resource/Resource"));
const ResourceBlogPage = lazy(() => import("./Pages/Resource/Blog/Blog"));
const Medtracker = lazy(() => import("./Pages/Work/Medtracker/MedTracker"));
const VE_Coffee = lazy(() => import("./Pages/Work/VE_Coffee/VE_Coffee"));
const VEC_Photography = lazy(() => import("./Pages/Work/VEC_Photography/VEC_Photography"));
const AppleBeesPage = lazy(() => import("./Pages/Work/AppleBees/AppleBees"));

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading" ></div>}>
        <Header1 />
        <Routes>
          {/* <Route path="/" element={<AllPages />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/pre" element={<CardsPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/Medtracker" element={<Medtracker />} />
          <Route path="/work/VE_Coffee" element={<VE_Coffee />} />
          <Route path="/work/VEC_Photography" element={<VEC_Photography />} />
          <Route path="/work/AppleBees" element={<AppleBeesPage />} />
          <Route path="/behindUs" element={<BehindUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/terms" element={<WordPressPage />} />
          <Route path="/resource" element={<ResourcePage />} />

          <Route path="/resource/blog" element={<ResourceBlogPage />} />
          <Route path="/services/details" element={<DetailsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
