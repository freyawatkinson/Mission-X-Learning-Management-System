import React, { useState } from "react";
import "./SideBar.css";

function StudentLibSideBar() {
  const [checkbox] = useState([
    { title: "Subscription", itemTypes: ["Free", "Premium"], id: 1 },
    {
      title: "Activity Type",
      itemTypes: ["Animation", "Game", "Chatbot", "Augmented Reality"],
      id: 2,
    },
    { title: "Year Level", itemTypes: ["1-4", "5-6", "7-8", "9-13"], id: 3 },
    {
      title: "Subject Matter",
      itemTypes: [
        "Computer Science",
        "Maths",
        "Science",
        "Language",
        "Art",
        "Music",
      ],
      id: 4,
    },
  ]);

  return (
    <div>
      {checkbox.map((checkbox) => (
        <div className="StudentLibrarySideBar">
          <h1 className="Checkbox-heads">{checkbox.title}</h1>
          {checkbox.itemTypes.map((item) => (
            <div>
              <input type="checkbox" className="CheckBox" />
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default StudentLibSideBar;
