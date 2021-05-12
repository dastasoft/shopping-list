import { Section } from "./types";

export class Render {
  renderSections(select: HTMLSelectElement, sections: Section[]) {
    const options = sections.map(section => {
      const option = document.createElement("option");
      option.label = section.label;
      option.value = section.value;
      return option;
    });

    select.append(...options);
  }
}
