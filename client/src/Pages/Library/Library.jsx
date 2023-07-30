/** @format */

import React,{useState} from "react";
import LibraryHeroSection from "../../Components/LibraryHeroSection";
import LibraryCard from "../../Components/LibraryCard";

export default function Library() {
  const libraryData = [
    {
      id: 1,
      name: "React Router",
      description: "Declarative routing for React applications.",
      color: "bg-blue-600",
      icon: "react-router.jpg",
      links: [
        { label: "View Sample", url: "https://reactrouter.com/en/main/start/examples" },
        { label: "View API", url: "https://reactrouter.com/web/api" },
      ],
    },
    {
      id: 2,
      name: "Redux",
      description: "A predictable state container for JavaScript apps.",
      color: "bg-rose-500",
      icon: "download.png",
      links: [
        { label: "View Sample", url: "https://redux.js.org/introduction/examples" },
        { label: "View API", url: "https://redux.js.org/api" },
      ],
    },
    {
      id: 3,
      name: "Ant Design",
      description: "A popular React UI library with a set of high-quality components.",
      color: "bg-orange-500",
      icon: "antdesign.jpg",
      links: [
        { label: "View Sample", url: "https://ant.design/docs/react/introduce" },
        { label: "View API", url: "https://ant.design/components/overview/" },
      ],
    },
    // Add more libraries here
    {
      id: 4,
      name: "Material-UI",
      description: "A popular React UI framework with Material Design.",
      color: "bg-green-500",
      icon: "mui.png",
      links: [
        { label: "View Sample", url: "https://mui.com/getting-started/example-projects/" },
        { label: "View API", url: "https://mui.com/material-ui/react-autocomplete/#api" },
      ],
    },
    {
      id: 5,
      name: "Formik",
      description: "Build forms in React with ease.",
      color: "bg-purple-500",
      icon: "formik.png",
      links: [
        { label: "View Sample", url: "https://formik.org/docs/examples" },
        { label: "View API", url: "https://formik.org/docs/api/formik" },
      ],
    },
    {
      id: 6,
      name: "React Query",
      description: "A data-fetching library for React applications.",
      color: "bg-indigo-500",
      icon: "Reactquey.jpg",
      links: [
        { label: "View Sample", url: "https://react-query.tanstack.com/examples/simple" },
        { label: "View API", url: "https://react-query.tanstack.com/reference/QueryClient" },
      ],
    },
    {
      id: 7,
      name: "Zustand",
      description: "A small, fast, and scalable state management for React.",
      color: "bg-yellow-500",
      icon: "zustand.jpg",
      links: [
        { label: "View Sample", url: "https://zustand.surge.sh/" },
        { label: "View API", url: "https://github.com/pmndrs/zustand" },
      ],
    },
    {
      id: 8,
      name: "React 360",
      description: "A library for building virtual reality (VR) applications with React.",
      color: "bg-pink-600",
      icon: "react360jpg.jpg",
      links: [
        { label: "View Sample", url: "https://facebook.github.io/react-360/docs/setup" },
        { label: "View API", url: "https://facebook.github.io/react-360/docs/api-reference" },
      ],
    },
    {
      id: 9,
      name: "React Helmet",
      description: "A document head manager for React applications.",
      color: "bg-yellow-500",
      icon: "reacthelmet.jpg",
      links: [
        { label: "View Sample", url: "https://github.com/nfl/react-helmet#example" },
        { label: "View API", url: "https://github.com/nfl/react-helmet#api" },
      ],
    },
    {
      id: 10,
      name: "React Spring",
      description: "A spring-physics based animation library for React.",
      color: "bg-red-500",
      icon: "reactspeing.jpg",
      links: [
        { label: "View Sample", url: "https://www.react-spring.io/docs/hooks/examples" },
        { label: "View API", url: "https://www.react-spring.io/docs/hooks/api" },
      ],
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLibraryData = libraryData.filter((library) =>
  library.name.toLowerCase().includes(searchQuery.toLowerCase())
);
  console.log(filteredLibraryData);

  return (
    <div>
      <LibraryHeroSection onSearch={(query) => setSearchQuery(query)} />
      <LibraryCard libraryData={filteredLibraryData} />

    </div>
  );
}
