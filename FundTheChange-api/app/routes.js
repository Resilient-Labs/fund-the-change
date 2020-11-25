const stripe = require('stripe')('sk_test_51Ha6EUEsCFPlCMG1zxzWoFCMCkMdTEEnxmtsY54cDJ1ZCMebV8NwxX9V9IFrDojB0nhtXTdhk1EVVD1KDiUUPi9g00gVqMcbFl'); // Add your Secret Key Here


module.exports = function (app, passport, db, ObjectId) {

  const fs = require('fs')



  app.get('/userJournals', (req, res) => {
    let uId = ObjectId(req.session.passport.user)
    console.log(uId);

    db.collection('journal').find({ user: uId }).toArray((err, result) => {
      if (err) return console.log(err)

      console.log(result)
      res.send({ result: result })

    })
  })



  app.post('/charge', (req, res) => {
      console.log("heklllo I am in charge");

      let organizationId = parseInt(req.body.organizationId);
      let amount = parseInt(req.body.amount);

      db.collection('donation').save({
          // setting property for a specific users
          // user: req.user,
          userId: ObjectId(req.body.id),
          organizationId: ObjectId(req.body.id),
          amount: amount
        },

        // db.findOneAndUpdate('organizations'({
        //   // setting property for a specific users
        //   // user: req.user,
        //   // userId:ObjectId(req.params.id),
        //   organizationId: ObjectId(req.params.id),
        //   amount:amount
        // },
        // db.collection('organizations').update({
        //     organizationId: ObjectId(req.params.id)
        //   }, {
        //     $set: {
        //       amount: amount
        //     },


        db.collection('organizations').update({
            _id: ObjectId(req.body.id)
        }, {
          "citiName": "Jakarta Selatan",
          "provName": "test update Jakarta",
          amount:amount
        }, {
          upsert: true
        }),



        (err, result) => {
          if (err) {
            return console.log(err)
          } else {
            try {
              stripe.customers
                .create({

                  name: req.body.name,
                  email: req.body.email,
                  source: req.body.stripeToken
                })
                .then(customer =>
                  stripe.charges.create({
                    amount: req.body.amount * 100,
                    currency: "usd",
                    customer: customer.id
                  })
                )
                .then(() => res.redirect(`/viewdonation/${result}`))
                .catch(err => {
                  console.log(err);
                  console.log(err);
                })
            } catch (err) {
              res.send(err);
            }
          }

        })
      // res.redirect('complete.html')
      res.json({
        msg: "succe"
      })
    })





      app.get('/complete.html', (req, res) => {
        const html = fs.readFileSync(__dirname + '/complete.html', {
          encoding: 'utf8'
        })
        res.set('Content-Type', 'text/html')

        res.send(html)
        res.end()

      })




      app.get('/index.html', (req, res) => {
  const html = fs.readFileSync(__dirname + '/index.html', {
    encoding: 'utf8'
  })
  res.set('Content-Type', 'text/html')

  res.send(html)
  res.end()

})
























  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/moodJournal', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/moodJournal', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


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
