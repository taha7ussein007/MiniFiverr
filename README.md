## Description 
MiniFiverr website to sell and order gigs using node.js (express) as backend, handlebars for frontend with bootstrap, JWT auth, algolia (in my case it is better than ElasticSearch), Stripe for payment, socket.io for chat, facebook API & google API for SignIn, and mongoLab as online DB
Thanks alot for Arash for his Starter.


## Usage
```git clone``` it and thereafter run ```npm install``` then to start ```nodemon server.js```.

Make sure to add your data in these places if you want

```
public/js/payment => stripe key
public/search.js => algolia key
routes/order.js => stripe key
routes/main.js => algolia key
models/gig.js => algolia apiKey
config/passport.js => facebook apiKey & google apiKey
config/secret.js => your mLab DB config string and process.env.SECRET secret key
```
