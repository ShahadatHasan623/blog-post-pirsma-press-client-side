import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {
  try {
    const verified = jwt.verify(token, secret);

    return {
      success: true,
      data: verified,
    };
  } catch (error) {
    console.error("Token verification failed:", error);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Invalid token",
    };
  }
};

export const jwtUtils = {
  verifyToken,
};