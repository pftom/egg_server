// app/controller/events.js
module.exports = app => {
  class EventsController extends app.Controller {
    * getEvents() {
      // get the query params headline & active
      const { headline, active, page } = this.ctx.query;
      // if need carousel, do this work flow
      if (headline) {
        // do something
      }

      // if need sign-in, do this work flow
      if (active) {
        // do something
      }

      // if need get n page, do this work flow
      if (page) {
        // do something
      }
      this.ctx.body = `
        headline: ${headline},
        active: ${active},
        page: ${page},
      `;
    }

    * getSingleEvent() {
      // get the query id for event
      const eventId = this.ctx.params.id;
      this.ctx.body = `user: ${eventId}`;
    }
  }
  return EventsController;
};