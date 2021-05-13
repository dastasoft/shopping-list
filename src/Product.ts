export class Product {
  constructor(
    private name: string,
    private quantity: string | number,
    private section: string
  ) {}

  render() {
    const id = `${this.name}-${this.quantity}-${new Date().getMilliseconds()}`;

    const li = document.createElement("li");
    li.id = id;

    const div = document.createElement("div");
    div.className = "section__item-holder";

    const button = document.createElement("button");
    button.className = "section__delete-button";
    button.onclick = () => this.remove(id);
    button.innerHTML = `<svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" class="section__delete-icon" />
              <line
                x1="3.70711"
                y1="3.79289"
                x2="12.1924"
                y2="12.2782"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="3.29289"
                y1="12.2782"
                x2="11.7782"
                y2="3.7929"
                stroke="white"
                stroke-width="2"
              />
            </svg>`;
    const name = document.createElement("span");
    name.innerText = this.name;

    const quantity = document.createElement("span");
    quantity.innerText = this.quantity.toString();

    div.append(button, name);
    li.append(div, quantity);

    const list = document.getElementById(`${this.section}-list`);

    if (list) list.append(li);
  }

  remove(id: string) {
    const element = document.getElementById(id);
    if (element) element.remove();
  }
}
