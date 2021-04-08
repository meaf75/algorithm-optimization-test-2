import express from 'express';
import bodyParser from 'body-parser';
import { ClearConsole } from '../../utils/ClearConsole';
import { RoutesPartitionIndex } from '../../interfaces/routes/partition-index-routes';
import { ConfigServer, IConfigServer } from '../../constants/ConfigServer';
import cors from 'cors';

interface IStartApp {
    appExpress: express.Express;
    configuration: IConfigServer;    
}

const app: express.Express = express();

// Parse json request body
app.use(bodyParser.json());
// parse urlencoded request body
app.use(bodyParser.urlencoded({extended: false}));

// Enable cors
// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors());

// Setup server routes
RoutesPartitionIndex(app); 

const startApp = (args: IStartApp) => async () => {
    const { appExpress,configuration } = args;

    // Easy clear
    if(process.env.NODE_ENV != 'test')
        ClearConsole();

    // Setup server
    appExpress.listen(configuration.port, () => {
        console.log(`Server running at port: ${configuration.port}`);
    });
};

const startServer = startApp({
    appExpress: app,
    configuration: ConfigServer,
});

export {
    app,
    startServer,
    startApp
};