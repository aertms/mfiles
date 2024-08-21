import { FilesCollection } from "meteor/ostrio:files";

const FilesLib = {};

if (Meteor.isClient) {
  FilesLib.files = new FilesCollection({
    collectionName: "files",
    allowClientCode: false,
  });
}

function addFile(file) {
  FilesLib.files.insert({ file });
}

export { FilesLib, addFile };

if (Meteor.isServer) {
  Meteor.publish("files.all", function () {
    return FilesLib.files.collection.find();
  });
}
