const allProjects = [
  {
    imageSrc: "/assets/Work/image (1).webp",
    title: `MedTracker approached us to create a great experience for their mobile app. We
  started with the users and designed an intuitive UX design and UI design.`,
    text: "",
    link: "/work/MedtrackerUi",
    name: "Medtracker Ui",
  },
  {
    imageSrc: "/assets/Work/appleBees (4).jpg",
    title: `Web Solutions.We designed & developed the website for AppleBees' India launch.`,
    text: "",
    link: "/work/AppleBees",
    name: "AppleBees",
  },
  {
    imageSrc: "/assets/Work/image (3).webp",
    title: `VEC Photography, We wanted to capture the honest and down-to-earth side of the brand. Nothing can be better than capturing the real people behind this terrific coffee. The images are not touched-up, but true and grounded. Just like these people and the coffee they grow.`,
    text: "",
    link: "/work/VEC_Photography",
    name: "VEC Photography",
  },
  {
    imageSrc: "/assets/Work/image (4).webp",
    title: `SafeTree
  Digital, UX & UI Design. Website design & development. Built on Vue-JS + Strapi Headless
  CMS. API Integrations.`,
    text: "",
    link: "/work/Safe_Tree",
    name: "Safe Tree",
  },
  {
    imageSrc: "/assets/Work/image.webp",
    title: "Gloria Jeans Coffee",
    text: ` For Gloria Jeans Coffee - India launch, we designed &
                        developed the website.`,
    link: "/work/Gloria_Coffee",
    name: "Gloria Coffee",
  },
  {
    imageSrc: "/assets/Work/image (5).webp",
    title: `Medtech startup's mobile app helps people to manage their medicine intake and
  health. To present the mobile app and its value to its target audience, MedTracker
  asked us to produce a demo video.`,
    text: "",
    link: "/work/Medtracker",
    name: "Medtracker",
  },
  {
    imageSrc: "/assets/Work/image (6).webp",
    title: `
  When Vaishnavi Estate with its 100 years of legacy, launched its coffee brand, we
  had to make sure it is perceived and accepted across various audience segments.
  Nothing better than some short video content.`,
    text: "",
    link: "/work/VE_Coffee",
    name: "VE Coffee",
  },
  {
    imageSrc: "/assets/Work/VEC_Campaign/VC_Cover.webp",
    title: `We set up and managed the social media channels of Vaishnavi Estate Coffee. As part
of this service, we produced Instagram visuals, reels, shorts and other interesting
content.`,
    text: "Vaishnavi Estate Coffee",
    link: "/work/VE_Campaign",
    name: "VE Campaign",
  },
  {
    imageSrc: "/assets/Work/Happilo/cover.webp",
    title: `Being a new brand, we knew, Happilo had to leverage social media to grow. We setup
the social media channels, produced content and managed the pages to build the social
community.`,
    text: "Happilo - Campaign Services",
    link: "/work/Happilo",
    name: "Happilo",
  },
  {
    imageSrc: "/assets/Work/coffeeTableBook/cover.webp",
    title: `Coffee-table-book for the luxury villa project brand from Lonavla, Maharashtra.`,
    text: "Coffee Table Book - Design",
    link: "/work/Coffee_Book",
    name: "Coffee Book",
  },
  {
    imageSrc: "/assets/Work/Encryption_Consulting/cover.webp",
    title: `Digital marketing for US-headquartered consulting firm, specializing in encryption.`,
    text: "Encryption Consulting - USA - Campaign Services",
    link: "/work/Encryption_Consulting",
    name: "Encryption Consulting",
  },
  {
    imageSrc: "/assets/Work/Toyoda/cover.webp",
    title: "Toyoda Brochure - Design",
    text: `For TGSIN (Toyoda Gosei South India), we designed and produced the marketing
           brochure.`,
    link: "/work/Toyoda_Brochure",
    name: "Toyoda Brochure",
  },
  {
    imageSrc: "/assets/Work/Pavana_Valley/cover.webp",
    title: `Communication design for luxury villa project brand from Lonavla, Maharashtra..`,
    text: "Pavana Valley Villas - Design",
    link: "/work/Pavana_Valley_Villas ",
    name: "Pavana Valley Villas",
  },
  {
    imageSrc: "/assets/Work/Restaurant_Brand/cover.webp",
    title: `When one of the top chefs and a serial entrepreneur joined hands to create a restaurant
brand, "authenticity" was the keyword. We were tasked with producing some visuals that
capture this essence, without making them look like stock photography.`,
    text: "Restaurant Brand - Content Production",
    link: "/work/Restaurant_Brand ",
    name: "Restaurant Brand",
  },
  {
    imageSrc: "/assets/Work/karunashraya/cover.webp",
    title: `Bangalore Hospice Trust runs Karunashraya - the largest Palliative care hospital that offers Free care for all.`,
    text: "Karunashraya - Campaign Services",
    link: "/work/Karunashraya",
    name: "Karunashraya",
  },
  {
    imageSrc: "/assets/Work/Karlsson_Cat/cover.webp",
    title: `Luxury bespoke leather furniture brand, Karlsson wanted a product catalogue to present its premium products.`,
    text: "Karlsson Catalogue - Design",
    link: "/work/Karlsson_Catalogue ",
    name: "Karlsson Catalogue",
  },
  {
    imageSrc: "/assets/Work/Vivekananda_Yoga/cover.webp",
    title: `Leading yoga & wellness brand from Bangalore wanted to promote yoga courses across
India. We planned, designed and executed the digital media campaign.`,
    text: "Vivekananda Yoga - Campaign Services",
    link: "/work/Vivekananda_Yoga",
    name: "Vivekananda Yoga",
  },
  {
    imageSrc: "/assets/Work/tonirossi/cover.webp",
    title: `Fast-growing leather footwear brand.`,
    text: "ToniRossi Catalogue",
    link: "/work/ToniRossi",
    name: "ToniRossi Catalogue",
  },
  {
    imageSrc: "/assets/Work/NLF/cover.webp",
    title: `Brand identity design for Namma Live Fish (NLF), a startup that brings fresh-live-fish`,
    text: "NLF - Design",
    link: "/work/NLF",
    name: " Namma Live Fish (NLF)",
  },
  {
    imageSrc: "/assets/Work/TR-Camp/tr (1).webp",
    title: `ToniRossi - a fast-growing fashion-footwear brand - is known for its sustainable methods
of shoe making.`,
    text: "ToniRossi - Campaign Services",
    link: "/work/TR_Campaign",
    name: "ToniRossi - Campaign Services",
  },
  {
    imageSrc: "/assets/Work/Ashok_Maanay/cover.webp",
    link: "/work/Ashok_Maanay",
    text: "Ashok Maanay - Content Production",
    title: `One of the finest fashion designers, Ashok Maanay is known for his exquisite collection
apt for royals. For Bangalore Fashion Week, where he was presenting the collections,
we were tasked to produce a series of imagery and brochures. We worked with talents
like Ravi Awana - Gladrags Winner, and Raiza Wilson - Actress, to create some stunning
visuals to present his outfits in all the grandeur.`,
    name: "Ashok Maanay",
  },
  {
    imageSrc: "/assets/Work/Karlsson_Leather/cover.webp",
    link: "/work/Karlsson_Leather",
    text: "Karlsson Leather - Digital",
    title: `Karlsson Leather is a luxury bespoke leather furniture brand. We designed and developed websites for Indian and UAE markets.`,
    name: "Karlsson Leather ",
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

export function generateProjectsPagination(steps = 7) {
  if (steps <= 0) {
    return 1;
  }
  return Math.ceil(allProjects.length / steps);
}

export function generatePreAndNextProjects(projectLink) {
  const findIndex = allProjects.findIndex((val) => val.link === projectLink);

  if (findIndex === -1) {
    return {
      nextProject: null,
      prevProject: null,
    };
  }

  const nextProject =
    findIndex < allProjects.length - 1 ? allProjects[findIndex + 1] : null;
  const prevProject = findIndex > 0 ? allProjects[findIndex - 1] : null;

  return {
    nextProject,
    prevProject,
  };
}
