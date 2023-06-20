import axios from 'axios';
import { IRocket } from './types';

const httpCLient = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  timeout: 1000,
});

httpCLient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpCLient;

class Api_instance {
  private rockets: string;

  constructor() {
    this.rockets = '/rockets';
  }

  public async getRockets(): Promise<IRocket[]> {
    const rockets: IRocket[] = await httpCLient.get(this.rockets);
    return rockets;
  }
}

export const API = new Api_instance();
