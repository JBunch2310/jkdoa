const express = require("express");
const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const credentials = require("./credentials.json")

function connectToFirestore() {
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
}
const app = express();
const PORT = process.env.PORT || 3000;
const db = connectToFirestore();

// get all products
app.get("/products", (req, res) => {
  const products = []; // create empty array
  db.collection("product") // connect to FS
    .get() // Get all
    .then((allProducts) => {
        allProducts.forEach((eachProd) =>
          products.push({ id: eachProd.id, ...eachProd.data() })
        );
    })
    .then(() => res.send(products))
    .catch((err) => console.log(err));
});

// get all customers
app.get("/customers", (req, res) => {
  const customers = [];
  db.collection("customers")
    .get()
    .then((allCustomers) => {
      allCustomers.forEach(
        (eachCustomer) =>
          customers.push({ id: eachCustomer.id, ...eachCustomer.data() }) //... is the spread operator.
      );
    })
    .then(() => res.send(customers))
    .catch((err) => console.log(err));
});

// get all orders
app.get("/order", (req, res) => {
  const order = [];
  db.collection("order")
    .get()
    .then((allOrder) => {
      allOrder.forEach((eachOrder) => {
        order.push({ id: eachOrder.id, ...eachOrder.data() }); //... is the spread operator.
      });
    })
    .then(() => res.send(order))
    .catch((err) => console.log(err));
});

//add one order
// app.get("/order", (req, res) => {
//   // add code to add 1 order
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
