import { chakra, Text } from "@chakra-ui/react";

import buildFor from "@/assets/svg/home/buildFor.svg";
import ironsource from "@/assets/svg/home/ironsource.svg";
import Row3 from "@/assets/svg/home/Row3.svg";
import Row4 from "@/assets/svg/home/Row4.svg";
import googleAdMobLogo from "@/assets/svg/home/googleAdMobLogo.svg";
import metaApple from "@/assets/svg/home/metaApple.svg";
import sid from "@/assets/svg/home/sid.svg";
import ashish from "@/assets/svg/home/ashish.svg";
import wave from "@/assets/svg/home/wave.svg";
import blog from "@/assets/svg/home/blog.svg";
import RevenueOpt from "@/assets/svg/admobPub/RevenueOpt.svg";
import deal from "@/assets/svg/admobPub/deal.svg";
import carry1stHPLP from "@/assets/png/carry1stHPLP.png";
import kwaleeHPLP from "@/assets/png/kwaleeHPLP.png";
import matchinghamHP from "@/assets/png/matchinghamHP.png";
import playvalveHP from "@/assets/png/playvalveHP.png";
import mixerboxHPLG from "@/assets/png/mixerboxHPLP.png";
import relianceHPLP from "@/assets/png/relianceHPLP.png";
import rollicHPLP from "@/assets/png/rollicHPLP.png";
import spearmintHPLP from "@/assets/png/spearmintHPLP.png";
import tutoonsHP from "@/assets/png/TutoonsHP.png";
import softwareDevelopment from "@/assets/svg/admobPub/softwareDevelopment.svg";
import operation from "@/assets/svg/admobPub/operation.svg";
import omniChannelSupport from "@/assets/svg/omniChannelSupport.svg";
import support from "@/assets/svg/admobPub/support.svg";
import realTimeDash from "@/assets/svg/admobPub/realTimeDash.svg";
import accManager from "@/assets/svg/admobPub/accManager.svg";

const BuildForList = [
  {
    headingSvg: buildFor,
    headingTitile: (
      <chakra.span color="#9E3A94">
        IRONSOURCE & APPLOVIN PUBLISHERS
      </chakra.span>
    ),
    heading: (
      <>
        Increase your<chakra.span color="#9E3A94"> ARPDAU </chakra.span>in 21 days
      </>
    ),
    paragraph:
      "We help publishers across the globe generate more revenue by connecting them to multiple premium DSPs & deploying cutting-edge ad optimizations with dedicated hands-on technical account management support.",
    btn: "Know More",
    rightImg: ironsource,
    route: "get-started/non-admob-mediation-publishers",
  },
  {
    headingSvg: googleAdMobLogo,
    headingTitile: (
      <chakra.span color="#FAC514">MADE FOR ADMOB PUBLISHERS <chakra.sup>(Beta)</chakra.sup></chakra.span>
    ),
    heading: (
      <>
        Maximize AdMob revenue with our 
        <chakra.span color="#FAC514"> data-driven automation tool!</chakra.span>
      </>
    ),
    paragraph:
      "Boost ad revenue effortlessly with our placement automation tool. Reduce manual optimization efforts and optimize placements based on data-driven recommendations. Unlock the power of automation for greater profitability.",
    btn: "Know More",
    rightImg: Row3,
    route: "get-started/admob-publishers",
  },
  {
    headingSvg: metaApple,
    headingTitile: (
      <chakra.span color="#04A44D">
        GROW USERS WITH GOOGLE APP CAMPAIGN
      </chakra.span>
    ),
    heading: (
      <>
        <chakra.span color="#04A44D">Profitably</chakra.span> grow your App’s
        User base
      </>
    ),
    paragraph:
      "Scale your user base with ROI-positive campaigns that connect you to the right users. Our experts optimize your Google Ads & Facebook Ads so that you achieve the desired results with a positive ROI.",
    btn: "Know More",
    rightImg: Row4,
    route: "get-started/publishing",
  },
];

const FounderCards = [
  {
    name: "Siddharth Gupta",
    designation: "Co-Founder",
    about:
      "Siddharth is ad-tech veteran who has held product and business roles across multiple startups focusing on helping developers understand how to build successful mobile games and apps. In his 8 years of experience, he's worked with more than 500 publishers across 10,000 games and apps to help them find and build the right data model to scale monetization and user acquisition",
       pic: sid,
    backgroundImg: wave,
    linkdin: "https://www.linkedin.com/in/siddharthgupta89/",
  },
  {
    name: "Ashish Aggarwal",
    designation: "Co-Founder",
    about:"Ashish has spent a decade in ad tech and is very passionate about the gaming and apps business. He spent the last 5 years at Google prior to Appbroda, where he worked with publishers across countries to boost their monetization. He is also an angel investor in several tech companies and is trying to accelerate India's position as a publishing powerhouse for games",
    pic: ashish,
    backgroundImg: wave,
    linkdin: "https://www.linkedin.com/in/ashish-aggarwal-228b8915/",
  },
];

const Blogs = [
  {
    pic: blog,
    content: "Google AdMob VS. AdX: Choosing the best monetization platform",
  },
  {
    pic: blog,
    content: "Google AdMob VS. AdX: Choosing the best monetization platform",
  },
  {
    pic: blog,
    content: "Google AdMob VS. AdX: Choosing the best monetization platform",
  },
];

const BenefitsLists = [
  {
    image: deal,
    title: "Trusted Google MCM Partner",
    paragraph:
      "Since our inception, we have been trusted Google Partners, ensuring authenticity, policy compliance, and scale for our publishers.",
  },
  {
    image: softwareDevelopment,
    title: "No Added SDK",
    paragraph:
      "Integrating our platform takes 5 min. You are ready to go by adding a few lines of code to your app.",
  },
  {
    image: operation,
    title: "NET 30 Days Payments",
    paragraph:
      "Publisher friendly payment terms! Get your payments in NET 30 days so that your monthly cash flow cycle is not affected.",
  },
];

const Faqs = [
  {
    ques: "How to get started with App/Web monetization?",
    ans: "Visit our Contact Us page and provide the following details: Name, Work Email, Phone number, App/Website Link and your Estimated Monthly Revenue. Our team will contact you for further steps.",
  },
  {
    ques: "What are the Minimum Requirements?",
    ans: "Visit our Contact Us page and provide the following details: Name, Work Email, Phone number, App/Website Link and your Estimated Monthly Revenue. Our team will contact you for further steps.",
  },
  {
    ques: "How to choose Best performing Ad Formats?",
    ans: "Visit our Contact Us page and provide the following details: Name, Work Email, Phone number, App/Website Link and your Estimated Monthly Revenue. Our team will contact you for further steps.",
  },
  {
    ques: "How to Track performance & Revenue?",
    ans: "Visit our Contact Us page and provide the following details: Name, Work Email, Phone number, App/Website Link and your Estimated Monthly Revenue. Our team will contact you for further steps.",
  },
  {
    ques: "What is the Payment Timeline?",
    ans: "Visit our Contact Us page and provide the following details: Name, Work Email, Phone number, App/Website Link and your Estimated Monthly Revenue. Our team will contact you for further steps.",
  },
];

const FeaturesList = [
  {
    image: RevenueOpt,
    title: "Revenue optimization specialists",
    paragraph:
      "Experience upto 40% revenue boost with our adops and admob experts!",
  },
  {
    image: support,
    title: "Policy compliance support",
    paragraph:
      "Resolve your Google AdMob or AdSense policy violations within minutes.",
  },
  {
    image: realTimeDash,
    title: "Real-time dashboard",
    paragraph:
      "Get real-time data and insights through a well-designed console by AppBroda.",
  },
  {
    image: omniChannelSupport,
    title: "Omni-channel support",
    paragraph:
      "Get a quick response to your queries with our Omni-channel Support.",
  },
  {
    image: accManager,
    title: "Dedicated account managers",
    paragraph:
      "Get a dedicated account manager for all your needs and round-the-clock support.",
  },
];

const BrandsLogoHP = [
  { img: relianceHPLP, alt: "reliance" },
  { img: carry1stHPLP, alt: "carry1st" },
  { img: kwaleeHPLP, alt: "kwalee" },

  { img: mixerboxHPLG, alt: "mixerbox" },
  { img: rollicHPLP, alt: "rollic" },
  { img: matchinghamHP, alt: "matchingham" },
  { img: spearmintHPLP, alt: "spearmint" },
  { img: tutoonsHP, alt: "tutoons" },
  { img: playvalveHP, alt: "playvalve" },
];

const BrandLogoLP = [
  { img: relianceHPLP, alt: "reliance" },
  { img: carry1stHPLP, alt: "carry1st" },
  { img: kwaleeHPLP, alt: "kwalee" },

  { img: mixerboxHPLG, alt: "mixerbox" },
  { img: rollicHPLP, alt: "rollic" },
  { img: spearmintHPLP, alt: "spearmint" },
];

export {
  Blogs,
  FounderCards,
  BuildForList,
  BenefitsLists,
  Faqs,
  BrandsLogoHP,
  BrandLogoLP,
  FeaturesList,
};
