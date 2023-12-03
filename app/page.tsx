import Image from "next/image";
import HomeSearch from "./HomeSearch";
import HomeHeader from "./HomeHeader";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          alt="Google Image"
          width={300}
          height={100}
          className="w-auto h-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          priority={true}
        />

        <HomeSearch />
      </div>
    </>
  );
};
export default Home;
