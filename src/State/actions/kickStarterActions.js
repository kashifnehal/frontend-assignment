import { setLocalStorageItem } from "../../Features/KickStarter/utils";
import { KICKSTARTER_CURRENT_PAGE } from "../../Features/KickStarter/constant";
import {
  SET_PROJECTS,
  SET_CURRENT_PAGE,
} from "../constants/kickStarterConstants";

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});

export const setCurrentPage = (page) => {
  setLocalStorageItem(KICKSTARTER_CURRENT_PAGE, page);
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};
