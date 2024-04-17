import { chakra, Text } from "@chakra-ui/react";
import Cpm from "@/assets/svg/admobPub/Cpm.svg";
import Revenu from "@/assets/svg/admobPub/Revenu.svg";
import Policy from "@/assets/svg/admobPub/Policy.svg";
import Ad from "@/assets/svg/admobPub/Ad.svg";
import RevenueOpt from "@/assets/svg/admobPub/RevenueOpt.svg";
import deal from "@/assets/svg/admobPub/deal.svg";
import RevenueIcon from "@/assets/svg/admobPub/RevenueIcon.svg";
import softwareDevelopment from "@/assets/svg/admobPub/softwareDevelopment.svg";
import operation from "@/assets/svg/admobPub/operation.svg";
import omniChannelSupport from "@/assets/svg/omniChannelSupport.svg";
import support from "@/assets/svg/admobPub/support.svg";
import rd from "@/assets/svg/admobPub/rd.svg";
import real from "@/assets/svg/admobPub/real.svg";
import supports from "@/assets/svg/admobPub/supports.svg";
import tool from "@/assets/svg/admobPub/tool.svg";
import last from "@/assets/svg/admobPub/last.svg";
import realTimeDash from "@/assets/svg/admobPub/realTimeDash.svg";
import accManager from "@/assets/svg/admobPub/accManager.svg";
import ads from "@/assets/svg/admobPub/ads.svg";
import invalidTraffic from "@/assets/svg/admobPub/invalidTraffic.svg";
import LoweCpm from "@/assets/svg/admobPub/LoweCpm.svg";
import policies from "@/assets/svg/admobPub/policies.svg";
import manageYourself from "@/assets/svg/admobPub/manageYourself.svg";
import scale from "@/assets/svg/admobPub/scale.svg";
import appAudit from "@/assets/svg/admobPub/appAudit.svg";
import admobVeterans from "@/assets/svg/admobPub/admobVeterans.svg";
import optimizeAd from "@/assets/svg/admobPub/optimizeAd.svg";
import policyCompliant from "@/assets/svg/admobPub/policyCompliant.svg";
import growthCurve from "@/assets/svg/admobPub/growthCurve.svg";
import eCpm from "src/assets/svg/mediation-publishers/eCpm.svg";
import fillrate from "src/assets/svg/mediation-publishers/fillrate.svg";
import premium from "src/assets/svg/mediation-publishers/premium.svg";
import connectedWorld from "src/assets/svg/mediation-publishers/connectedWorld.svg";
import getStartedsdk from '@/assets/svg/mediation-publishers/getStartedsdk.svg'

const HeroIcons = [
  {
    image: Cpm,
    para:'Data-driven recommendations'
  },
  {
    image: getStartedsdk,
    para: 'SDK-less integration'
  },
  {
    image: Policy,
    para: 'Free Smart Automation Tool'
  },
  {
    image: Ad,
    para: 'Access to Premium Demand'
  },
];
const FeaturesList = [
  {
    image: rd,
    title: "Powerful data-based recommendations",
    paragraph:
      "Our recommendation engine continuously learns from millions of impressions to personalize them for you.  ",
  },
  {
    image: tool,
    title: "Smart Automation Tool",
    paragraph:
      "Automates the optimizations of placements and A/B testing in waterfalls, so you don’t have to operate it manually.",
  },
  {
    image: real,
    title: "Real-time dashboard",
    paragraph:
      "Get real-time data and insights through a well-designed secure dashboard to protect your data.",
  },
  {
    image: supports,
    title: "Optimized eCPM and ARPDAU",
    paragraph:
      "Our automation tool combines AdMob with AppBroda’s premium demand to boost eCPM, ARPDAU and fill rates. ",
  },
  {
    image: accManager,
    title: "Dedicated account managers",
    paragraph:
      "Get a dedicated account manager for all your needs and round-the-clock support. ",
  }
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
      "Integrating our platform does not require an SDK. You are ready to go by adding a few lines of code to your app.",
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

const ChallengesList = [
  {
    image: ads,
    para: "Limited ad inventory and low fill rates",
  },
  {
    image: invalidTraffic,
    para: "Fluctuating eCPM and unpredictable revenue streams",
  },
  {
    image: LoweCpm,
    para: "Ad placement optimization difficulties",
  },
  {
    image: policies,
    para: "Complexities of managing multiple ad networks",
  },
  {
    image: manageYourself,
    para: "Ad Performance Monitoring",
  },
];

const SolutionList = [
  {
    image: scale,
    para: "Free smart automation tool for waterfall optimization",
  },
  {
    image: appAudit,
    para: "Intelligent ad stake suggestions",
  },
  {
    image: policies,
    para: "Personalized floor price recommendations",
  },
  {
    image: admobVeterans,
    para: "Single click project linking with SDK-less integration",
  },
  {
    image: optimizeAd,
    para: "Mediation to combine AdMob and Appbroda demand",
  },
];

const OfferList = [
  {
    background: fillrate,
    image: policyCompliant,
    title: (
      <>
        <chakra.span color="#FAC514">Enhanced</chakra.span>{" "}Monetization Strategies:
      </>
    ),
    para: "Maximize your earnings with advanced monetization strategies. Appbroda's automation tool combines AdMob with premium demand, unlocking new revenue streams and optimizing monetization for increased profitability. Goodbye missed opportunities, hello enhanced results!",
  },
  {
    background: eCpm,
    image: growthCurve,
    title: (
      <>
        Optimised{" "}<chakra.span color="#FAC514">eCPM</chakra.span> and{" "}
        <chakra.span color="#FAC514">Ad Performance:</chakra.span>
      </>
    ),
    para: "Optimize ad performance with Appbroda's automation tool. Leverage intelligent algorithms and data-driven insights to boost eCPM, click-through rates, and user engagement. Unlock peak revenue potential as your ads thrive.",
  },
  {
    background: premium,
    image: connectedWorld,
    title: (
      <>
        <chakra.span color="#FAC514">Advanced Automation</chakra.span>{" "}
        and Analytics:
      </>
    ),
    para: "Your secret weapon for automation. Streamline ad optimization, targeting, and reporting. Powerful analytics offer actionable insights for data-driven decisions that fuel revenue growth. Effortlessly save time and maximize results.",
  },
];

export {
  ChallengesList,
  Faqs,
  BenefitsLists,
  FeaturesList,
  HeroIcons,
  SolutionList,
  OfferList,
};
