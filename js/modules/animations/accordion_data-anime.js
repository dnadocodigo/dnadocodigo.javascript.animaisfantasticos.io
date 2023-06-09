export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "active";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventoa ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //  INicia a função
  init() {
    if (this.accordionList.length) {
      // Inicia o primeiro item do accordion
      this.toggleAccordion(this.accordionList[0]);

      this.addAccordionEvent();
    }
  }
}
