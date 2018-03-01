import axios from 'axios'

const mtmt = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000/api',
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  login(code) {
    return mtmt
      .get(`/auth/facebook/callback?code=${code}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  getProfile(_id) {
    return mtmt
      .get(`/profile/${_id}`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  uploadPicture(id) {
    return mtmt
    console.log('oooo')
      .post(`/profile`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  }
}