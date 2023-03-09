class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>It's CAPY ALIVEEEE!!!</h1>"

        this.handleClick = this.handleClick.bind(this);  //need to bind 'this' whenever you call the callback in constructor
        this.ele.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!";
    }
}

export default Example;