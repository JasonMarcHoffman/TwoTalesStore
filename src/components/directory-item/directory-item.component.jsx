import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80" onClick={onNavigateHandler}>
      {/* insert Images */}
      <img
        src=""
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        <a href="" className="text-white">
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
    </div>
  );
};

export default DirectoryItem;
