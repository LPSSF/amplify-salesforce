import jsforce, { Connection, StandardSchema } from 'jsforce';

export async function fetchOpportunities(): Promise<any[]> {
  const conn = new Connection<StandardSchema>();
  await conn.login("oscar.m.liu.partner@lpstech.com", "P@55w0rd112233HK");

  const recs = await conn.sobject('Opportunity').find({
    CloseDate: { $lte: jsforce.Date.YESTERDAY },
    IsClosed: true
  });

  return recs;
}

