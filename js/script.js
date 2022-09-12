function createSubject() {
    debugger;
    const state = {
        observers: [],
    }

    //console.log(state.observers)

    function subscribe(observer) {
        debugger;
        if (!state.observers.includes(observer)) {
            state.observers.push(observer);

        }
    }

    function unsubscribe(observer) {
        state.observers = state.observers.filter(subscriber => subscriber !== observer)
    }

    function notifyAll(value) {
        debugger;
        console.log("Notifying " + state.observers.length + " observers")
        state.observers.forEach(observer => observer.update(value));
    }

    document.querySelector('input').addEventListener('keyup', handleKeyDown);

    function handleKeyDown(event) {
        debugger;
        notifyAll(event.target.value);
    }

    return {
        subscribe,
        unsubscribe
    }
}

function createObserver(observer) {
    debugger;
    function update(value) {
        observer.innerText = value;
    }

    return {
        update
    }
}
debugger;
const inputSubject = createSubject();

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach((p, i) => {
    debugger;
    let paragraphObserver = `paragraph${i}`;
    paragraphObserver = createObserver(p)

    inputSubject.subscribe(paragraphObserver)
})