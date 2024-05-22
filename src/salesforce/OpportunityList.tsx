import React, { useState, useEffect } from 'react';
import { fetchOpportunities } from './salesforceService';

interface Opportunity {
  Name: string;
  Amount: number;
  LastActivityDate: string;
}

const OpportunityList: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedOpportunities = await fetchOpportunities();
      setOpportunities(fetchedOpportunities);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Opportunities</h2>
      <ul>
        {opportunities.map((opportunity, index) => (
          <li key={index}>
            <h3>{opportunity.Name}</h3>
            <p>Amount: {opportunity.Amount}</p>
            <p>Last Activity Date: {opportunity.LastActivityDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpportunityList;