/** Reusable pool of DOM elements to avoid create/destroy churn. */
export class DomPool {
  private pool: HTMLElement[] = [];

  constructor(
    private container: HTMLElement,
    private factory: () => HTMLElement,
  ) {}

  /** Returns the element at `index`, creating a new one if needed. */
  get(index: number): HTMLElement {
    if (index < this.pool.length) {
      this.pool[index].style.display = 'block';
      return this.pool[index];
    }
    const el = this.factory();
    this.container.appendChild(el);
    this.pool.push(el);
    return el;
  }

  /** Hides all elements starting from `startIndex`. */
  hideFrom(startIndex: number): void {
    for (let i = startIndex; i < this.pool.length; i++) {
      this.pool[i].style.display = 'none';
    }
  }

  /** Hides all pooled elements. */
  hideAll(): void {
    this.hideFrom(0);
  }
}
