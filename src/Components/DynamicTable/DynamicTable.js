import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../State/actions/kickStarterActions";

const DynamicTable = ({ columns, data }) => {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.kickStarter.currentPage);
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    const topRow = (currentPage - 1) * 5;
    const updatedTableData = data.slice(topRow, topRow + 5);
    setTableData(updatedTableData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <div>
        {/* Using Basic HTML table, as we don't have complex requirements like sorting, filter or debounce. Only have pagination. 
      We can use React-table , MUI table etc for complex requirement */}

        <table border="1" cellPadding="10">
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
      </div>
      <Pagination
        currentPageNumber={currentPage}
        updateCurrentPage={(page) => dispatch(setCurrentPage(page))}
      />
    </>
  );
};

export default DynamicTable;
