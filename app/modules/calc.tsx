import { useState } from "react";
type  MultiplierCardType = {
  oddsNumber:number
}
export default function MultiplierCard({oddsNumber}:MultiplierCardType) {
  const [userNumber, setUserNumber] = useState<number>(0);

  const result = oddsNumber * userNumber;

  return (
    <div className="w-56 bg-neutral-900 rounded-xl shadow-lg p-4 text-white mx-auto mt-10">
      <h2 className="text-lg font-bold mb-3 text-center">Multiplier</h2>

      <div className="flex items-center justify-between mb-3">

        <span className="text-base font-semibold bg-neutral-800 p-2 rounded w-16 text-center">
          {oddsNumber}
        </span>

        <span className="text-base font-bold mx-2">×</span>
        <input
          type="number"
          value={userNumber}
          onChange={(e) => setUserNumber(Number(e.target.value))}
          placeholder="0"
          className="flex-1 p-2 w-32  rounded bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="mt-3 p-3 bg-purple-700 rounded text-center text-xl font-bold">
        Gevinst: {result} KR.
      </div>
    </div>
  );
}
