
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'xtayjuwp',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true, 
  token:'skpkFGe23SJJAicKdAwXS6nU169beuHt6qxAJK7cRvC3fmCRgbBdNx6gV0jl9JKiruzQeo3A8ZGs0Zj8ZuwWIssZH9xcYNtDlxPfNZ0AEzHL3iNt6rTNuWuL1tVM0Ts4kvIso3Ro0dm4G7WCumTO2dd67UC4grODvR1fueP2HQPymlmNAS85',
  
  ignoreBrowserTokenWarning: true
});

export const getUserByUsername = async (username) => {
  try {
    const query = `*[_type == 'user' && username == $username][0]`;
    const params = { username };
    const user = await client.fetch(query, params);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};

export default client;



