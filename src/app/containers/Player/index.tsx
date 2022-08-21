import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoExample from "assets/videos/video-example.mp4";
import coinIcon from "assets/icons/coin-icon.svg";
import eggIcon from "assets/icons/egg-icon.svg";
import happyFaceIcon from "assets/icons/happy-face-icon.svg";
import heartIcon from "assets/icons/heart-icon.svg";
import Caption from "app/components/Caption";
import Section from "app/components/Section";
import Button from "app/components/Button";
import getEarnings from "app/constants/queries";

const Player = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleSetSelectedTab = (tab: number) => {
    if (tab === selectedTab) {
      setSelectedTab(0);
    } else {
      setSelectedTab(tab);
    }
  };

  let totalEarning: number = 0.2;
  let totalEarnings = getEarnings();

  return (
    <div className="player-wrapper'">
      <section className="px-3">
        <figure className="bg-gray leading-5 mt-8 pb-2 rounded-lg cursor-pointer">
          {/* <div className="absolute top-48 left-1/5 ml-5 mx-auto">
            <p className="text-white bg-red rounded px-3 uppercase">Live</p>
          </div> */}
          <ReactPlayer
            className="react-player mx-auto"
            url={VideoExample}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
          />

          <div className="flex flex-row m-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridWRo43WuXPqH2AZoUcq11iQ6lN43lZUs7PoxyYXRQ&s"
              alt="ibai-profile-pic"
              className="rounded-full max-w-[15%] h-1/5"
            />
            <div className="flex flex-col text-left mx-3">
              <h3 className="line-clamp-1 text-white">
                Axie Classic Word Championship WEEKEND
              </h3>
              <span className="text-gray-lighter text-sm">Ibai</span>
              <span className="text-gray-lighter text-sm">Axie Infinity</span>
              <span className="text-gray-lighter text-sm">
                <strong>Total Earnings: </strong>
                {totalEarning} Matic
              </span>
            </div>
          </div>
        </figure>
      </section>

      <div className="flex flex-row justify-center gap-10 mt-5">
        <img
          src={coinIcon}
          className={`px-2 bg-gradient-radial text-sm border border-white rounded-full p-1  ${
            selectedTab === 1
              ? "bg-gradient-radial from-green via-purple to-purple"
              : ""
          }`}
          alt="logo"
          onClick={() => handleSetSelectedTab(1)}
        />
        <img
          src={eggIcon}
          className={`px-2 bg-gradient-radial text-sm border border-white rounded-full p-1  ${
            selectedTab === 2
              ? "bg-gradient-radial from-green via-purple to-purple"
              : ""
          }`}
          //   className="px-2 bg-gradient-radial text-sm border border-white rounded-full p-1 "
          alt="logo"
          onClick={() => handleSetSelectedTab(2)}
        />
        <img
          src={happyFaceIcon}
          className={`px-2 bg-gradient-radial text-sm border border-white rounded-full p-1  ${
            selectedTab === 3
              ? "bg-gradient-radial from-green via-purple to-purple"
              : ""
          }`}
          alt="logo"
          onClick={() => handleSetSelectedTab(3)}
        />
        <img
          src={heartIcon}
          className={`px-2 bg-gradient-radial text-sm border border-white rounded-full p-1  ${
            selectedTab === 4
              ? "bg-gradient-radial from-green via-purple to-purple"
              : ""
          }`}
          alt="logo"
          onClick={() => handleSetSelectedTab(4)}
        />
      </div>

      <div>
        <Section
          containerClassName={`px-8 pt-3 pb-20  ${
            selectedTab !== 0 ? "hidden" : ""
          }`}
          className="flex flex-col container-section w-full md:w-3/5 xl:w-2/5 mx-auto"
        >
          <React.Fragment>
            <Caption
              text="Top"
              colorWord="Comments"
              className="title text-white text-left mt-5"
            ></Caption>
            <div className="flex flex-col">
              <div className="container">
                <div className="flex flex-row mt-2 text-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridWRo43WuXPqH2AZoUcq11iQ6lN43lZUs7PoxyYXRQ&s"
                    alt="ibai-profile-pic"
                    className="rounded-full max-w-[15%] h-1/5"
                  />
                  <span className="text-white mt-3 ml-2">
                    juvenft.lens<strong>sent $15 MATIC</strong>
                  </span>
                </div>
                <p className="text-white bg-gray rounded-full rounded-tl-2xl mt-1">
                  Awesome, I love your content!
                </p>
              </div>
              <div className="container">
                <div className="flex flex-row mt-2 text-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridWRo43WuXPqH2AZoUcq11iQ6lN43lZUs7PoxyYXRQ&s"
                    alt="ibai-profile-pic"
                    className="rounded-full max-w-[15%] h-1/5"
                  />
                  <span className="text-white mt-3 ml-2">
                    anthonysurfer.lens<strong>sent $10 MATIC</strong>
                  </span>
                </div>
                <p className="text-white bg-gray rounded-full rounded-tl-2xl mt-1">
                  WT*! You are ruining the game
                </p>
              </div>
              <div className="container">
                <div className="flex flex-row mt-2 text-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridWRo43WuXPqH2AZoUcq11iQ6lN43lZUs7PoxyYXRQ&s"
                    alt="ibai-profile-pic"
                    className="rounded-full max-w-[15%] h-1/5"
                  />
                  <span className="text-white mt-3 ml-2">
                    andreav.lens<strong>sent $5 MATIC</strong>
                  </span>
                </div>
                <p className="text-white bg-gray rounded-full rounded-tl-2xl mt-1">
                  Say HBD to my bf please, he love your content! His name is
                  Julio
                </p>
              </div>
            </div>
          </React.Fragment>
        </Section>
        <Section
          containerClassName={`px-8 pt-3 pb-20  ${
            selectedTab !== 1 ? "invisible" : ""
          }`}
          className="flex flex-col container-section w-full md:w-3/5 xl:w-2/5 mx-auto bg-gray p-3"
        >
          <React.Fragment>
            <Caption
              text="When you support, you also win a ticket for the"
              colorWord="fan pool lottery"
              className="title text-white text-left mt-5 text-lg"
            ></Caption>
            <p className="text-white text-left text-xs pb-3">
              Contribute with $MATIC to participate on the fan pool lottery with
              the 10% of all the donations for the streamer.{" "}
            </p>
            <div className="amounts-to-donate text-white flex flex-row justify-center mt-2">
              <div className="border border-white p-2 rounded-lg">5 MATIC</div>
              <div className="border border-white p-2 rounded-lg">10 MATIC</div>
              <div className="border border-white p-2 rounded-lg">15 MATIC</div>
              <div className="border border-white p-2 rounded-lg">20 MATIC</div>
            </div>
            <Button
              text="Contribute"
              containerClassName="mx-auto mt-5"
              className="w-full text-white rounded-full button bg-gradient-radial from-green via-purple to-purple text-sm"
            ></Button>
          </React.Fragment>
        </Section>
      </div>
    </div>
  );
};

export default Player;
