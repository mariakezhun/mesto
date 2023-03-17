export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._renderedItems.reverse().forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }

  // renderCard(data) {
  //   this.addItem(this._renderer(data));
  // }
}
