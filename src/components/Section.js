export default class Section {
  constructor({ renderer }, selector) {
    // this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(card) {
    card.reverse().forEach((data) => {
      this._renderer(data);
    });
  }
}
