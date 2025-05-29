import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import TopPicks from '../components/home/TopPicks';
import Stats from '../components/home/Stats';
import Trending from '../components/home/Trending';
import NewServices from '../components/home/NewServices';
import HappyCustomers from '../components/home/HappyCustomers';
import AppDownload from '../components/home/AppDownload';
import AboutUs from '../components/home/AboutUs';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* First section (from first image) */}
        <Hero />
        <AboutUs />
        <Services />
        <TopPicks />

        {/* Second section (from second image) */}
        <Stats />
        <Trending />
        <NewServices />
        <HappyCustomers />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
