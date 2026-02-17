import Route from "@ember/routing/route";
import { ajax } from "discourse/lib/ajax";
import { getOwner } from "@ember/application";

export default class TerminalRoute extends Route {
  beforeModel() {
    // require login
    if (!this.currentUser) {
      // open login modal + bounce somewhere sane
      const app = getOwner(this).lookup("controller:application");
      app.send("showLogin");

      // you can also keep them here; but generally transition away
      this.transitionTo("discovery.latest");
    }
  }

  async model() {
    // optional: load data for the page
    return ajax("/terminal.json");
  }
}
