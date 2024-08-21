import React, { useState } from "react";
import Login from "./Login.jsx";
import { useTracker } from "meteor/react-meteor-data";

import "../api/files";
import { addFile, FilesLib } from "../api/files";

export const App = () => {
  const [file, setFile] = useState(null);

  const { userId, files, isConnected } = useTracker(() => {
    const userId = Meteor.userId();
    const filesHandle = Meteor.subscribe("files.all");

    const files = FilesLib.files.find().each();
    const isConnected = Meteor.status().connected;
    return { userId, files, isConnected };
  });

  console.log(files);

  if (!isConnected) {
    return <div>Offline</div>;
  }

  return (
    <div>
      <div>
        {userId ? (
          <button
            type="button"
            onClick={() => {
              console.log("logout");
              Meteor.logout();
            }}
          >
            Logout
          </button>
        ) : (
          <Login />
        )}
      </div>
      <h2>Userid: {Meteor.userId() || "null"}</h2>
      <h2>SessionId: {Meteor.connection._lastSessionId}</h2>

      <input
        type="file"
        onChange={(event) => {
          setFile(event.target.files[0]);
        }}
      />
      <button
        type="button"
        onClick={() => {
          addFile(file);
        }}
      >
        Upload
      </button>

      <ul>
        {files.map((f) => {
          return (
            <li key={f._id}>
              <img src={f.link()} />
              {f.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
