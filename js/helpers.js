export class Manipulator {
  find(selector, container = document) {
    let collection = container.querySelectorAll(selector);

    return collection.length === 1 ? collection[0] : collection;
  }
}

export const DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
};
