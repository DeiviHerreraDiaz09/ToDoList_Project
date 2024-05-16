import { useEffect } from "react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = currentTime.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="header">
      <div className="card">
        <h3>TodoApp</h3>
        <div className="hours">
          <h1>{formattedTime}</h1>
        </div>
        <h5>{formattedDate}</h5>
      </div>
    </div>
  );
};

export default Header;
