import axios from "axios";
// P A R T Y L I S T

export const PROJECT_START = "PROJECT_START";
export const PROJECT_SUCCESS = "PROJECT_SUCCESS";
export const PROJECT_FAILURE = "PROJECT_FAILURE";

export const getPROJECT = () => dispatch => {
  dispatch({ type: PROJECT_START });

  return axios
    .get(`http://localhost:4000/api/actions/`)
    .then(res => {
      console.log(res.data.PROJECT);
      dispatch({ type: PROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: PROJECT_FAILURE, payload: err.reponse });
    });
};
