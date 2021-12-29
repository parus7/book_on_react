import React from "react";

const Book = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  );

  // console.dir(props)

  // return React.createElement('div', {}, [
  //   React.createElement('h2', {}, props.name),
  //   React.createElement('p', {}, props.year),
  //   React.createElement('p', {}, props.price),
  // ])
};

export { Book };
