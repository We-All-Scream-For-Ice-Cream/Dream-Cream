const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");

const usersRouter = require("./users");
const iceCreamRouter = require("./ice_cream");
const ordersRouter = require("./orders");
const cartRouter = require("./cart");
const { getUserByEmail } = require("../db/users");

apiRouter.use(async (req, res, next) => {
  console.log(process.env.JWT_SECRET);
  const auth = req.header("Authorization");

  if (!auth) {
    next();
  } else if (auth.startsWith("Bearer ")) {
    // Extract
    const token = auth.slice(7);
    console.log(token);
    try {
      // Verify
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await getUserByEmail(decoded.email);

      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).send("invalid login session or session expired");
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with 'Bearer'`,
    });
  }
});

apiRouter.use("/users", usersRouter);
apiRouter.use("/ice_cream", iceCreamRouter);
apiRouter.use("/orders", ordersRouter);
apiRouter.use("/cart", cartRouter);

apiRouter.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

module.exports = apiRouter;
