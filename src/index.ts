import $ from 'jquery';

class TodoItem {
  constructor(public text: string, public completed: boolean = false) {}
}

class TodoList {
  private items: TodoItem[] = [];

  addItem(text: string) {
    const newItem = new TodoItem(text);
    this.items.push(newItem);
  }

  getItems() {
    return this.items;
  }
}

class TodoApp {
  private todoList: TodoList = new TodoList();
  private $todoList: JQuery<HTMLElement>;

  constructor(private $container: JQuery<HTMLElement>) {
    this.$todoList = $('<ul>').appendTo($container);

    // Bind event handlers
    $container.on('click', '.toggle', this.toggleItem.bind(this));
    $container.on('click', '.add-button', this.addItem.bind(this));

    this.render();
  }

  private toggleItem(event: JQuery.ClickEvent) {
    const index = $(event.target).data('index');
    if (index !== undefined) {
      const items = this.todoList.getItems();
      items[index].completed = !items[index].completed;
      this.render();
    }
  }

  private addItem() {
    const $input = this.$container.find('.new-item');
    const newItemText = $input.val() as string;
    if (newItemText.trim() !== '') {
      this.todoList.addItem(newItemText);
      $input.val('');
      this.render();
    }
  }

  private render() {
    const items = this.todoList.getItems();
    this.$todoList.empty();

    items.forEach((item, index) => {
      const $item = $('<li>').appendTo(this.$todoList);
      $item.append($('<input type="checkbox" class="toggle">').prop('checked', item.completed).data('index', index));
      $item.append($('<span>').text(item.text));
    });

    this.$container.find('.item-count').text(`Total items: ${items.length}`);
  }
}

// Initialize the app
const $container = $('#app');
const todoApp = new TodoApp($container);
