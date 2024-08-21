import { FilesCollection } from "meteor/ostrio:files";
import { FilesLib } from "../imports/api/files";

Meteor.server.sessions.forEach((value, key) => {
  console.log("session", key, value.userId);
});

FilesLib.files = new FilesCollection({
  collectionName: "files",
  allowClientCode: false,
  debug: false,

  protected(fileObj) {
    console.log(this.userId);
    console.log("check file", fileObj.name);

    return !!this.userId;
  },
});
