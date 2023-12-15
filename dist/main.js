"use strict";
class TodoApp extends HTMLElement {
    constructor() {
        super();
        this.todoList = [];
        this.attachShadow({ mode: 'open' });
        // Define the HTML structure within the shadow DOM
        this.shadowRoot.innerHTML = `
        <style>
          /* Add any styling for your component here */
        </style>
        <div id="app">
          <input type="text" class="new-item" placeholder="Add a new item">
          <button class="add-button">Add</button>
          <ul class="todo-list"></ul>
          <div class="item-count"></div>
        </div>
      `;
    }
    connectedCallback() {
        // Add event listeners or any other initialization logic here
        const addButton = this.shadowRoot.querySelector('.add-button');
        if (addButton) {
            addButton.addEventListener('click', this.addItem.bind(this));
        }
        // You can add more event listeners as needed
        this.render();
    }
    addItem() {
        const input = this.shadowRoot.querySelector('.new-item');
        const newItemText = input.value.trim();
        if (newItemText !== '') {
            this.todoList.push({ text: newItemText, completed: false });
            input.value = '';
            this.render();
        }
    }
    render() {
        const todoListContainer = this.shadowRoot.querySelector('.todo-list');
        const itemCount = this.shadowRoot.querySelector('.item-count');
        // Clear previous content
        if (todoListContainer) {
            todoListContainer.innerHTML = '';
            // Render todo items
            this.todoList.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
            <input type="checkbox" class="toggle" data-index="${index}" ${item.completed ? 'checked' : ''}>
            <span>${item.text}</span>
          `;
                if (todoListContainer) {
                    todoListContainer.appendChild(listItem);
                }
            });
            // Update item count
            if (itemCount) {
                itemCount.textContent = `Total items: ${this.todoList.length}`;
            }
        }
    }
}
// Define the custom element
customElements.define('todo-app', TodoApp);
