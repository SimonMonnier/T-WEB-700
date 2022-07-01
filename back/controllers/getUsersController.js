const jwt = require('jsonwebtoken');
const conn = require('../dbConnection').promise();
exports.getUsers = async (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer') ||
      !req.headers.authorization.split(' ')[1]
    ) {
      return res.status(422).json({
        message: "Token not provided",
      });
    }
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'cryptoepitech');
    const [row] = await conn.execute(
      "SELECT `id`,`name`,`email` FROM `users`"
    );
    if (row.length > 0) {
      return res.json({
        users: row
      });
    }
    res.json({
      message: "No users."
    });
  } catch (err) {
    next(err);
  }
}
