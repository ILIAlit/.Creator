const jwt = require('jsonwebtoken');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1m'});
    return {
      accessToken,
    }
  };

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch(error) {
      return null;
    }
  }
};

module.exports = new TokenService();
