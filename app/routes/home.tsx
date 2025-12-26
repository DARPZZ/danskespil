import React, { useEffect, useState } from 'react'
import Card from '~/modules/Card';
import { GetData } from '~/modules/ScrapeDanskeSpil';
import MultiplierCard from '~/modules/calc';
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen">
      <h1 className="pt-4 text-6xl font-bold flex justify-center">
        Velkommen til kongens nytårs tale
      </h1>

      <div className="flex flex-col sm:flex-row pt-5 relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
          {[...data]
            .sort((a, b) => Number(a.value) - Number(b.value))
            .map((item, index) => (
              <Card key={index} title={item.title} value={item.value} />
            ))}
        </div>

        {/* Calculator */}
        <div className=" sticky top-0 ml-4 h-screen">
          <MultiplierCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
