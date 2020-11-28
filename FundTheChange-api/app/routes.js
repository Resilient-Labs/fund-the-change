const stripe = require('stripe')('sk_test_51Ha6EUEsCFPlCMG1zxzWoFCMCkMdTEEnxmtsY54cDJ1ZCMebV8NwxX9V9IFrDojB0nhtXTdhk1EVVD1KDiUUPi9g00gVqMcbFl'); // Add your Secret Key Here
const cors = require("cors");

module.exports = function (app, passport, db, ObjectId) {

  const fs = require('fs')

  app.use(cors());



// is loogedd in funciton to check who's logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: "/generalOrgs", // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: "/generalOrgs", // redirect to the secure profile section
    failureRedirect: "/signup", // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  app.post("/stripe/charge/", cors(), async (req, res,) => {
    // console.log("stripe-routes.js 9 | route reached", req.body);
    let { amount,customer,id } = req.body;
// console.log("hello I am db",db);
    console.log("hell amout",amount);
      console.log("hello I am organizations id on the route",req.body.organizationId);

    db.collection('donation').save({
      // setting property for a specific users

      // user: req.user,

      organizationId: ObjectId(req.body.organizationId),
      amount: amount,
      customer:customer
    }),




        // db.collection('organizations').save({
        //   // setting property for a specific users
        //
        //   // user: req.user,
        //   // userId: ObjectId(req.session.passport.email),
        //
        //   // organizationId: ObjectId(req.body.organizationId),
        //   amount: amount,
        //   userId: ObjectId(req.body.userId),
        //
        //   organizationId: ObjectId(req.body.organizationId),
        //   customer:customer
        // }),

        // db.organizations.updateOne(
        //    {   _id: ObjectId("5fbabe871edac7fe934acfd6") },
        //    {
        //      $set: { "size.uom": "cm", status: "P" },
        //      $currentDate: { lastModified: true }
        //    }
        // )

      //   db.collection('organizations').update({
      //     _id: ObjectId("5fbabe871edac7fe934acfd6")
      // }, {
      //   "citiName": "Jakarta Selatan",
      //   "provName": "test update Jakarta",
      //   amount:amount
      // }, {
      //   upsert: true
      // }),
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



  app.get("/donationAmount",(req, res) => {
    console.log("hello I am donationAmount",req.session.passport.user.email);
    db.collection("donation")
      .find({customer:req.session.user.email})
      .toArray((err, result) => {
        if (err) return console.log(err);

        res.send({ result: result });
      });
  });






    app.get("/organizations", isLoggedIn,(req, res) => {
      db.collection("donation")
        .find()
        .toArray((err, result) => {
          if (err) return console.log(err);

          res.send({ result: result });
        });
    });

  // post method to store mood journal entry document to mongodb
  app.post('/saveJournalEntry', (req, res, next) => {
    let uId = ObjectId(req.session.passport.user)
    console.log(uId);
    db.collection('journal').save({ journal: req.body.journalEntry, mood: req.body.mood, user: uId }, (err, result) => {
      if (err) return console.log(err)
      res.send({ success: 'success' })
    })
  });

}
