import axios from 'axios'

const mtmt = axios.create({
  baseURL: process.env.API_MAIN_URL || 'http://localhost:3000/api',
});

const spotify = axios.create({
  baseURL: process.env.API_SPOTIFY_URL || 'http://localhost:3000/spotify',
});

const tmdb = axios.create({ 
  baseURL: 'http://localhost:3000/tmdb',
})

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

  uploadPicture(obj) {
    const formData = new FormData();
    Object.keys(obj).forEach(key => formData.append(key, obj[key]));
    return mtmt
      .post(`/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  setLookingFor(datas) {
    return mtmt
      .post(`/lookingfor`, datas)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  getMusic(query) {
    return spotify
      .get(`/artist/${query}`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  sendArtist(datas) {
    return mtmt
      .post(`/quizzmusic`, datas)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  getMovie(query) {
    return tmdb
      .get(`/movie/${query}`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },


  sendMovie(datas) {
    console.log(datas)
    return mtmt
      .post(`/quizzmovie`, datas)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  },

  sendTraits(datas) {
    console.log(datas)
    return mtmt
      .post(`/sendtraits`, datas)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw err
      })
  }

}