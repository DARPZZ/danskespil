import { useState } from "react";
type  MultiplierCardType = {
  oddsNumber:number
}
export default function MultiplierCard({oddsNumber}:MultiplierCardType) {
  const [userNumber, setUserNumber] = useState<number | "">("");


  const result = userNumber === "" ? "" : oddsNumber * userNumber;


  return (
    <div className="w-56 bg-neutral-900 sticky top-10 rounded-xl shadow-lg p-4 text-white h-72  mt-10">
      <h2 className="text-lg font-bold mb-3 text-center">Multiplier</h2>

      <div className="flex items-center justify-between mb-3">

        <span className="text-base font-semibold bg-neutral-800 p-2 rounded w-16 text-center">
          {oddsNumber}
        </span>

        <span className="text-base font-bold mx-2">×</span>
        <input
          type="number"
          value={userNumber}
          onChange={(e) => {
            const value = e.target.value;
            setUserNumber(value === "" ? "" : Number(value));
          }}
          className="flex-1 p-2 w-32 rounded bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

      </div>

      <div className="mt-3 p-3 bg-purple-700 rounded text-center text-xl font-bold">
        <h1>
          Gevinst:
        </h1>
        <h1>
          {Number(result).toFixed(0)} KR.
        </h1> 
      </div>

      <div className="flex flex-col h-24 justify-end items-center">
        <h1 className="text-xl font-bold">Lavet af Rasmus</h1>
      </div>
    </div>
  );
}
