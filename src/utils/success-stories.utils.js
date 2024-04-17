import { UnorderedList, ListItem } from "@chakra-ui/react";
import background from "src/assets/svg/success-stories/background.svg";
import challenge from "src/assets/svg/success-stories/challenge.svg";
import graph from "src/assets/svg/success-stories/graph.svg";
import revenue from "src/assets/svg/success-stories/revenue.svg";
import solution from "src/assets/svg/success-stories/solution.svg";
import papermap from "src/assets/svg/success-stories/paperMap.svg";
import successStoriesCatalogue from "src/assets/svg/success-stories/successStoriesCatalogue.svg";

const challengeList = [
  {
    title: "Company Background",
    para: (
      <>
        PocketFM is a leading Audiobook App, enriching the lives of millions of
        audiobook lovers every day. Pocket FM has raised over $93.5M in funding
        over 5 rounds.
        <br />
        They bring you the world’s best audiobooks, stories, and podcasts from
        the best authors, podcasters, and voice-over artists. They also give you
        the ease to listen to your favorite audiobooks while commuting, driving,
        working out at the gym, cooking, going to bed, or just about anywhere
        else based on your comfort.
        <br />
        They have all the best sellers of various categories like: Romance,
        Suspense and Thriller, Drama, Fantasy, Horror, Classic, and more.
      </>
    ),
    img: background,
    color: "white",
    flexdir: "row-reverse",
  },
  {
    title: "The Challenge",
    para: (
      <>
        PocketFM was experiencing low fill rates and eCPMs, followed by very
        little revenue.
        <br />
        After multiple attempts to scale their ad revenue further, PocketFM
        consulted our team to create an efficient monetization plan for the
        company and help them scale their revenues further.
      </>
    ),
    img: challenge,
    color: "#EAF5FB",
    flexdir: "row",
  },
  {
    title: "The Solution",
    para: (
      <>
        Our optimization and ad operations experts devised a detailed plan for
        the company to set an effective strategy for Ad Monetization to help the
        team scale their revenue and operational efficiency for daily data
        tracking.
        <br />
        Our team considered Ad Request eCPM a benchmark metric to track the
        success of our optimization strategy. Any small increment in the Ad
        Request eCPM is an achievement in itself.
        <br />
        The Formula for Ad Request eCPM is:
        <br />
        Ad Request eCPM = (Total Ad Revenue / Total Ad Requests) * 1000
        <br />
        It essentially discounts any daily variation in traffic and focuses on
        the revenue per ad request being generated daily.
      </>
    ),
    img: solution,
    height: "600px",
    color: "white",
    flexdir: "row",
  },
  {
    title: "The Results",
    para: <>Immediate Ad request eCPM increase with huge potential for more</>,
    img: revenue,
    color: "#EAF5FB",
    flexdir: "row",
  },
  {
    title: "",
    para: (
      <>
        After migrating to AppBroda, PocketFM saw an immediate increase in daily
        revenue and Ad request eCPM as a result of:
        <UnorderedList>
          <ListItem>
            Increased demand for their inventory with our premium advertisers
          </ListItem>
          <ListItem>
            Granular optimization on each ad unit by our Ad Operations exper
          </ListItem>
        </UnorderedList>
        With the help of our Ad Revenue Optimization capabilities, PocketFM has
        scaled its average Ad Request eCPMs by 90% in just one month and almost
        tripled its daily revenue
      </>
    ),
    img: graph,
    color: "white",
    flexdir: "row",
  },
  {
    title: "Way Forward",
    para: (
      <>
        Our team is grateful for the opportunity to help and consult the
        PocketFM team with its Optimization capabilities. We will be working
        extensively to support the PocketFM team scale their revenue to greater
        heights in the coming months.
        <br />
        With our industry-leading demand partners, ad operations experts, and
        optimization strategies in the loop, we are confident to help PocketFM
        increase its revenue further.
      </>
    ),
    img: papermap,
    color: "#EAF5FB",
    flexdir: "row",
  },
];

const catalogues = [
  {
    img: successStoriesCatalogue,
    heading: "POCKET FM",
    title: "Increased eCPM by 100%",
    para: "Appbroda deployed app monetization platform, AdX into Pocket FM’s website and app ecosystem, offering them a higher yield and fill rate compared to their existing partners in India ...",
  },
];

const buttons = ["All", "Ad Revenue Optimization", "User Growth"];

export { challengeList, catalogues, buttons };
