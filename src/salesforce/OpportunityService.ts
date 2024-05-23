import axios from 'axios';

const SF_API_VERSION = 'v60.0';
const SF_BASE_URL = `https://pccwsolutions7-dev-ed.develop.my.salesforce.com/services/data/${SF_API_VERSION}`;
const SF_ACCESS_TOKEN = '00D2w00000QsZ7c!AQMAQEw1cM8PPHlynAzWhq7v50YUGjOHa.j.ky_ICvOk8ZcLfALlQ0o2SaCgqS6iSWB1.QCM2LpGlzI4dOi0IJrwOVqiu0qy';

export class OpportunityService {
  private static instance = new OpportunityService();

  private constructor() {}

  public static getInstance(): OpportunityService {
    return OpportunityService.instance;
  }

  public async fetchOpportunities(): Promise<any[]> {
    const response = await axios.get(`${SF_BASE_URL}/query?q=SELECT+Name,CloseDate,StageName+FROM+Opportunity+LIMIT+5`, {
      headers: {
        Authorization: `Bearer ${SF_ACCESS_TOKEN}`,
      },
    });

    return response.data.records;
  }
}