import React, { useEffect, useState } from 'react';
import {OpportunityService} from './OpportunityService';

interface Opportunity {
  Id: string;
  Name: string;
  CloseDate: Date;
  StageName: string;
  // add other fields as needed
}

const OpportunityList: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const opportunitiesService = OpportunityService.getInstance();
      const data = await opportunitiesService.fetchOpportunities();
      setOpportunities(data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {opportunities.map((opportunity) => (
        <li key={opportunity.Id}>
          {opportunity.Name} - {opportunity.CloseDate.toISOString()} - {opportunity.StageName}
        </li>
      ))}
    </ul>
  );
};

export default OpportunityList;