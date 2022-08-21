import Caption from "app/components/Caption";
import Category from "app/components/Category";
import Section from "app/components/Section";
import ThumbnailComponent from "app/components/Thumbnail";
import React from "react";
import thumbnails from "../../../__mocks__/thumbnails";
import categories from "../../../__mocks__/categories";
import channels from "../../../__mocks__/channels";

const Home = () => {

  /*let subscribeToEvents = () => {
    const { connector } = this.state;

    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);

      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      this.onSessionUpdate(accounts, chainId);
    });

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);

      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);

      if (error) {
        throw error;
      }

      this.onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      this.setState({
        connected: true,
        chainId,
        accounts,
        address,
      });
      this.onSessionUpdate(accounts, chainId);
    }

    this.setState({ connector });
  };*/


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
          <Caption
            text="Hot"
            colorWord="Categories"
            className="title text-white text-left mt-5"
          ></Caption>
          <Category categories={categories}></Category>
          <Caption
            text="Recommended"
            colorWord="Channels"
            className="title text-white text-left mt-5"
          ></Caption>
          <Category categories={channels}></Category>
          image.png
        </React.Fragment>
      </Section>
    </React.Fragment>
  );
};

export default Home;
