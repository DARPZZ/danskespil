import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { GetMyBets } from '~/modules/ScrapeDanskeSpil';
import Card from '~/modules/Card';
function bets() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [nameValue,setNameValue] = useState("");

  async function GetMyData() {
    const navn = localStorage.getItem("Name");
    
    setData (await GetMyBets(navn));
  }
  useEffect(() => {
    const fetchData = async () => {
      const navn = localStorage.getItem("Name");
      const bets = await GetMyBets(navn);
      setData(bets);
    };
     const navn = localStorage.getItem("Name");
    if (navn != null)
    {
      fetchData();
    }

    
    
  }, []);

  async function storeNameInLocalStorage(value)
  {
    localStorage.removeItem("Name")
    localStorage.setItem("Name",value)
    await GetMyData()
  }
  
  return (
    <div>
      <button onClick={() => navigate("/")} className=' w-52 h-12 border rounded-xl ml-5 mt-5 '>Tilbage til alle odds</button>
      <div className='w-full h-full  pt-4 text-5xl lg:text-6xl font-bold flex flex-col justify-center text-center'>
      
      <h1>Mine bets</h1>
      <div className=''>
        <input
          type="text" 
          onChange={(e) => {
            const value = e.target.value;
            setNameValue(value);
          }}
          className="flex-1 p-2 w-72 h-11 rounded bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button onClick={() => storeNameInLocalStorage(nameValue)} className=' px-4 text-2xl cursor-pointer'>Indsend</button>
        <div className='  flex flex-col items-center'>

         
         <div className="grid grid-cols-1  md:grid-cols-3 pt-5 gap-3 ">
                  {[...data]
                    .map((item, index) => (
                      <Card
                        key={index}
                        title={item.navn_på_bet}
                        value={item.værdi}
                        pengePåBet={`${item.penge_på_bet} Kr.`}
                        muligGevinst={`${item.penge_på_bet * item.værdi} Kr.`}
                        
                      />
                    ))}
                </div>
        </div>
      </div>
     
    </div>
    </div>
    
  )
}

export default bets