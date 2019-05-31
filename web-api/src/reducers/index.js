import { PROJECT_START, PROJECT_SUCCESS, PROJECT_FAILURE} from "../actions";
import { bindActionCreators } from "redux";


const initialState = {
  projects: [],
  fetchingProjects: false
}


const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
  case PROJECT_START:
  return {
    ...state,
    fetchingProjects: false,
  }
  case PROJECT_SUCCESS: 
  return {
    ...state,

  }
  }

}


export default reducer;