const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
const {
  article1: ArticleA1,
  article2: ArticleA2,
  article3: ArticleA3,
  article4: ArticleA4,
  article5: ArticleA5,
} = require("./article1");

const {
  article1: ArticleB1,
  article2: ArticleB2,
  article3: ArticleB3,
  article4: ArticleB4,
  article5: ArticleB5,
} = require("./article2");

const {
  article1: ArticleC1,
  article2: ArticleC2,
  article3: ArticleC3,
  article4: ArticleC4,
  article5: ArticleC5,
  article6: ArticleC6,
  article7: ArticleC7,
  article8: ArticleC8,
} = require("./article3");

// You can now use the ArticleA1, ArticleA2, ..., ArticleC8 variables in your Node.js code.

// Connect to MongoDB
const mongoURI =process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Connected Vinayak");
// Define the MongoDB model for TreeNode
const treeNodeSchema = new mongoose.Schema({
  name: String,
  attributes: {
    title: String,
    article: { type: mongoose.Schema.Types.ObjectId, ref: "TreeNode" },
  },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "TreeNode" }],
});

const TreeNode = mongoose.model("TreeNode", treeNodeSchema);

// Tree Data
const treeData = {
  name: "Authorization and Authentication in React",
  children: [
    {
      name: "Using Cookies with JWT in Node.js",
      children: [
        {
          name: "Step 1",
          attributes: {
            title: "Introduction and Dependencies",
            article: ArticleA1,
          },
          children: [
            {
              name: "Step 2",
              attributes: {
                title: "Setting Up the API Continued",
                article: ArticleA2,
              },
              children: [
                {
                  name: "Step 3",
                  attributes: {
                    title: "Creating the Login Route",
                    article: ArticleA3,
                  },
                  children: [
                    {
                      name: "Step 4",
                      attributes: {
                        title: "Implementing Authorization",
                        article: ArticleA4,
                      },
                      children: [
                        {
                          name: "Step 5",
                          attributes: {
                            title: "Implementing Logout and Conclusion",
                            article: ArticleA5,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Authentication and Authorization Using JWT in Node JS with Express",
      children: [
        {
          name: "Step 1",
          attributes: {
            title: "Introduction!",
            article: ArticleB1,
          },
          children: [
            {
              name: "Step 2",
              attributes: {
                title: "What is JWT (JSON Web Token)?",
                article: ArticleB2,
              },
              children: [
                {
                  name: "Step 3",
                  attributes: {
                    title: "Why Use Authentication & Authorization?",
                    article: ArticleB3,
                  },
                  children: [
                    {
                      name: "Step 4",
                      attributes: {
                        title:
                          "How to Apply Authentication in a Node.js Application Using JWT and bcryptjs?",
                        article: ArticleB4,
                      },
                      children: [
                        {
                          name: "Step 5",
                          attributes: {
                            title:
                              "How to Apply Authorization in a Node.js Application?",
                            article: ArticleB5,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Authentication using the Auth0 to a React application",
      children: [
        {
          name: "Step 1",
          attributes: {
            title: "Introduction!",
            article: ArticleC1,
          },
          children: [
            {
              name: "Step 2",
              attributes: {
                title: "Getting started",
                article: ArticleC2,
              },
              children: [
                {
                  name: "Step 3",
                  attributes: {
                    title: "Create the React application",
                    article: ArticleC3,
                  },
                  children: [
                    {
                      name: "Step 4",
                      attributes: {
                        title:
                          "Install and configure the Material UI CSS framework and Auth0",
                        article: ArticleC4,
                      },
                      children: [
                        {
                          name: "Step 5",
                          attributes: {
                            title: "Create the SignIn component",
                            article: ArticleC5,
                          },
                          children: [
                            {
                              name: "Step 6",
                              attributes: {
                                title: "Create the Profile component",
                                article: ArticleC6,
                              },
                              children: [
                                {
                                  name: "Step 7",
                                  attributes: {
                                    title: " Change the src/index.tsx file",
                                    article: ArticleC7,
                                  },
                                  children: [
                                    {
                                      name: "Step 8",
                                      attributes: {
                                        title:
                                          " Running/Testing the Application",
                                        article: ArticleC8,
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
// Function to recursively add nodes to the database
const addNodesToDatabase = async (nodes, parent) => {
  for (const node of nodes) {
    const { name, attributes, children } = node;
    let articleId = null;

    if (attributes && attributes.article) {
      const newArticle = new TreeNode({ name: attributes.article });
      const savedArticle = await newArticle.save();
      articleId = savedArticle._id;
    }

    const newNode = new TreeNode({
      name,
      attributes: { ...attributes, article: articleId },
      children: [],
    });
    await newNode.save();

    if (parent) {
      parent.children.push(newNode._id);
      await parent.save();
    }

    if (children && children.length > 0) {
      await addNodesToDatabase(children, newNode);
    }
  }
};

// Add treeData to the database on startup
const addTreeDataToDatabase = async () => {
  try {
    await addNodesToDatabase([treeData], null);
    console.log("Tree data added to the database.");
  } catch (error) {
    console.error("Error adding tree data to the database:", error.message);
  }
};
const populateChildren = async (nodeId) => {
  const node = await TreeNode.findById(nodeId).populate("children");

  if (node.children.length > 0) {
    const populatedChildren = await Promise.all(
      node.children.map(async (childId) => await populateChildren(childId))
    );
    node.children = populatedChildren;
  }

  return node;
};

const getTreeData = async (req, res) => {
  try {
    const rootNode = await TreeNode.findOne({ name: treeData.name }).populate(
      "attributes.article children"
    );
    if (!rootNode) {
      return res.status(404).json({ error: "Tree data not found" });
    }

    const populatedRootNode = await populateChildren(rootNode._id);
    res.json(populatedRootNode);
  } catch (error) {
    console.error("Error fetching tree data:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
const getArticleById = async (req, res) => {
  const { articleId } = req.params;

  try {
    const article = await TreeNode.findById(articleId);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    res.json(article);
  } catch (error) {
    console.error("Error fetching article:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getTreeById = async (req, res) => {
  console.log("Tree");
  const { nodeId } = req.params;

  try {
    const populatedNode = await populateChildren(nodeId);

    if (!populatedNode) {
      return res.status(404).json({ error: "Node not found" });
    }

    res.json(populatedNode);
  } catch (error) {
    console.error("Error fetching node:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
// Define a route to get the treeData from the database
app.get("/api/tree", getTreeData);
app.get("/api/article/:articleId", getArticleById);
app.get("/api/tree/:nodeId", getTreeById);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Add treeData to the database on startup
// addTreeDataToDatabase();
