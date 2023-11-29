import {Tab, Tabs, TabsHeader} from '@material-tailwind/react';
import {useState} from 'react';
import {ProjectCard} from './ProjectCard';

export const Projects = () => {
  const data = [
    {
      label: 'Comercial',
      value: 'comercial',
    },
    {
      label: 'Personal',
      value: 'personal',
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].value);

  console.log('activeTab', activeTab);
  return (
    <div className="pt-8">
      <Tabs value={activeTab}>
        <TabsHeader>
          {data.map(({label, value}) => (
            <Tab
              onClick={() => setActiveTab(value)}
              key={value}
              value={value}
              className={`tab w-32 ${activeTab === value ? 'bg-themePrimaryColor' : ''} hover:cursor-pointer`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {activeTab === 'comercial' ? (
          <div className="p-2 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        ) : (
          <div className="bg-green-100"></div>
        )}
      </Tabs>

      <div className="w-full mt-12">
        <i className="text-lg fond-light text-primaryColor pr-4">More information</i>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
};
