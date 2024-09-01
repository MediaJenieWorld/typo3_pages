import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"


const Header1 = lazy(() => import("./Components/Header1/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Home = lazy(() => import("./Pages/Home/Home"));
const CardsPage = lazy(() => import("./Pages/page"));
const About = lazy(() => import("./Pages/About/About"));
const BehindUs = lazy(() => import("./Pages/BehindUs/BehindUs"));
const Work_Gallery_Page = lazy(() => import("./Pages/Work/Gallery/Gallery"));

// const AllPages = lazy(() => import("./Pages/Combined/AllPages"));

// Service Page
const ServicePage = lazy(() => import("./Pages/Service/Service"));
const DetailsPage = lazy(() => import("./Pages/Service/Details/Details"));
const Consulting_Page = lazy(() => import("./Pages/Service/Consulting/Consulting"));
const CustomerInsight_Page = lazy(() => import("./Pages/Service/CustomerInsight/CustomerInsight"));
const Design_Page = lazy(() => import("./Pages/Service/Design/Design"));
const Digital_Page = lazy(() => import("./Pages/Service/Digital/Digital"));
const Content_Services_Page = lazy(() => import("./Pages/Service/Content_Services/Content_Services"));
const Marketing_Services_Page = lazy(() => import("./Pages/Service/Marketing_Services/Marketing_Services"));
// Service Page

const WorkPage = lazy(() => import("./Pages/Work/Work"));
const ContactPage = lazy(() => import("./Pages/Contact/Contact"));
const WordPressPage = lazy(() => import("./Components/WorkPress/WordPressPage"));
const ResourcePage = lazy(() => import("./Pages/Resource/Resource"));
const ResourceBlogPage = lazy(() => import("./Pages/Resource/Blog/Blog"));

// Projects
const MedtrackerUiPage = lazy(() => import("./Pages/Work/MedtrackerUi/MedTrackerUi"));
const MedtrackerPage = lazy(() => import("./Pages/Work/medtracker/MedTracker"));
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
const NLF_Page = lazy(() => import("./Pages/Work/NLF/NLF"));
const TR_Campaign_Page = lazy(() => import("./Pages/Work/TR_Campaign/TR_Campaign"));
const Ashok_Maanay_Page = lazy(() => import("./Pages/Work/Ashok_Maanay/Ashok_Maanay"));
const Robert_Bosch_Page = lazy(() => import("./Pages/Work/Robert_Bosch/Robert_Bosch"));
const Karlsson_Leather_Page = lazy(() => import("./Pages/Work/Karlsson_Leather/Karlsson_Leather"));



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
          {/* Work And Projects */}
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/Gallery" element={<Work_Gallery_Page />} />
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
          <Route path="/work/ToniRossi" element={<ToniRossie_page />} />
          <Route path="/work/NLF" element={<NLF_Page />} />
          <Route path="/work/TR_Campaign" element={<TR_Campaign_Page />} />
          <Route path="/work/Ashok_Maanay" element={<Ashok_Maanay_Page />} />
          <Route path="/work/Robert_Bosch" element={<Robert_Bosch_Page />} />
          <Route path="/work/Karlsson_Leather" element={<Karlsson_Leather_Page />} />

          <Route path="/behindUs" element={<BehindUs />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Service */}
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/details" element={<DetailsPage />} />
          <Route path="/services/consulting" element={<Consulting_Page />} />
          <Route path="/services/customer_insight" element={<CustomerInsight_Page />} />
          <Route path="/services/design" element={<Design_Page />} />
          <Route path="/services/digital" element={<Digital_Page />} />
          <Route path="/services/content_services" element={<Content_Services_Page />} />
          <Route path="/services/marketing_services" element={<Marketing_Services_Page />} />


          <Route path="/terms" element={<WordPressPage />} />

          <Route path="/resource" element={<ResourcePage />} />
          <Route path="/resource/blog" element={<ResourceBlogPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
