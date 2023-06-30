import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import cookieParser from "cookie-parser";
import cors from "cors";
import http from 'http';
import express from "express";
import bodyParser from 'body-parser';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { resolvers, typeDefs } from "./schema.js";

interface MyContext {
    token?: String;

}

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    csrfPrevention: false,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
});

await server.start();



const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true // <-- REQUIRED backend setting

};
app.use(cookieParser())
app.use(cors<cors.CorsRequest>(corsOptions))


app.use('/graphql', bodyParser.json({ limit: '5mb' }), expressMiddleware(server, {
    context: async ({ req, res }) => {

        return {
            req,
            res,
        }

    },
}),
);


const PORT = 5000
await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));

console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
