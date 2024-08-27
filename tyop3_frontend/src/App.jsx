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

// Projects
const MedtrackerUiPage = lazy(() => import("./Pages/Work/MedtrackerUi/MedTrackerUi"));
const MedtrackerPage = lazy(() => import("./Pages/Work/Medtracker/MedTracker"));
const VE_Coffee = lazy(() => import("./Pages/Work/VE_Coffee/VE_Coffee"));
const VEC_Photography = lazy(() => import("./Pages/Work/VEC_Photography/VEC_Photography"));
const AppleBeesPage = lazy(() => import("./Pages/Work/AppleBees/AppleBees"));
const Gloria_Coffee_Page = lazy(() => import("./Pages/Work/Gloria_Coffee/Gloria_Coffe"));
const Safe_Tree_Page = lazy(() => import("./Pages/Work/Safe_Tree/Safe_Tree"));
const VE_Campaign_Page = lazy(() => import("./Pages/Work/VE_Campaign/VE_Campaign"));
const Happilo_Page = lazy(() => import("./Pages/Work/Happilo/Happilo"));
const Coffee_Book_Page = lazy(() => import("./Pages/Work/Coffee_TableBook/Coffee_Book"));
const Encryption_Consulting_Page = lazy(() => import("./Pages/Work/Encryption_Consulting/Encryption_Consulting"));
const Toyoda_Brochure_Page = lazy(() => import("./Pages/Work/Toyoda/Toyoda_Brochure"));
const Pavana_Villas_Page = lazy(() => import("./Pages/Work/Pavana_Villas/Pavana_Villas"));
const Karlsson_Catalogue_Page = lazy(() => import("./Pages/Work/Karlsson_Cat/Karlsson_Cat"));
const Restaurant_Brand_Page = lazy(() => import("./Pages/Work/Restaurant_Brand/Restaurant_Brand"));
const Karunashraya_Page = lazy(() => import("./Pages/Work/Karunashraya/Karunashraya"));
const Vivekananda_Yoga_Page = lazy(() => import("./Pages/Work/Vivekananda_Yoga/Vivekananda_Yoga"));
const ToniRossie_page = lazy(() => import("./Pages/Work/ToniRossi/ToniRossi"));

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
          <Route path="/work/Medtracker" element={<MedtrackerPage />} />
          <Route path="/work/MedtrackerUi" element={<MedtrackerUiPage />} />
          <Route path="/work/VE_Coffee" element={<VE_Coffee />} />
          <Route path="/work/VEC_Photography" element={<VEC_Photography />} />
          <Route path="/work/AppleBees" element={<AppleBeesPage />} />
          <Route path="/work/Gloria_Coffee" element={<Gloria_Coffee_Page />} />
          <Route path="/work/Safe_Tree" element={<Safe_Tree_Page />} />
          <Route path="/work/VE_Campaign" element={<VE_Campaign_Page />} />
          <Route path="/work/Happilo" element={<Happilo_Page />} />
          <Route path="/work/Coffee_Book" element={<Coffee_Book_Page />} />
          <Route path="/work/Encryption_Consulting" element={<Encryption_Consulting_Page />} />
          <Route path="/work/Toyoda_Brochure" element={<Toyoda_Brochure_Page />} />
          <Route path="/work/Pavana_Valley_Villas" element={<Pavana_Villas_Page />} />
          <Route path="/work/Karlsson_Catalogue" element={<Karlsson_Catalogue_Page />} />
          <Route path="/work/Restaurant_Brand" element={<Restaurant_Brand_Page />} />
          <Route path="/work/Karunashraya" element={<Karunashraya_Page />} />
          <Route path="/work/Vivekananda_Yoga" element={<Vivekananda_Yoga_Page />} />
          <Route path="/work/ToniRossi" element={<ToniRossie_page />} />

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
