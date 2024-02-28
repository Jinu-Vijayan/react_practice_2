const FirstDiv = () => {
    return (
        <div className = "div-margin">
            <h1>Topics covered</h1>
            <p className = "p-margin">The following is a list of all the topics we cover in the MDN learning area.</p>
        </div>
    )
}

const SecondDiv = () => {
    return (
        <div className = "div-margin">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">Getting started with the web</a>

            <p className = "p-margin margin-left">Provides a practical introduction to web development for complete beginners.</p>
        </div>
    )
}

const ThirdDiv = () => {
    return (
        <div className = "div-margin">
            <a href = "https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML — Structuring the web</a>
            
            <p className = "p-margin margin-left">HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
        </div>
    )
}

const FourthDiv = () => {
    return (
        <div className = "div-margin">
            <a href = "https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS — Styling the web</a>

            <p className = "p-margin margin-left">CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</p>
        </div>
    )
}

const Data = () => {
    return(
        <div>
            <FirstDiv/>
            <SecondDiv/>
            <ThirdDiv/>
            <FourthDiv/>
        </div>
    )
}

ReactDOM.render(<Data/>, document.querySelector("#root"))