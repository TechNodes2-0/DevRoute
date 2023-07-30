# Welcome to DevRoutes - Your Guide to Web Development

## 🚀 Inspiration

DevRoutes was inspired by the desire to create a powerful tool that helps developers navigate through the vast and ever-evolving landscape of web development technologies. We wanted to provide a comprehensive roadmap that enables developers to explore different implementation approaches, learn from the community's experiences, and contribute their own insights.

## ❓ What it does

DevRoutes is a web application that serves as a roadmap and guide for developers interested in exploring various technologies and libraries within a specific technology stack, starting with a focus on React. The application provides an interactive hierarchical tree structure, allowing users to dive into different components, libraries, and implementation approaches. Users can access curated article links, tutorials, and documentation to deepen their knowledge and make informed choices. The platform also encourages collaboration, allowing users to share their implementation approaches and rate the effectiveness of various methods.

## 🛠️ How we built it

DevRoutes is built using a combination of frontend and backend technologies. The frontend utilizes Vite and React.js to create a dynamic and responsive user interface. We render text through the GitHub Markdown API, allowing for real-time updates and access to rich documentation. The hierarchical tree structure is presented using the React-d3-tree library, which was new to our team and proved to be a valuable tool for visualizing complex data structures.

## 💻 Tech Stack

- Frontend: React.js, Vite, React-d3-tree, Auth0
- Backend: Express.js, MongoDB, GitHub Markdown API

## 🎯 Challenges we ran into

During the development of DevRoutes, we encountered challenges in designing and implementing the interactive visualization of the hierarchical tree. Ensuring a seamless user experience and handling various user interactions while navigating through the technology ecosystem required careful consideration and attention to detail.

## 🏆 Accomplishments that we're proud of

We are proud to have created an intuitive and user-friendly platform that empowers developers to explore technology ecosystems like React and other languages in a comprehensive and structured manner. The collaborative aspect of the application, which allows users to contribute their insights, has resulted in a thriving community of knowledge-sharing and learning.

## 🧠 What we learned

Developing DevRoutes was a valuable learning experience for our team. We honed our skills in frontend and backend development, interactive data visualization, and managing user contributions. Moreover, we gained insights into the specific challenges developers face when navigating technology stacks, motivating us to create an even more robust and inclusive roadmap.

## 🔮 What's next for DevRoutes

As we continue to grow DevRoutes, our vision is to expand beyond React and encompass other technology ecosystems, catering to developers with diverse interests. We aim to enrich the platform with more curated resources, enhance user profiles, and add new features based on valuable feedback from our community. Our ultimate goal is to be the go-to destination for developers seeking guidance and knowledge in their technology journey.

## Description

DevRoutes - Your Guide to Web Development is a web application that lets you explore different web development technologies and libraries, starting with a focus on React. Choose your preferred technology stack and start your journey into the world of web development!

## Getting Started

Follow the steps below to set up the project on your local machine:

1. Clone the repository to your local machine.
2. Navigate to the project directory.

## Server Setup

To run the server, use the following command:

```
npm run server
```

Before running the server, make sure to create a `.env` file in the root directory of the server with the following variable:

- `MONGO_URI`: The URI for MongoDB.

## Client Setup

To run the client, use the following command:

```
npm run dev
```

Before running the client, make sure to create a `.env` file in the root directory of the client with the following variable:

- `DATABASE_URL`: The URL of the database you want to connect to.

## Contributing

We welcome contributions to improve DevRoutes. Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

Happy learning and happy coding with DevRoutes!
