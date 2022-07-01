const {
  validationResult
} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const conn = require('../dbConnection').promise();
exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }
  try {
    conn.connect(function(err) {
      if (err) {
        console.log(`connectionRequest Failed ${err.stack}`)
      } else {
        console.log(
          `DB connectionRequest Successful ${connection.threadId}`)
      }
    });
    const [row] = await conn.execute(
      "SELECT `email` FROM `users` WHERE `email`=?",
      [req.body.email]
    );
    if (row.length > 0) {
      return res.status(201).json({
        message: "The E-mail already in use",
      });
    }
    const hashPass = await bcrypt.hash(req.body.password, 12);
    const [rows] = await conn.execute(
      'INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)', [
        req.body.name,
        req.body.email,
        hashPass
      ]);
    if (rows.affectedRows === 1) {
      return res.status(201).json({
        message: "User created."
      });
    }
  } catch (err) {
    next(err);
  }
}
