import { Outlet } from 'react-router-dom';
// import BookTabs from "../../components/book-tabs/book-tabs.component";
// import Directory from "../../components/directory/directory.component";
import HomeHeroBanner from '../../components/home-hero-banner/home-hero-banner.component'
import BookReader from '../../components/book-reader/book-reader.component';
import Book from '../../components/pdf-book/pdf-book.component';
import FamilyFeature from '../../components/family-feature/family-feature.component';

import FrequentlyAskedQuestions from "../../components/frequently-asked-questions/frequently-asked-questions.component";

const Home = () => {
  return (
    <div>
      <HomeHeroBanner />
      {/* <BookTabs /> */}
      {/* <Directory /> */}

      <div className='bg-red-100 mx-auto max-w-7xl'>
        <BookReader />
      </div>

      {/* 
        <div className='bg-[#FFF3F3] mx-auto max-w-7xl py-12 px-12 flex justify-center'>
            <Book />
        </div> 
      */}

      <FamilyFeature />

      <FrequentlyAskedQuestions />
      <Outlet />
    </div>
  );
};

export default Home;
