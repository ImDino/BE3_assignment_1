require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require('../models/UserModel');

exports.googleLogin = async (req, res) => {
  const { tokenId } = req.body;
  // eslint-disable-next-line max-len
  const { payload } = await client.verifyIdToken({ idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID });
  // eslint-disable-next-line camelcase
  const { email_verified, name, email } = payload;

  // eslint-disable-next-line camelcase
  if (!email_verified) {
    res.status(401).json({
      error: 'Email is not verified',
    });
  } else {
    try {
      const existingUser = await User.findOne({ email });
      const accessToken = jwt.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '60m' },
      );

      if (!existingUser) {
        await User.create({
          fullName: name,
          email,
        });
      }
      res.status(200).json({
        token: accessToken,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Something went wrong.',
      });
    }
  }
};
