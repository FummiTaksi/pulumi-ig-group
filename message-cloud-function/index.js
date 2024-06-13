var functions = require("@google-cloud/functions-framework");
functions.http("message", function (req, res) {
    try {
        if (req.method !== "POST") {
            res.status(405).send("Method Not Allowed");
            return;
        }
        var message = req.body.message;
        res.status(200).json({ message: "Message is ".concat(message) });
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});
