import React, { useEffect, useState } from 'react';
import Card from '~/modules/Card';
import { GetData } from '~/modules/ScrapeDanskeSpil';
import MultiplierCard from '~/modules/calc';

function Home() {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="px-5 w-full min-h-screen">
      <h1 className="pt-4 lg:text-6xl font-bold flex justify-center text-center">
        Velkommen til kongens nytårs tale 2025 
      </h1>
      <div className="block  lg:hidden mt-6">
        <MultiplierCard oddsNumber={Number(selectedValue)} />
      </div>

      <div className="flex flex-col lg:flex-row pt-5 gap-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 flex-1">
          {[...data]
            .sort((a, b) => Number(a.value) - Number(b.value))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                value={item.value}
                onClick={(val) => setSelectedValue(val)}
              />
            ))}
        </div>

        <div className="hidden lg:block lg:w-64 lg:sticky lg:top-24 ">
          <MultiplierCard oddsNumber={Number(selectedValue)} />
        </div>

      </div>
    </div>
  );
}

export default Home;
