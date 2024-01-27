import React, { useEffect, useState } from "react";
import "./Revenue.css";

export default function Revenue() {
  const [revenue, setRevenue] = useState(0);
  const [clientsHelped, setClientsHelped] = useState(0);
  const [totalAdSpend, setTotalAdSpend] = useState(0);
  const [servicesOffered, setServicesOffered] = useState(0);

  useEffect(() => {
    const targetRevenue = 157659; // Specify your target revenue value here
    const targetClientsHelped = 7; // Specify your target clients helped value here
    const targetTotalAdSpend = 10; // Specify your target total AD spend value here
    const targetServicesOffered = 1; // Specify your target services offered value here

    let currentRevenue = 0;
    let currentClientsHelped = 0;
    let currentTotalAdSpend = 0;
    let currentServicesOffered = 0;

    const incrementValues = () => {
      const revenueIncrementValue = Math.ceil(targetRevenue / 100); // Adjust the increment value as desired
      const clientsHelpedIncrementValue = Math.ceil(targetClientsHelped / 100); // Adjust the increment value as desired
      const totalAdSpendIncrementValue = Math.ceil(targetTotalAdSpend / 100); // Adjust the increment value as desired
      const servicesOfferedIncrementValue = Math.ceil(targetServicesOffered / 100); // Adjust the increment value as desired

      currentRevenue += revenueIncrementValue;
      currentClientsHelped += clientsHelpedIncrementValue;
      currentTotalAdSpend += totalAdSpendIncrementValue;
      currentServicesOffered += servicesOfferedIncrementValue;

      if (currentRevenue >= targetRevenue) {
        currentRevenue = targetRevenue;
        clearInterval(interval);
      }

      if (currentClientsHelped >= targetClientsHelped) {
        currentClientsHelped = targetClientsHelped;
      }

      if (currentTotalAdSpend >= targetTotalAdSpend) {
        currentTotalAdSpend = targetTotalAdSpend;
      }

      if (currentServicesOffered >= targetServicesOffered) {
        currentServicesOffered = targetServicesOffered;
      }

      setRevenue(currentRevenue);
      setClientsHelped(currentClientsHelped);
      setTotalAdSpend(currentTotalAdSpend);
      setServicesOffered(currentServicesOffered);
    };

    const interval = setInterval(incrementValues, 50); // Adjust the interval duration as desired

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="Revenue" id="Revenue">
        <div className="Revenue-Text">
          <span id="Revenue-Text-1">Total Revenue Generated</span>
          <br />
          <span id="Revenue-Text-2">${revenue.toLocaleString()}</span>
        </div>
        <div className="Revenue-Card">
          <div className="Card">
            <span id="Card-Text-1">{clientsHelped}</span>
            <span id="Card-Text-2">Clients Helped</span>
          </div>
          <div className="Card">
            <span id="Card-Text-1">${totalAdSpend}K</span>
            <span id="Card-Text-2">Total AD Spend</span>
          </div>
          <div className="Card">
            <span id="Card-Text-1">{servicesOffered}</span>
            <span id="Card-Text-2">Services Offered</span>
          </div>
        </div>
      </div>
    </div>
  );
}