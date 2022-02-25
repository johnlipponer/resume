import React from 'react';
import awardsData from "./data/awards.json";

function Awards(props) {

  let awards = awardsData.map(Award);

  return (
    <section className="Awards mt-3">
      <h5>Favorite Destinations</h5>
      <ul>
        {awards}
      </ul>
    </section>
  );
}


function Award(award, i) {

  return (
    <li key={i}>
      <b>{award.title}</b>, <i>{award.year}</i>
      <p className="text-muted">
        {award["desc"]}
      </p>
    </li>
  )
}

export default Awards;
