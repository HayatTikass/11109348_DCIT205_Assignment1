import React from "react";
import { tableData } from "../data";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-black lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdButton: `inline-block px-6 py-2.5 border rounded-md border-primary text-black hover:bg-primary hover:text-black font-medium`,
};

const Table = () => {
  return (
    <section className="flex items-center justify-center bg-white dark:bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full">
            <div className="max-w-full overflow-x-auto">
              <table className="mx-auto w-full table-auto">
                <thead className="text-center border">
                  <tr>
                    <th className={TdStyle.ThStyle}> Code</th>
                    <th className={TdStyle.ThStyle}> Course Title </th>
                    <th className={TdStyle.ThStyle}> Credit </th>
                    <th className={TdStyle.ThStyle}> Grade </th>
                    <th className={TdStyle.ThStyle}> Gpt </th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2
                        }
                      >
                        {row.code}
                      </td>
                      <td
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle2
                        }
                      >
                        {row.title}
                      </td>
                      <td
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2
                        }
                      >
                        {row.credit}
                      </td>
                      <td
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle2 : TdStyle.TdStyle2
                        }
                      >
                        {row.grade}
                      </td>
                      <td
                        className={
                          index % 2 === 0 ? TdStyle.TdStyle : TdStyle.TdStyle2
                        }
                      >
                        {row.gpt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
