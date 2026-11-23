import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  //check f the short url exists or not !
  const doc = await collection.findOne({ shortUrl: body.shortUrl });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "URl already exists",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shortUrl: body.shortUrl,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URl generated successfully",
  });
}
