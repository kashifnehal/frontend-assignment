import {
  SET_CURRENT_PAGE,
  SET_PROJECTS,
} from "../constants/kickStarterConstants";

const initialState = {
  projects: [],
  currentPage: 1,
};

const projectReducer = (state = initialState, action) => {
  console.log("--reducer project---", action);
  switch (action.type) {
    case SET_PROJECTS:
      return { ...state, projects: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
