import React, { useState } from 'react';

const BookReader = () => {

  // this will be the pages of the book... 
  const pageContent = [
    'Page 1 Content',
    'Page 2 Content',
    'Page 3 Content',
    'Page 4 Content',
    'Page 5 Content',
    'Page 6 Content',
    'Page 7 Content',
    'Page 8 Content',
    'Page 9 Content',
    'Page 10 Content',
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageBack = () => {
    if (currentPage === 'backCover') {
      setCurrentPage(0);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 2);
    }
  };

  const handlePageNext = () => {
    if (currentPage < pageContent.length - 1) {
      setCurrentPage(currentPage + 2);
    } else {
      setCurrentPage('backCover');
    }
  };

  return (
    <div className='h-[50vh] w-full bg-orange-header p-12'>
      <div className='bg-white h-full'>
        {currentPage === 0 ? (
          <div onClick={handlePageNext} className='bg-white h-full'>
            <h2>Book Front Cover</h2>
          </div>
        ) : currentPage === 'backCover' ? (
          <div>
            <div onClick={() => setCurrentPage(0)}>
              <h2>Book Back Cover</h2>
            </div>
          </div>
        ) : (
          <div className='h-full'>
            <div className='flex justify-between h-full'>
              <h2 className='bg-gray-50 border border-gray-200 h-full w-full'>{pageContent[currentPage - 1]}</h2>
              <h2 className='bg-gray-50 border border-gray-200 h-full w-full'>{pageContent[currentPage]}</h2>
            </div>
            <div className='flex justify-between'>
              <button onClick={handlePageBack}>Back</button>
              <button onClick={handlePageNext}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookReader;
