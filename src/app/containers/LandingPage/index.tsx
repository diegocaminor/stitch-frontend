import Section from "app/components/Section";
import Title from "app/components/Title";
import React from "react";
import "app/containers/LandingPage/index.css";
import Description from "app/components/Description";
import Button from "app/components/Button";
import Feature from "app/components/Feature";
import clockSvg from "assets/features-logo/clock.svg";
import mobileSvg from "assets/features-logo/mobile.svg";
import moneySvg from "assets/features-logo/money.svg";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Section
        containerClassName="mt-2 px-8 py-10"
        className="flex flex-col container-section md:w-3/5 xl:w-2/5 mx-auto"
      >
        <React.Fragment>
          <Title
            text="A new Power Stream for Fans"
            className="title text-white text-left text-transparent bg-clip-text bg-gradient-to-r from-purple to-green"
          ></Title>
          <Description
            text="Descentralized streaming platform that repays your fan attention with real value."
            className="text-white my-5 text-left"
          ></Description>
          <div className="grid gap-4 grid-cols-2">
            <Button
              text="Go to app"
              containerClassName=""
              className="text-white button bg-gradient-radial from-green via-purple to-purple text-sm rounded-full rounded-br-2xl"
            ></Button>
            <span className="text-white inline-block align-middle">
              Read the litepaper
            </span>
          </div>
        </React.Fragment>
      </Section>
      <Section
        containerClassName="bg-gray px-8 pt-10 pb-20"
        className="flex flex-col container-section w-full md:w-3/5 xl:w-2/5 mx-auto"
      >
        <React.Fragment>
          <Title
            text="Explore the awesome benefits"
            className="title text-white text-left"
          ></Title>
          <Feature
            title="Monetize your time"
            description="Retribution for the spent time"
            image={clockSvg}
          ></Feature>
          <Feature
            title="Own streamer content"
            description="Collect NFTs of streamer events"
            image={mobileSvg}
          ></Feature>
          <Feature
            title="Exclusive fan prizes"
            description="Lotery pool that rewards you"
            image={moneySvg}
          ></Feature>
        </React.Fragment>
      </Section>
    </React.Fragment>
  );
};

export default LandingPage;
