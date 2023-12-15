"use strict";
class MyComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<p>Hello Web Component!</p>';
    }
}
customElements.define('todo-app', MyComponent);
