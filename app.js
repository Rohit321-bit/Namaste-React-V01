const content1=React.createElement("h1",{},"I am child1 Header");
const content2=React.createElement("h2",{},"I am child2 Header");
const child=React.createElement("div",{id:"child"},[content1,content2])
const parent=React.createElement("div",{id:"parent"},child)

const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent)
