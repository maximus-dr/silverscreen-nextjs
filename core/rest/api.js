import axios from "axios";

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

export {
    get
}
