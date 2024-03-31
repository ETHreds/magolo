import axios  from "axios";

const URL = 'http://localhost:3000'; 

const apiService = {
  getData() {
    return axios.get(`${URL}`);
  },
  getFeedback(){
     return axios.get(`${URL}/`)
  },
  postData(data) {
    return axios.post('/api/data', data);
  }
};

export default apiService;
