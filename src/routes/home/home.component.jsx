import { Outlet } from 'react-router-dom';
import BookTabs from "../../components/book-tabs/book-tabs.component";
import Directory from "../../components/directory/directory.component";
import FrequentlyAskedQuestions from "../../components/frequently-asked-questions/frequently-asked-questions.component";

const Home = () => {
  return (
    <div>
      <BookTabs />
      <Directory />
      <FrequentlyAskedQuestions />
      <Outlet />
    </div>
  );
};

export default Home;
