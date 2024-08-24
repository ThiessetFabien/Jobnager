import { createServer } from 'node:http';
import 'dotenv/config';

import app from "./app/index.app.js";  

const httpServer = createServer(app);

const PORT = process.env.PORT ?? 3000;

httpServer.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});