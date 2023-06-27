const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
console.log(bearerToken)
    if (!bearerToken) {
      return res.status(501).json({
        success: true,
        message: "No tienes permiso para continuar",
      });
    }
console.log('1---------------------------------------');
    const token = bearerToken.split(" ")[1];
    console.log(token);
console.log('2---------------------------------------');

    const decoded = jwt.verify(token, "kilombo");
    console.log('3---------------------------------------');

    req.userId = decoded.userId;
    req.roleId = decoded.roleId;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Token invalido",
      error: error.message,
    });
  }
};

module.exports = auth;
