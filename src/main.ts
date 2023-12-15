import $ from 'jquery';
import './index.ts';

// DOM Ready
$(function() {
  const $container = $('#app');
  $container.append('<input type="text" class="new-item" placeholder="Add a new item">');
  $container.append('<button class="add-button">Add</button>');
  $container.append('<div class="item-count"></div>');
});
