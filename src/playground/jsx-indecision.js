console.log("App.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value; //the value of the input named option

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); //generating a random number between 0 and the length of the array
    const option = app.options[randomNum];
    alert(option)
};

//choosing the element to render our application
const appRoot = document.querySelector('.app');

//JSX - JavaScript XML

const render = () => {
    //Single root element is required
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ul>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    //Rendering our application
    ReactDOM.render(template, appRoot);
};

render();