"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const calculateAge = () => {
    const [birthYear, birthMonth, birthDay] = date.split("-");

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-CA");
    const [currentYear, currentMonth, currentDay] = formattedDate.split("-");

    const thisAge = Number.parseInt(currentYear) - Number.parseInt(birthYear);
    setAge(thisAge.toString());
  };

  return (
    <div className="bg-sky-50 min-h-screen p-3 flex items-center justify-center">
      <div className="bg-white p-3 rounded-md border border-sky-300 flex flex-col gap-3">
        <input
          type="date"
          name="dataInput"
          id="dataInput"
          className="input"
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="btn w-full" onClick={calculateAge}>
          Calculate
        </button>
        <input
          type="text"
          className="input"
          value={age}
          readOnly
          onClick={() => navigator.clipboard.writeText(age)}
        />
      </div>
    </div>
  );
}
