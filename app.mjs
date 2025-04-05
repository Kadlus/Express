import app from "./server/src/index.mjs";

const PORT = process.env.PORT || 8080;

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

export default app;