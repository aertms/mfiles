import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import "./files";

Meteor.startup(async () => {
  if (!Accounts.findUserByUsername("test")) {
    Accounts.createUser({
      username: "test",
      password: "test",
    });
  }
});
