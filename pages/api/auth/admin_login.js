/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  
    const { email, password } = req?.body;

  // Check in the database
  // if a user with this username
  // and password exists
  if (email === process.env.ADMIN_ID && password === process.env.ADMIN_PASS) {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        email: process.env.ADMIN_ID,
      },
      secret
    );

    const serialised = serialize("gccxcsd_Admin", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);
    res.status(200).send(serialised);
  
  } else {
    res.json({ message: "Invalid credentials!" });
  }
}