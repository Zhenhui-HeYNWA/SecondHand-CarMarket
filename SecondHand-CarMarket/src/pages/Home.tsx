import DiscountSection from '@/components/DiscountSection/DiscountSection';
import ExportSection from '@/components/ExportSection/ExportSection';
import Footer from '@/components/Footer/Footer';
import HomeAD from '@/components/HOMEAD/HomeAD';
import MoreSixt from '@/components/MoreSixt/MoreSIxt';
import Navbar from '@/components/Navbar';
import RentDateSelector from '@/components/RentDateSelector/RentDateSelector';
import Testimonials from '@/components/Testimonials/Testimonials';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  // 设置滚动事件监听器，检测滚动距离
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true); // 当页面滚动超过30px时，固定元素
      } else {
        setIsSticky(false); // 否则，恢复原位
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清除事件监听器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero section with background image */}
      <div className="min-h-screen">
        <div className="relative h-[760px] w-full bg-[url('/wallpapers/BMW.png')] bg-cover bg-position-[center_top_rem] bg-no-repeat">
          <Navbar />
        </div>

        {/* RentDateSelector: initial top-30px, then sticky with smooth transition */}
        <div
          className={`${
            isSticky ? 'fixed top-1' : 'absolute top-15'
          } z-50 w-full transition-all duration-300`}
        >
          <div className="flex items-start justify-center">
            <RentDateSelector />
          </div>
        </div>

        {/* Other content */}
        <HomeAD />
      </div>

      <DiscountSection />
      <MoreSixt />
      <Testimonials />
      <ExportSection />
      <Footer />
    </div>
  );
};

export default Home;
