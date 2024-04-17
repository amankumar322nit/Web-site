import yellowBlob from "../assets/svg/aboutUs/yellowBlob.svg";
import blueBlob from "../assets/svg/aboutUs/blueBlob.svg";
import purpleBlob from "../assets/svg/aboutUs/purpleBlob.svg";
import greenBlob from "../assets/svg/aboutUs/greenBlob.svg";
import remote from "../assets/svg/aboutUs/remote.svg";
import focusOn from "../assets/svg/aboutUs/focusOn.svg";
import unlimited from "../assets/svg/aboutUs/unlimited.svg";
import flexible from "../assets/svg/aboutUs/flexible.svg";
import workLife from "../assets/svg/aboutUs/workLife.svg";
import autonomy from "../assets/svg/aboutUs/autonomy.svg";
import { Text, chakra } from "@chakra-ui/react";

const StyledText = chakra(Text, {
  baseStyle: {
    textAlign: "center",
    fontSize: {
      base: "16px",
      md: "18px",
    },
  },
});

const StyledSpan = chakra("span", {
  baseStyle: {
    fontSize: {
      base: "20px",
      md: "22px",
    },
    fontWeight: "600",
  },
});

const valuesList = [
  {
    id: 1,
    theme: "#289CD7",
    title: "Transparency",
    text: (
      <StyledText>
        We believe <StyledSpan color={"#289CD7"}>transparency</StyledSpan> helps
        everyone grow while avoiding hassles and making operating easier.
      </StyledText>
    ),
    graphic: blueBlob,
  },
  {
    id: 2,
    theme: "#9E3A94",
    title: "Data Driven",
    text: (
      <StyledText>
        We think <StyledSpan color={"#9E3A94"}>creatively</StyledSpan> and then
        let the data be our guide.
      </StyledText>
    ),
    graphic: purpleBlob,
  },
  {
    id: 3,
    theme: "#04A44D",
    title: "Supportive",
    text: (
      <StyledText>
        We believe in <StyledSpan color={"#04A44D"}>optimizing</StyledSpan> the
        team’s success and helping each other learn, grow and succeed.
      </StyledText>
    ),
    graphic: greenBlob,
  },
  {
    id: 4,
    theme: "#FAC514",
    title: "Evolution",
    text: (
      <StyledText>
        We love taking the initiative to explore{" "}
        <StyledSpan color={"#FAC514"}>new ideas.</StyledSpan> We’re adaptable,
        embrace change and learn from failure.
      </StyledText>
    ),
    graphic: yellowBlob,
  },
];

const perksList = [
  {
    id: 1,
    title: "Remote",
    subTitle: "Work",
    graphic: remote,
  },
  {
    id: 2,
    title: "Focus on",
    subTitle: "Health & Wellbeing",
    graphic: focusOn,
  },
  {
    id: 3,
    title: "Unlimited cap",
    subTitle: "on leaves",
    graphic: unlimited,
  },
  {
    id: 4,
    title: "Flexible",
    subTitle: "Timing",
    graphic: flexible,
  },
  {
    id: 5,
    title: "Work life",
    subTitle: "Balance",
    graphic: workLife,
  },
  {
    id: 6,
    title: "Autonomy",
    subTitle: "& Ownership",
    graphic: autonomy,
  },
];

export { valuesList, perksList };
