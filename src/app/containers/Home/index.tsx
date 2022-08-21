import Caption from "app/components/Caption";
import Section from "app/components/Section";
import ThumbnailComponent from "app/components/Thumbnail";
import React from "react";
import thumbnails from "../../../__mocks__/thumbnails";

const Home = () => {
  return (
    <React.Fragment>
      <Section
        containerClassName="px-8 pt-10 pb-20 mt-2"
        className="flex flex-col container-section w-full md:w-3/5 xl:w-2/5 mx-auto"
      >
        <React.Fragment>
          <Caption
            text="Latest"
            colorWord="Trends"
            className="title text-white text-left"
          ></Caption>
          <ThumbnailComponent thumbnails={thumbnails}></ThumbnailComponent>
        </React.Fragment>
      </Section>
    </React.Fragment>
  );
};

export default Home;
