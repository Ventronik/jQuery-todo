var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./index.ts"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var jquery_1 = __importDefault(require("jquery"));
    require("./index.ts");
    // DOM Ready
    (0, jquery_1.default)(function () {
        var $container = (0, jquery_1.default)('#app');
        $container.append('<input type="text" class="new-item" placeholder="Add a new item">');
        $container.append('<button class="add-button">Add</button>');
        $container.append('<div class="item-count"></div>');
    });
});
