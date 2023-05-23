class Tabnav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa o tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const addDataAnime = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, addDataAnime);
  }

  // adiciona eventos nas tabs
  addTabnavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //  ativa o primeiro evento
      this.activeTab(0);
      this.addTabnavEvent();
    }
  }
}
export default Tabnav;
