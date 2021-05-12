import { Section } from "./types";

export class Product {
  constructor(
    private name: string,
    private quantity: string | number,
    private section: Section
  ) {}
}
