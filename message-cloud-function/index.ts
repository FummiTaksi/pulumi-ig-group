const functions = require("@google-cloud/functions-framework");

functions.http("message", (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { message } = req.body;

    res.status(200).json({ message: `Message is ${message}` });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
