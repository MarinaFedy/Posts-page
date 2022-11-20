import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Plagination = ({changePage, totalPages, page}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
    <div className='pages__wrapper' style={{}}>
        {
        pagesArray.map(p => 
            <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page__current" : "page"}
            >
            {p}
            </span>
            )
        }
  </div>
    )
}

export default Plagination;