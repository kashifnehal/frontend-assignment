import React, { useEffect } from "react";
import DynamicTable from "../../Components/DynamicTable/DynamicTable";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setProjects,
} from "../../State/actions/kickStarterActions";
import { getLocalStorageItem } from "./utils";
import { KICKSTARTER_CURRENT_PAGE } from "./constant";

const KickStarter = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.kickStarter.projects || []);
  const currentPage = useSelector((state) => state.kickStarter.currentPage);

  const columns = ["S.No.", "Percentage funded", "Amount pledged"];

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
  }, []);

  return (
    <div>
      <h1>Dynamic React Table</h1>
      {formattedData && formattedData.length > 0 ? (
        <DynamicTable columns={columns} data={formattedData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default KickStarter;
