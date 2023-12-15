var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jquery_1 = __importDefault(require("jquery"));
    var TodoItem = /** @class */ (function () {
        function TodoItem(text, completed) {
            if (completed === void 0) { completed = false; }
            this.text = text;
            this.completed = completed;
        }
        return TodoItem;
    }());
    var TodoList = /** @class */ (function () {
        function TodoList() {
            this.items = [];
        }
        TodoList.prototype.addItem = function (text) {
            var newItem = new TodoItem(text);
            this.items.push(newItem);
        };
        TodoList.prototype.getItems = function () {
            return this.items;
        };
        return TodoList;
    }());
    var TodoApp = /** @class */ (function () {
        function TodoApp($container) {
            this.$container = $container;
            this.todoList = new TodoList();
            this.$todoList = (0, jquery_1.default)('<ul>').appendTo($container);
            // Bind event handlers
            $container.on('click', '.toggle', this.toggleItem.bind(this));
            $container.on('click', '.add-button', this.addItem.bind(this));
            this.render();
        }
        TodoApp.prototype.toggleItem = function (event) {
            var index = (0, jquery_1.default)(event.target).data('index');
            if (index !== undefined) {
                var items = this.todoList.getItems();
                items[index].completed = !items[index].completed;
                this.render();
            }
        };
        TodoApp.prototype.addItem = function () {
            var $input = this.$container.find('.new-item');
            var newItemText = $input.val();
            if (newItemText.trim() !== '') {
                this.todoList.addItem(newItemText);
                $input.val('');
                this.render();
            }
        };
        TodoApp.prototype.render = function () {
            var _this = this;
            var items = this.todoList.getItems();
            this.$todoList.empty();
            items.forEach(function (item, index) {
                var $item = (0, jquery_1.default)('<li>').appendTo(_this.$todoList);
                $item.append((0, jquery_1.default)('<input type="checkbox" class="toggle">').prop('checked', item.completed).data('index', index));
                $item.append((0, jquery_1.default)('<span>').text(item.text));
            });
            this.$container.find('.item-count').text("Total items: ".concat(items.length));
        };
        return TodoApp;
    }());
    // Initialize the app
    var $container = (0, jquery_1.default)('#app');
    var todoApp = new TodoApp($container);
});
