import axios from "axios";



const checkStateApi = () => {}


const get = (address, headers, callback, fail) => {
    try {
        axios
            .get(address, headers)
            .then(callback)
            .catch((error) => {
                if (error.response && error.response.status) {
                    checkStateApi(error.response.status);
                }
                if (fail) {
                    fail(error);
                }
            });
    } catch (e) {
      fail(e);
    }
};


const post = (adress, data, headers, callback, fail) => {
    try {
        axios
            .post(adress, data, headers)
            .then(callback)
            .catch((err) => {
                if (fail) {
                    fail(err);
                } else {
                    throw new Error(err);
                }
            });
    } catch (err) {
        fail(err);
    }
}


export {
    get,
    post
}
