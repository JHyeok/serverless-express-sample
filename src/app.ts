import serverless from "serverless-http";
import express from "express";
import {
  APIGatewayProxyEvent,
  Context,
  Handler,
  APIGatewayProxyResult,
} from "aws-lambda";

const app = express();

app.get("/hello", (req: express.Request, res: express.Response) => {
  return res.json({ message: "Hello" });
});

const serverlessApp = serverless(app);

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const result = await serverlessApp(event, context);
  return result;
};
