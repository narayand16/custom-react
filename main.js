const reactElement = {
  type: "a",
  props: {
    target: "_blank",
    href: "https://google.com",
  },
  children: "Click to visit google",
};

function renderElement(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  //   domElement.setAttribute("target", reactElement.props.target);
  //   domElement.setAttribute("href", reactElement.props.href);

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

mainContainer = document.getElementById("root");

renderElement(reactElement, mainContainer);
