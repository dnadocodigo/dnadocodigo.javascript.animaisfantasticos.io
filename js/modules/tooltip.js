const initTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleavw", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };
  function criarTooltipsBox(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;

    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }
  function onMouseOver(event) {
    const tooltipBox = criarTooltipsBox(this);
    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
};
export default initTooltip;
