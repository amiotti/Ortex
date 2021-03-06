import React, { useState, useEffect } from "react";

function Data() {
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const ws = new WebSocket(
    "wss://stream.tradingeconomics.com/?client=guest:guest"
  );
  const subscription = { topic: "subscribe", to: "EURUSD:CUR" };

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.tradingeconomics.com/?client=guest:guest"
    );

    ws.onopen = () => {
      console.log("Connection Established!");
      ws.send(JSON.stringify(subscription));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.topic === "EURUSD") {
        setPrice(response.price.toFixed(4));
        let today = new Date(response.dt * 1);
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        let date = today.toLocaleDateString("en-EN", options);
        setDate(date);
      }
      //ws.close();
    };
    ws.onclose = () => {
      console.log("Connection Closed!");
      //initWebsocket();
    };

    ws.onerror = () => {
      console.log("WS Error");
    };

    return () => {
      ws.close();
    };
  }, []);
  return (
    <div>
      Price : {price} EUR/USD - Last Update: {date}
    </div>
  );
}

export default Data;
