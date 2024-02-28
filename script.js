const h1 = React.createElement("h1",{},"Topics covered");
const firstDivPara = React.createElement("p",{className:"p-margin"},"The following is a list of all the topics we cover in the MDN learning area.");
const firstDiv = React.createElement("div",{className:"div-margin"},[h1,firstDivPara]);

const secondDivAnchor = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting started with the web");
const secondDivPara = React.createElement("p",{className:"p-margin margin-left"},"Provides a practical introduction to web development for complete beginners.");
const secondDiv = React.createElement("div",{className:"div-margin"},[secondDivAnchor,secondDivPara]);

const thirdDivAnchor = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML"},"HTML — Structuring the web");
const thirdDivPara = React.createElement("p",{className:"p-margin margin-left"},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");
const thirdDiv = React.createElement("div",{className:"div-margin"},[thirdDivAnchor,thirdDivPara]);

const fourthDivAnchor = React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS"},"CSS — Styling the web");
const fourthDivPara = React.createElement("p",{className:"p-margin margin-left"},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");
const fourthDiv = React.createElement("div",{className:"div-margin"},[fourthDivAnchor,fourthDivPara]);

const div = React.createElement("div",{},[firstDiv,secondDiv,thirdDiv,fourthDiv]);

ReactDOM.render(div, document.querySelector("#root"));