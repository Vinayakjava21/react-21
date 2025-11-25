console.log("react")
// const header = React.createElement("h1",{},"Welcome 21");
 const root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);


const parent = React.createElement("div", {},
    React.createElement("div", {},
        [React.createElement("h1", {}, "H1"), React.createElement("h2", {}, "H2")])
);

root.render(parent);