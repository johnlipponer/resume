import React from 'react';
import  resumephoto from "./res/johnl.jpeg";


function Contact(props) {
  return (
    <section className="text-center mb-2 semiTrans p-3 rounded">
      <div>
        <a href="https://www.youtube.com/watch?v=bTWw2-HbfYU"
          title="see John interviewed at Port Jeff">https://www.youtube.com/watch?v=bTWw2-HbfYU</a>
      </div>
      <div><a href="mailto:johnlipponer@yahoo.com">johnlipponer@yahoo.com</a></div>
    </section>
  )
}


function ProfileImg(props) {

  return (
    <img className="mx-auto d-md-block d-sm-none mb-3 img-fluid" src={resumephoto}
      alt="john sipping a pina colada in Montauk" />

  )

}


function Bio(props) {
  return (
    <section className="Bio">
      <p className="text-justify mb-3">
        I'm a Math teacher from Lake Grove, NY. Throughout my time in the
        classroom I have taught Algebra II, Geometry, Statistics, and AP
        Statistics. In the next few months, I plan to transition out of the
        teaching field to pursue a career in software development.
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bTWw2-HbfYU"
        title="YouTube video player" frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen></iframe>
    </p>
    </section>
  );
}

export {Bio, Contact, ProfileImg};
