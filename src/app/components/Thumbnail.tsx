import React from "react";

interface Thumbnail {
  thumbnailImage?: string;
  profilePic?: string;
  gameTitle?: string;
  author?: string;
  gameName?: string;
}

interface Props {
  thumbnails: Thumbnail[];
}

const ThumbnailComponent = ({ thumbnails }: Props) => {
  const elements: JSX.Element[] = [];

  thumbnails.forEach((thumbnail) => {
    elements.push(
      <section className="px-3">
        <figure className="bg-gray leading-5 mt-8 pb-2 rounded-lg w-64">
          {/* <div className="absolute top-48 left-1/5 ml-5 mx-auto">
            <p className="text-white bg-red rounded px-3 uppercase">Live</p>
          </div> */}
          <img
            src={thumbnail.thumbnailImage}
            alt="axie-con"
            className="rounded-lg"
          />
          <div className="flex flex-row m-2">
            <img
              src={thumbnail.profilePic}
              alt="ibai-profile-pic"
              className="rounded-full max-w-[15%] h-1/5"
            />
            <div className="flex flex-col text-left mx-3">
              <h3 className="line-clamp-1 text-white">{thumbnail.gameTitle}</h3>
              <span className="text-gray-lighter text-sm">
                {thumbnail.author}
              </span>
              <span className="text-gray-lighter text-sm">
                {thumbnail.gameName}
              </span>
            </div>
          </div>
        </figure>
      </section>
    );
  });

  return <div className="overflow-x-scroll flex flex-row">{elements}</div>;
};

export default ThumbnailComponent;
