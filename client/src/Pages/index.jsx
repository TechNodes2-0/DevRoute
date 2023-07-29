import React from "react";
import Tree from "react-d3-tree";
export default function DemoTree() {
  return (
    <div>
      <OrgChartTree />
    </div>
  );
}

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};
const treeData = {
    
      name: 'State Management in React',
      children: [
        {
          name: 'React Hooks',
          children: [
            {
              name: 'useState Hook',
              attributes: {
                link: 'https://www.freecodecamp.org/news/learn-react-usestate-hook-in-10-minutes/',
                description: 'Learn how to use the useState hook for state management in functional components.'
              }
            },
            {
              name: ' useEffect Hook',
              attributes: {
                link: 'https://www.freecodecamp.org/news/react-useeffect-absolute-beginners/',
                description: 'Explore the useEffect hook and its role in handling side effects and state changes.'
              }
            }
          ]
        },
        {
          name: 'Context API',
          children: [
            {
              name: 'Article: Introduction to Context API',
              attributes: {
                link: 'https://example.com/context-api-intro',
                description: 'Understand the basics of React Context API for managing global state.'
              }
            },
            {
              name: 'Article: useContext Hook',
              attributes: {
                link: 'https://example.com/usecontext-hook',
                description: 'Learn how to consume data from React Context using the useContext hook.'
              }
            }
          ]
        },
        {
          name: 'Redux',
          children: [
            {
              name: 'Article: Introduction to Redux',
              attributes: {
                link: 'https://example.com/redux-intro',
                description: 'Explore the principles and concepts of Redux for advanced state management.'
              }
            },
            {
              name: 'Article: Redux Thunk Middleware',
              attributes: {
                link: 'https://example.com/redux-thunk',
                description: 'Understand how to use Redux Thunk middleware for handling asynchronous actions.'
              }
            }
          ]
        }
      ]
    
};
  

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => (
  <g>
    <circle r={35} onClick={toggleNode} />
    <foreignObject
      width={foreignObjectProps.width}
      height={foreignObjectProps.height}
      x={foreignObjectProps.x}
    >
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {nodeDatum.name}
          </h5>
        </a>
        {nodeDatum.attributes?.link && (
          <>
           
            <a
              href={nodeDatum.attributes.link}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read Article
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </>
        )}
      </div>
    </foreignObject>
  </g>
);

function OrgChartTree() {
  const nodeSize = { x: 900, y: 1000 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 70 };

  return (
    <div
      id="treeWrapper"
      style={containerStyles}
      className="border-4 border-black"
    >
      <Tree
        data={treeData}
        initialDepth={0}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
        }
        nodeSize={nodeSize}
      />
    </div>
  );
}
