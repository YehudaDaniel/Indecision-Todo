//Create a templateTwo const JSX expression

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const resetBtn = () => {
    count = 0;
    renderCounterApp();
};

//choosing the element to render our application
const appRoot = document.querySelector('.app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetBtn}>reset</button>
        </div>
    );
    //Rendering our application
    ReactDOM.render(template, appRoot);
};

renderCounterApp();