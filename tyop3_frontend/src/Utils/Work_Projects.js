const allProjects = [
  {
    imageSrc: "/assets/Work/image (1).webp",
    title: `MedTracker approached us to create a great experience for their mobile app. We
  started with the users and designed an intuitive UX design and UI design.`,
    text: "",
    link: "/work/MedtrackerUi",
  },
  {
    imageSrc: "/assets/Work/appleBees (4).jpg",
    title: `Web Solutions.We designed & developed the website for AppleBees' India launch.`,
    text: "",
    link: "/work/AppleBees",
  },
  {
    imageSrc: "/assets/Work/image (3).webp",
    title: `VEC Photography, We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.`,
    text: "",
    link: "/work/VEC_Photography",
  },

  {
    imageSrc: "/assets/Work/image (4).webp",
    title: `SafeTree
  Digital, UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
  CMS. API Integrations.`,
    text: "",
    link: "/work/Safe_Tree",
  },
  {
    imageSrc: "/assets/Work/image.webp",
    title: "Gloria Jeans Coffee",
    text: `Beginest Harbor 5,
2nd Floor, 3rd Cross,
Residency Road,
Bengaluru – 560 025
India`,
    link: "/work/Gloria_Coffee",
  },
  {
    imageSrc: "/assets/Work/image (5).webp",
    title: `Medtech startup's mobile app helps people to manage their medicine intake and
  health. To present the mobile app and its value to its target audience, MedTracker
  asked us to produce a demo video.`,
    text: "",
    link: "/work/Medtracker",
  },
  {
    imageSrc: "/assets/Work/image (6).webp",
    title: `
  When Vaishnavi Estate with its 100 years of legacy, launched its coffee brand, we
  had to make sure it is perceived and accepted across various audience segments.
  Nothing better than some short video content.`,
    text: "",
    link: "/work/VE_Coffee",
  },
  {
    imageSrc: "/assets/Work/VEC_Campaign/VC_Cover.webp",
    title: `We set up and managed the social media channels of Vaishnavi Estate Coffee. As part
of this service, we produced Instagram visuals, reels, shorts and other interesting
content.`,
    text: "Vaishnavi Estate Coffee",
    link: "/work/VE_Campaign",
  },
  {
    imageSrc: "/assets/Work/Happilo/cover.webp",
    title: `Being a new brand, we knew, Happilo had to leverage social media to grow. We setup
the social media channels, produced content and managed the pages to build the social
community.`,
    text: "Happilo - Campaign Services",
    link: "/work/Happilo",
  },
  {
    imageSrc: "/assets/Work/coffeeTableBook/cover.webp",
    title: `Coffee-table-book for the luxury villa project brand from Lonavla, Maharashtra.`,
    text: "Coffee Table Book - Design",
    link: "/work/Coffee_Book",
  },
  {
    imageSrc: "/assets/Work/Encryption_Consulting/cover.webp",
    title: `Digital marketing for US-headquartered consulting firm, specializing in encryption.`,
    text: "Encryption Consulting - USA - Campaign Services",
    link: "/work/Encryption_Consulting",
  },
  {
    imageSrc: "/assets/Work/Toyoda/cover.webp",
    title: "Toyoda Brochure - Design",
    text: `For TGSIN (Toyoda Gosei South India), we designed and produced the marketing
           brochure.`,
    link: "/work/Toyoda_Brochure",
  },
  {
    imageSrc: "/assets/Work/Pavana_Valley/cover.webp",
    title: `Communication design for luxury villa project brand from Lonavla, Maharashtra..`,
    text: "Pavana Valley Villas - Design",
    link: "/work/Pavana_Valley_Villas ",
  },
  {
    imageSrc: "/assets/Work/Restaurant_Brand/cover.webp",
    title: `When one of the top chefs and a serial entrepreneur joined hands to create a restaurant
brand, "authenticity" was the keyword. We were tasked with producing some visuals that
capture this essence, without making them look like stock photography.`,
    text: "Restaurant Brand - Content Production",
    link: "/work/Restaurant_Brand ",
  },
  {
    imageSrc: "/assets/Work/karunashraya/cover.webp",
    title: `Bangalore Hospice Trust runs Karunashraya - the largest Palliative care hospital that offers Free care for all.`,
    text: "Karunashraya - Campaign Services",
    link: "/work/Karunashraya",
  },
  {
    imageSrc: "/assets/Work/Karlsson_Cat/cover.webp",
    title: `Luxury bespoke leather furniture brand, Karlsson wanted a product catalogue to present its premium products.`,
    text: "Karlsson Catalogue - Design",
    link: "/work/Karlsson_Catalogue ",
  },
  {
    imageSrc: "/assets/Work/Vivekananda_Yoga/cover.webp",
    title: `Leading yoga & wellness brand from Bangalore wanted to promote yoga courses across
India. We planned, designed and executed the digital media campaign.`,
    text: "Vivekananda Yoga - Campaign Services",
    link: "/work/Vivekananda_Yoga",
  },
  {
    imageSrc: "/assets/Work/tonirossi/cover.webp",
    title: `Fast-growing leather footwear brand.`,
    text: "ToniRossi Catalogue",
    link: "/work/ToniRossi",
  },
];

export function getProjectsByPage(page_id, loadNumbers = 7) {
  const shalowCopy = [...allProjects];
  if (page_id == 1) {
    return shalowCopy.slice(0, loadNumbers) || [];
  }
  const pageStart = (page_id - 1) * loadNumbers;
  const pageEnd = pageStart + loadNumbers;
  return shalowCopy.slice(pageStart, pageEnd) || [];
}
