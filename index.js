// import our product
const product = require("./product.json");
const customer = require("./customers.json");
const order = require("./order.json");

// import a set of looks to talk to firebase and Firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  DocumentSnapshot,
} = require("firebase-admin/firestore");

//import our credentails
const credentials = require("./credentials.json");
//connect to firebase services
initializeApp({
  credential: cert(credentials),
});
//connect to firestore
const db = getFirestore();
// create a collection called "products"
//add each product
db.collection("product")
  .add(product[1])
  .then((doc) => {
    console.log("Added product", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
  db.collection("product")
  .add(product[2])
  .then((doc) => {
    console.log("Added product", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });db.collection("product")
  .add(product[3])
  .then((doc) => {
    console.log("Added product", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
//add each customer
db.collection("customer")
  .add(customer[1])
  .then((doc) => {
    console.log("Added customer", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });db.collection("customer")
  .add(customer[2])
  .then((doc) => {
    console.log("Added customer", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });db.collection("customer")
  .add(customer[0])
  .then((doc) => {
    console.log("Added customer", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
//add each order
db.collection("order")
  .add(order[1])
  .then((doc) => {
    console.log("Added order", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });db.collection("order")
  .add(order[2])
  .then((doc) => {
    console.log("Added order", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });db.collection("order")
  .add(order[2])
  .then((doc) => {
    console.log("Added order", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });