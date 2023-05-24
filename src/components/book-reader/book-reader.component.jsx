import React, { useState } from 'react';

const BookReader = () => {
  const [isBookOpen, setBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('cover');

  const openBook = () => {
    setBookOpen(true);
    setCurrentPage(1);
  };

  const closeBook = () => {
    setBookOpen(false);
    setCurrentPage('cover');
  };

  const turnPage = () => {
    if (currentPage === 'cover') {
      setCurrentPage(1);
    } else if (currentPage === 'back') {
      setCurrentPage('cover');
    } else {
      setCurrentPage((prevPage) => {
        if (prevPage < 10) {
          return prevPage + 2;
        } else {
          return 'back';
        }
      });
    }
  };

  const getPageContent = (page) => {
    if (page === 'cover') {
      return <p>Book Cover</p>;
    } else if (page === 'back') {
      return <p>Back Cover</p>;
    } else {
      return <p>Page {page} Content Goes Here</p>;
    }
  };

  const renderPages = () => {
    const pages = [];
    if (currentPage === 'cover') {
      pages.push(<div key="cover">{getPageContent('cover')}</div>);
    } else if (currentPage === 'back') {
      pages.push(<div key="back">{getPageContent('back')}</div>);
    } else {
      pages.push(<div key={currentPage}>{getPageContent(currentPage)}</div>);
      if (currentPage + 1 <= 10) {
        pages.push(<div key={currentPage + 1}>{getPageContent(currentPage + 1)}</div>);
      }
    }
    return pages;
  };

  return (
    <div className='p-6 flex justify-center'>
      {isBookOpen ? (
        <div>
          <div onClick={turnPage}>
            {/* Display current pages */}
            {renderPages()}
          </div>
          <div onClick={closeBook}>
            {/* Display back cover */}
            {currentPage === 10 && <div>{getPageContent('back')}</div>}
          </div>
        </div>
      ) : (
        <div onClick={openBook}>
          {/* Display book cover */}
          {getPageContent('cover')}
        </div>
      )}
    </div>
  );
};

export default BookReader;
