const article1 = `
# Using Cookies with JWT in Node.js

Although JWT is a very popular authentication method and is loved by many, most people end up storing it in local storage. In this article, I won't argue about the best way to store the JWT in the frontend as that is not my intention.

If you have already read my previous article on how to create a simple authentication and authorization system with JWT, you must have noticed that I send the JWT in the response when an HTTP request is made from the login route, and the idea is to keep it in local storage.

However, there are other ways to send the JWT to the frontend, and today I will teach you how to store the JWT in a cookie.

## Why Use Cookies?

Sometimes, constantly sending the JWT in the headers whenever making a request to the API can be cumbersome. Cookies can help with this, as you can automatically send them with each HTTP request without worrying about it.

Another reason for using cookies is that when using local storage on the frontend, you need to ensure that the JWT is removed from local storage when the user logs out. With cookies, you just need a route in the API to make an HTTP request to remove the cookie from the frontend.

There are several reasons to prefer the use of cookies, and here I've given some small superficial examples that can occur in a project.

Now that we have a general idea, let's start coding!

## Step 1: Installation and Setting Up the API

First, we need to install the necessary dependencies. Open your terminal and run the following command:

\`\`\`
npm install express jsonwebtoken cookie-parser
\`\`\`

Now, let's create a simple API using Express:
`;

// Continues to Step 2...
const article2 = `
\`\`\`javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

// ... (Continuing from the previous step)

app.get("/", (req, res) => {
  return res.json({ message: "Hello World 🇵🇹 🤘" });
});

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(\`API up and running at: http://localhost:\${port}\`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start(3333);
\`\`\`

As you may have guessed, we will need something to work with cookies in our API, and this is where the cookie-parser comes in.

First, we will import it and register it in our middlewares:

\`\`\`javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

// Hidden for simplicity
\`\`\`

Now we are ready to start creating some routes in our API.
`;

// Continues to Step 3...
const article3 = `
\`\`\`javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

// ... (Continuing from the previous steps)

// The first route that we are going to create is the login route. 
// First, we will create our JWT and then we will store it in a cookie called "access_token". 
// The cookie will have some options, such as httpOnly (to be used during the development of the application) and secure (to be used during the production environment, with HTTPS).

app.get("/login", (req, res) => {
  const token = jwt.sign({ id: 7, role: "captain" }, "YOUR_SECRET_KEY");
  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "Logged in successfully 😊 👌" });
});
\`\`\`

With the login route done, we can now check if we received the cookie with the JWT in our client. In this example, I used Insomnia to test the login route.

Now, with the authentication done, let's move on to the authorization part.
`;

// Continues to Step 4...
const article4 = `
\`\`\`javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

// ... (Continuing from the previous steps)

// We will create a middleware called authorization to check if we have the cookie.
const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, "YOUR_SECRET_KEY");
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

// Now, we can use the authorization middleware in our protected routes.

// For example, to create a route that displays user data based on the JWT:
app.get("/protected", authorization, (req, res) => {
  return res.json({ user: { id: req.userId, role: req.userRole } });
});
\`\`\`

Now we have a protected route "/protected", which can only be accessed if the user has a valid JWT in their cookie. If the JWT is not present or invalid, the user will receive a 403 Forbidden response.

This route now gives us access to the data present in the JWT (user id and role), which we added as properties to the request object in the authorization middleware.

Finally, let's implement the logout functionality in the next step.
`;

// Continues to Step 5...
const article5 = `
\`\`\`javascript
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cookieParser());

// ... (Continuing from the previous steps)

// Now we will create a route to log out. This route will remove the value of the "access_token" cookie.
// We will also use the authorization middleware to ensure that the user has the cookie before logging out.

app.get("/logout", authorization, (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

// And that's it! With this setup, the user can log out by visiting the "/logout" route, 
// which clears the "access_token" cookie.

const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(\`API up and running at: http://localhost:\${port}\`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start(3333);
\`\`\`

Final Notes:
This example was simple, and there is much more to learn about authentication and authorization with JWT. 
I hope this article helped to clarify some doubts and provided a starting point for using cookies with JWT in Node.js.

You can further improve this setup by adding token expiration and refresh token mechanisms to enhance security.

Now, you have learned how to use cookies to store JWT and provide authentication and authorization in your Node.js API. 
Feel free to explore and apply this knowledge to build more secure and efficient applications.

Happy coding! 😊🚀
`;

// Combine all the steps into a single article
// const fullArticle = article1 + article2 + article3 + article4 + article5;
export { article1, article2, article3, article4, article5 };
