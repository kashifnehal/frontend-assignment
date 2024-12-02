import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../State/actions/kickStarterActions";
import "./DynamicTable.css";

const DynamicTable = ({ columns, data, recordsPerPage = 10 }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.kickStarter.currentPage);
  const [tableData, setTableData] = useState([]);
  const lastPage = Math.ceil(data.length / recordsPerPage);

  useEffect(() => {
    const topRow = (currentPage - 1) * recordsPerPage;
    setTableData(data.slice(topRow, topRow + recordsPerPage));
  }, [currentPage, data, recordsPerPage]);

  return (
    <div className="dynamic-table-container">
      {/* Using Basic HTML table, as we don't have complex requirements like sorting, filter or debounce. Only have pagination. 
      We can use React-table , MUI table etc for complex requirement */}

      <table className="dynamic-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPage}
        updateCurrentPage={(page) => dispatch(setCurrentPage(page))}
        lastPage={lastPage}
      />
    </div>
  );
};

export default DynamicTable;
