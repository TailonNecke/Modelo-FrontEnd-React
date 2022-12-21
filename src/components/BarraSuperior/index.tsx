import React, { useEffect, useState } from "react";
import { Barra, Logo } from "./styles";

const BarraSuperior: React.FC = () => {
  function Clock() {
    const [date, setDate] = useState(new Date());
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

    return (
      <>
        <p className="date">{date.toLocaleDateString()}</p>
        <p className="hour">{date.toLocaleTimeString()}</p>
      </>
    );
  }
  return (
    <Barra>
      <Logo></Logo>
      <div className="dateHour">
        <Clock></Clock>
      </div>
    </Barra>
  );
};

export default BarraSuperior;
