// const heading = React.createElement("h1", {
//     id: "header",
//     className: "hello"
// }, "Hello World from React JS world");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent = React.createElement("div",
{id: "parent"},
React.createElement("div", {
    id: "child"},
   [ React.createElement("h1", {},
   "I am h1 tag"),React.createElement("h2", {},
   "I am h2 tag")]
)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);