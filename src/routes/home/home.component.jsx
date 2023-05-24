import { Outlet } from 'react-router-dom';
import BookTabs from "../../components/book-tabs/book-tabs.component";
// import Directory from "../../components/directory/directory.component";
import BookReader from '../../components/book-reader/book-reader.component';

import FrequentlyAskedQuestions from "../../components/frequently-asked-questions/frequently-asked-questions.component";

const Home = () => {
  return (
    <div>
      <BookTabs />
      {/* <Directory /> */}

      <div className='bg-red-100 mx-auto max-w-7xl'>
        <BookReader />
      </div>

      <FrequentlyAskedQuestions />
      <Outlet />
    </div>
  );
};

export default Home;
