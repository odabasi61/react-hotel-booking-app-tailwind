import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Featured from '../components/Featured';
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer mt-12 flex flex-col items-center gap-7">
        <Featured />
        <h1 className="homeTitle text-2xl font-bold">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle text-2xl font-bold">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  );
};

export default Home;
