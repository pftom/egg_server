// app/controller/news.js
module.exports = app => {
  class NewsController extends app.Controller {
    * getNews() {
      // get the query page
      const { page } = this.ctx.query;

      // if need get n page news, do this workflow
      if (page) {
        // do something
      }

      this.ctx.body = `user: ${this.ctx.request.body}`;
    }

    * getSingleNews() {
      // get the id params
      const newsId = this.ctx.params.id;
      this.ctx.body = `user: ${this.ctx.request.body}`;
    }
  }
  return NewsController;
};