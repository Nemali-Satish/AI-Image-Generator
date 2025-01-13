import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRETE);

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      return res.status(401).json({
        success: false,
        message: "not Authorized Login Again",
      });
    }
    next();
  } catch (error) {
    console.log(`Auth middleware error : ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default userAuth;
