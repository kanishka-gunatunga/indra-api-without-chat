import db from "./models";
import app from "./app";
import http from "http";

const PORT = process.env.PORT || 8081;

const httpServer = http.createServer(app);


db.sequelize.sync({alter: true, force: false}).then(() => {
    console.log("Database synced successfully!!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    // httpServer.listen(PORT, () => {
    //     console.log(`Server + Socket.io running on port ${PORT}`);
    // });
});