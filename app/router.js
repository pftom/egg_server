// app/router.js
module.exports = app => {
  // user login
  app.post('/users/login/', app.controller.users.login);
  // user register
  app.post('/users/register/', app.controller.users.register);
  // user get profile
  app.get('/users/profile/', app.controller.users.getProfile);
  // user update profile
  app.put('/users/profile/', app.controller.users.updateProfile);
  /*
   * get all the news under home
   * can use ? page=n to get the n page.
   * 
   */ 
  app.get('/home/news/', app.controller.news.getNews);
  // get single news 
  app.get('/home/news/:id/', app.controller.news.getSingleNews);
  /*
   * get all the events under home
   * can use ? page=n to get the n page.
   * ?headline=true get all needed carousel events
   * ?active=true get all needed sign-in events
   */ 
  app.get('/home/events/', app.controller.events.getEvents);
  // get single events 
  app.get('/home/events/:id/', app.controller.events.getSingleEvent);
};