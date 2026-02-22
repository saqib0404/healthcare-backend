import app from "./app";
import { envVar } from "./config/env";

const bootstrap = async () => {
    try {
        // Import the app after any asynchronous setup is complete
        app.listen(envVar.PORT, () => {
            console.log(`Server is running on http://localhost:${envVar.PORT}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

bootstrap();