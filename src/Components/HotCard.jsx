import React from "react";

export default function HotCard(props) {
  return (
    <div className="hot-card-container">
      <h1>Wednesday</h1>
      <div className="hot-picture">
        <img
          src="https://sm.ign.com/ign_hu/screenshot/default/wednesday-2-poszter-1-crop_mn9d.jpg"
          alt=""
        />
      </div>
      <div className="hot-description">
        <p>
          Follows Wednesday Addams&apos; years as a student, when she attempts
          to master her emerging psychic ability, thwart and solve the mystery
          that embroiled her parents.
        </p>
      </div>
      <div>
        <button>Add to toplist</button>
        <button>Add to tracklist</button>
        <button>Add to toplist</button>
      </div>
    </div>
  );
}
