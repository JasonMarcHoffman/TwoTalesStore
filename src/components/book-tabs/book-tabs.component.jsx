import { Tab } from "@headlessui/react";

const BookTabs = () => {
  return (
    <div className="w-full mx-auto max-w-7xl my-12">
      <Tab.Group>
        <Tab.List className="grid grid-cols-3 gap-4">
          <Tab className="p-2 border border-gray-200 flex-1">Babies</Tab>
          <Tab className="p-2 border border-gray-200 flex-1">Toddler</Tab>
          <Tab className="p-2 border border-gray-200 flex-1">Children</Tab>
        </Tab.List>
        <Tab.Panels className="bg-white rounded-md p-6 mt-12">
          <Tab.Panel className="">Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default BookTabs;
