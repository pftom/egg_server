// app/controller/events.js
module.exports = app => {
  class EventsController extends app.Controller {
    * getEvents() {
      // get the context of this controller for convenient
      const { ctx } = this;
      // get the query params headline & active
      const { headline, active, page } = ctx.query;
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

      ctx.body = `
        headline: ${headline},
        active: ${active},
        page: ${page},
      `;
    }

    * getSingleEvent() {
      // get the context of this controller for convenient
      const { ctx } = this;
      // get the query id for event
      const eventId = ctx.params.id;
      this.ctx.body = `user: ${eventId}`;
    }
  }
  return EventsController;
};