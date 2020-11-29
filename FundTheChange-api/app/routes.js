module.exports = function (app, passport, db, ObjectId) {
  app.get("/userJournals", (req, res) => {
    let uId = ObjectId(req.session.passport.user);
    console.log(uId);

    db.collection("journal")
      .find({ user: uId })
      .toArray((err, result) => {
        if (err) return console.log(err);

        console.log(result);
        res.send({ result: result });
      });
  });

  //User Org Search
  app.post("/search", (req, res) => {
    let search = req.body.search;
    if (search) {
      //search collection using mongodb text indexes
      db.collection("organizations")
        .find({ $text: { $search: search } })
        .toArray((err, result) => {
          if (err) return console.log(err);
          res.send({
            organizations: result,
          });
        });
    }
  });

  // process the login form
  app.post("/login", passport.authenticate("local-login"), (req, res) => {
    res.redirect("/profile");
  });

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/profile", // redirect to the secure profile section
      failureRedirect: "/signup", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );

  app.get("/organizations", (req, res) => {
    db.collection("organizations")
      .find()
      .toArray((err, result) => {
        if (err) return console.log(err);

        res.send({ result: result });
      });
  });

  app.get("/users", isLoggedIn, (req, res) => {
    const uId = ObjectId(req.session.passport.user);
    db.collection("users")
      .find({ _id: uId })
      .toArray((err, result) => {
        if (err) return console.log(err);
        console.log(result, "THIS IS FROM USERS ROUTE");
        res.send({ result: result });
      });
  });

  app.get("/favorites", isLoggedIn, (req, res) => {
    //usersProfile.favorites.forEach({
    //  mongoQuery.organizations.find(IDS===IDS){
    //
    // }
    //}
    //})
  });

  // route middleware to ensure user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    //If not loggedin then you are returning a '404'
    res.sendStatus(401);
  }

  // LOGOUT ==============================
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // post method to store mood journal entry document to mongodb
  app.post("/saveJournalEntry", (req, res, next) => {
    let uId = ObjectId(req.session.passport.user);
    console.log(uId);
    db.collection("journal").save(
      { journal: req.body.journalEntry, mood: req.body.mood, user: uId },
      (err, result) => {
        if (err) return console.log(err);
        res.send({ success: "success" });
      }
    );
  });
};
