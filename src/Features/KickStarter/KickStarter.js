import React, { useEffect } from "react";
import DynamicTable from "../../Components/DynamicTable/DynamicTable";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setProjects,
} from "../../State/actions/kickStarterActions";
import { getLocalStorageItem } from "./utils";
import { KICKSTARTER_CURRENT_PAGE } from "./constant";
import "./KickStarter.css";

const KickStarter = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.kickStarter.projects || []);
  const currentPage = useSelector((state) => state.kickStarter.currentPage);

  const columns = ["S.No.", "Percentage funded", "Amount pledged"];

  // TODO: can be added in a middleware
  const getProjectData = async () => {
    const projectData = await fetch(
      "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
    );
    const data = await projectData.json();
    dispatch(setProjects(data));
  };

  const formattedData = projectData.map((item, index) => ({
    "S.No.": index + 1,
    "Percentage funded": item["percentage.funded"],
    "Amount pledged": item["amt.pledged"],
  }));

  useEffect(() => {
    if (!projectData || projectData.length === 0) {
      getProjectData();
    }

    //Maintain page index on refresh
    const pageInStorage = +getLocalStorageItem(KICKSTARTER_CURRENT_PAGE); //converting to integer
    if (pageInStorage && currentPage !== pageInStorage) {
      dispatch(setCurrentPage(pageInStorage));
    }
  }, [projectData.length]);

  return (
    <div className="kickstarter-container">
      <h1
        className="kickstarter-heading"
        aria-label="KickStarter Ratings Overview"
      >
        KickStarter Ratings
      </h1>
      {formattedData.length ? (
        <DynamicTable columns={columns} data={formattedData} />
      ) : (
        <p className="loading">Loading...</p>
      )}
      <div className="kickstarter-features">
        <h4>Features..</h4>
        <p>* Page Index retention on Refresh</p>
        <p>* Data storage with redux</p>
        <p>* Disable/Remove button at extremes</p>
        <p>* Clean User Interface</p>
        <p>* Provides Accessibility </p>
      </div>
    </div>
  );
};

export default KickStarter;
