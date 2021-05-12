export class Product {
  constructor(
    private name: string,
    private quantity: string | number,
    private section: string
  ) {}

  render(list: HTMLUListElement) {
    const li = document.createElement("li");
    li.id = `${this.name}-${this.section}-${new Date().getMilliseconds()}`;

    const h3 = document.createElement("h3");
    h3.innerText = this.name;
    li.append(h3);

    const p = document.createElement("p");
    p.innerText = this.section;
    li.append(p);

    const p2 = document.createElement("p");
    p2.innerText = this.quantity.toString();
    li.append(p2);

    const button = document.createElement("button");
    button.type = "button";
    button.onclick = () => this.remove(li.id);
    button.innerText = "X";
    li.append(button);

    list.append(li);
  }

  remove(id: string) {
    const element = document.getElementById(id);
    if (element) element.remove();
  }
}
