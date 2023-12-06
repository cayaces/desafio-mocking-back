const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 8080;

mongoose.connect("mongodb+srv://coderClau:7725AmorCODER@coderclau.lgoc83w.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});