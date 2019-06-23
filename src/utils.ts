import { verify } from "jsonwebtoken";

export const appSecret = process.env.APP_SECRET;
export const apiKey = process.env.API_KEY;

interface Token {
  userId: string;
}

export const getUserId = (context: any) => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, appSecret) as Token;

    return verifiedToken && verifiedToken.userId;
  }
};

export const retry = async <T>(callback: () => Promise<T>, retries = 2) => {
  let curRetry = 0;

  while (curRetry < retries) {
    try {
      return await callback();
    } catch (error) {
      // ignore
    }

    curRetry++;
  }

  throw new Error("Maximum retries attempts reached.");
};
