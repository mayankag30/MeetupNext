// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://mayankag3001:GEPeHVkcXpTfcP5L@cluster0.57nmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollections = db.collection("meetups");

    // STORE IN DATABASE
    const result = await meetupCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({
      message: "MEETUP INSERTED",
    });
  }
}

export default handler;
