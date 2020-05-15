import { callApi } from '../helpers/apiHelper';

export async function getFighters() {
  try {
    const endpoint = 'fighters.json';
    const apiResult = await callApi(endpoint, 'GET');
    
    return apiResult;
  } catch (error) {
    throw error;
  }
}

export async function getFighterDetails(id) {
  const result = await callApi('details/fighter/' + id + '.json');
  return result;
}

