import React from "react";

interface Thumbnail {
  imageUrl?: string;
  title?: string;
  audience?: string;
}

interface Props {
  categories: Thumbnail[];
}

const ThumbnailComponent = ({ categories }: Props) => {
  const elements: JSX.Element[] = [];

  categories.forEach((category) => {
    elements.push(
      <section className="px-3">
        <figure className="bg-gray leading-5 mt-8 pb-2 rounded-lg w-32">
          {/* <div className="absolute top-48 left-1/5 ml-5 mx-auto">
            <p className="text-white bg-red rounded px-3 uppercase">Live</p>
          </div> */}
          <img src={category.imageUrl} alt="axie-con" className="rounded-lg" />
          <div className="flex flex-row m-2">
            <div className="flex flex-col text-left mx-3">
              <h3 className="line-clamp-1 text-white">{category.title}</h3>
              <span className="text-gray-lighter text-sm">
                {category.audience}
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
