import "initApp";
import "auth";
import db from "database";

//get a single document from a collection
db.collection("EXAMPLE_COLLECTION")
  .doc("JP00qzimyYjhEyHDa48b")
  .get()
  .then((doc) => {
    if (doc.exists) {
      document.body.append(JSON.stringify(doc.data()));
    } else {
      console.log("No such document!");
    }
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });
