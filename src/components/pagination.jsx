import React from "react";

function Pagination(props) {
  // console.log(props.filterdDishes);
  let numberOfPages = [];
  for(let i=1;i<=Math.ceil(props.filterdDishes.length/props.itemsPerPage);i++){
    numberOfPages.push(i)
    }
    // console.log(numberOfPages);

function showNextDishes(event){
  let currentPag = event.target.id; 
props.setCurrentPage(currentPag); 
}

    let pages = numberOfPages.map((pageNumber)=>{
  return(
    <li id={pageNumber} onClick={showNextDishes}>{pageNumber} </li>
    )
})

  return (
    <section>
   <ul className="pagination flex">
    {pages}
   </ul>
   </section>
);
}

export default Pagination;
