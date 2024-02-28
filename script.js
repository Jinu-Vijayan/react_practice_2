const FirstDiv = () => {
    return (
        <div className = "div-margin">
            <h1>Topics covered</h1>
            <p className = "p-margin">The following is a list of all the topics we cover in the MDN learning area.</p>
        </div>
    )
}

const DataDiv = ({href, anchorText, paraText, paraClass}) => {
    return(
        <div className = "div-margin">
            <a href = {href}>{anchorText}</a>
            <p className = {paraClass}>{paraText}</p>
        </div>
    )
}

const Data = () => {
    return(
        <div>
            <FirstDiv/>

            <DataDiv href = "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web" anchorText= "Getting started with the web" paraText = "Provides a practical introduction to web development for complete beginners." paraClass = "p-margin margin-left"/>

            <DataDiv href = "https://developer.mozilla.org/en-US/docs/Learn/HTML" anchorText= "HTML — Structuring the web" paraText = "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail." paraClass = "p-margin margin-left"/>

            <DataDiv href = "https://developer.mozilla.org/en-US/docs/Learn/CSS" anchorText= "CSS — Styling the web" paraText = "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS." paraClass = "p-margin margin-left"/>
            
        </div>
    )
}

ReactDOM.render(<Data/>, document.querySelector("#root"))