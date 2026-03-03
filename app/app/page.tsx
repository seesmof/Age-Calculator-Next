"use client";

import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const calculateAge = () => {
    const [birthYear, birthMonth, birthDay] = date.split("-");
    const birth = new Date(date);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-CA");
    const [currentYear, currentMonth, currentDay] = formattedDate.split("-");

    let thisAge = Number.parseInt(currentYear) - Number.parseInt(birthYear);
    const monthDiff =
      Number.parseInt(currentMonth) - Number.parseInt(birthMonth);

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birth.getDate())
    )
      thisAge--;

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
