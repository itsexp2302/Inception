//the object is used to give attributes to the class

const parent = React.createElement("div",
{id: "parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 Tag")]
) 
)
const heading = React.createElement("h1", 
{
    id:"heading",
    xyz: "abc"
},
"Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);