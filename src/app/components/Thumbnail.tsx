interface Props {
  thumbnailImage?: string;
  profilePic?: string;
  gameTitle?: string;
  userName?: string;
  gameName?: string;
}

const Thumbnail = ({
  thumbnailImage,
  profilePic,
  gameTitle,
  userName,
  gameName,
}: Props) => {
  return (
    <section>
      <figure className="bg-gray leading-5 mt-8 pb-2 rounded-lg">
        <div className="absolute top-48 left-1/5 ml-5 mx-auto">
          <p className="text-white bg-red rounded px-3 uppercase">Live</p>
        </div>
        <img
          src="https://v2.cimg.co/news/83049/209743/axiecon-primer-torneo-mundial-congreso-fanaticos-cryptonews.jpeg"
          alt="axie-con"
          className="rounded-lg"
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
          </div>
        </div>
      </figure>
    </section>
  );
};

export default Thumbnail;
