import axios from "axios";

const mtmt = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "/api"
            : "http://localhost:3000/api"
});

const spotify = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "/spotify"
            : "http://localhost:3000/spotify"
});

const tmdb = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "/tmdb"
            : "http://localhost:3000/tmdb"
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

    uploadPicture(obj) {
        const formData = new FormData();
        Object.keys(obj).forEach(key => formData.append(key, obj[key]));
        return mtmt
            .post(`/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                const { data } = res;
                localStorage.setItem("id", obj._id);
                axios.defaults.headers.common["Authorization"] =
                    "Bearer " + data.token;
                return data;
            })
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    setLookingFor(datas) {
        console.log(datas);
        return mtmt
            .post(`/lookingfor`, datas)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    getMusic(query) {
        return spotify
            .get(`/artist/${query}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    sendArtist(datas) {
        return mtmt
            .post(`/quizzmusic`, datas)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    getMovie(query) {
        return tmdb
            .get(`/movie/${query}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    sendMovie(datas) {
        return mtmt
            .post(`/quizzmovie`, datas)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    sendTraits(datas) {
        return mtmt
            .post(`/sendtraits`, datas)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    sendTreshold(datas) {
        return mtmt
            .post(`sendtreshold`, datas)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    getProfile(id) {
        return mtmt
            .get(`/getprofile/${id}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    getMatches(id) {
        return mtmt
            .get(`/getmatches/${id}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    getQuizz(id) {
        return mtmt
            .get(`/getquizz/${id}`)
            .then(res => res.data)
            .catch(err => {
                console.error(err);
                throw err;
            });
    },

    postQuizz(datas) {
      console.log('api:', datas)
      return mtmt
        .post(`/postquizz/`, datas)
        .then(res => res.data)
        .catch(err => {
          console.error(err);
          throw err;
        });
    }
 
};
