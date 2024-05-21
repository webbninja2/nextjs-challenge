import { useEffect, useState } from "react";

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState({ date: "", time: "" });

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString("en-GB", { hour12: true });
      const formattedDate = date
        .toLocaleDateString("en-GB")
        .replace(/\//g, "-");
      setDateTime({ date: formattedDate, time: formattedTime });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {dateTime.date} : {dateTime.time}
    </span>
  );
};

export default CurrentDateTime;
