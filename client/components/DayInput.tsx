import { monthsToQuarters } from "date-fns";
import { useState } from "react";

interface Props {
  year: number;
  month: number;
  setMonth : (month:number)=>void;
  setYear : (year:number)=>void;
}

const DayInput = ({ year, month, setMonth, setYear }: Props) => {
  const [inputMode, setInputMode] = useState(false);

  const handleClick = () => {
    setInputMode(true);
  };

  const handleYearChange = (e:any) => {
    setYear(e.target.value);
  }

  const handleMonthChange = (e:any) => {
    setMonth(e.target.value);
  }

  const handlePressEnter = (e:any) => {
    if(e.keyCode === 13){
        setInputMode(false);
    }
  }

  return (
    <>
      {!inputMode ? (
        <div
          className="font-SCDream5 text-textGray text-base w-1/2 lg:w-1/4 h-fit flex flex-row justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          {year}.{month}
        </div>
      ) : (
        <div className="font-SCDream5 text-textGray text-base w-1/2 lg:w-1/4 h-fit flex flex-row justify-center items-center"
            onKeyDown={handlePressEnter}
        >
          <input
            type="text"
            className="outline-none text-center font-SCDream5 text-textGray/70 text-base w-1/4 h-fit justify-center items-center"
            defaultValue={year}
            onChange={handleYearChange}
          />
          .
          <input
            type="text"
            className="outline-none text-center font-SCDream5 text-textGray/70 text-base w-1/6 h-fit justify-center items-center"
            defaultValue={month}
            onChange={handleMonthChange}
          />
        </div>
      )}
    </>
  );
};

export default DayInput;