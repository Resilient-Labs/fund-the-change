
const stripe = require('stripe')('sk_test_51Ha6EUEsCFPlCMG1zxzWoFCMCkMdTEEnxmtsY54cDJ1ZCMebV8NwxX9V9IFrDojB0nhtXTdhk1EVVD1KDiUUPi9g00gVqMcbFl'); // Add your Secret Key Here
const cors = require("cors");

module.exports = function (app, passport, db, ObjectId) {

  const fs = require('fs')

  app.use(cors());

  //User Org Search
  app.post("/search", (req, res) => {
    let search = req.body.search;
    if (search) {
      //search collection using mongodb text indexes
      db.collection("organizations")
        .find({ $text: { $search: search } })
        .toArray((err, result) => {
          if (err) return console.log(err);
          res.send({organizations: result});
        });
    }
  });

  //Organization Route - Returns all approved Organizations
  app.get("/organizations", (req, res) => {
    db.collection("organizations")
      .find()
      .toArray((err, result) => {
        if (err) return console.log(err);
        res.send({ result: result });
      })
    });

// process the login form
app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash profile
    }));

  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/profile", // redirect to the secure profile section
      failureRedirect: "/signup", // redirect back to the signup page if there is an error
      failureFlash: true, // allow flash messages
    })
  );


    app.post("/stripe/charge/", cors(), async (req, res,) => {
      // console.log("stripe-routes.js 9 | route reached", req.body);
      let { amount,customer,id } = req.body;
  // console.log("hello I am db",db);
      console.log("hell amout",amount);
        console.log("hello I am organizations id on the route",req.body.organizationId);

      db.collection('donation').save({
        // setting property for a specific users
        organizationId: ObjectId(req.body.organizationId),
        amount: amount,
        customer:customer
      }),

      console.log("hell amout",amount);

      // console.log("stripe-routes.js 10 | amount and id", amount, id);
      try {
        const payment = await stripe.paymentIntents.create({
          amount: amount,
          currency: "USD",
          description: customer,
          payment_method: id,
          confirm: true,
        });
        console.log("stripe-routes.js 19 | payment", payment);
        res.json({
          message: "Payment Successful",
          success: true,
        });
      } catch (error) {
        console.log("stripe-routes.js 17 | error", error);
        res.json({
          message: "Payment Failed",
          success: false,
        });
      }
    });


  app.get("/users", (req, res) => {
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
    //To fill in later
  });

  app.get("/donationAmount",(req, res) => {
    // console.log("hello I am donationAmount",req.session.passport.user.email);
    db.collection("donation")
      .find({})
      .toArray((err, result) => {
        if (err) return console.log(err);
        res.send({ result: result });
      });
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

};
