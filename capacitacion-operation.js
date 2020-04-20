import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './capacitacion-operation-styles.js';
/**
This component ...

Example:

```html
<capacitacion-operation></capacitacion-operation>
```

##styling-doc

@customElement capacitacion-operation
@polymer
@LitElement
@demo demo/index.html
*/
export class CapacitacionOperation extends LitElement {
  static get is() {
    return 'capacitacion-operation';
  }

  // Declare properties
  static get properties() {
    return {
      x: { type: Number },
      y: { type: Number },
      operation: { type: String },
      result: { type: Number }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.proccessOperation();
    window.addEventListener('run-operations', (e) => {
      console.log(e)
      this.runOperationEvent(e.detail);
    });
  }

  runOperationEvent(config) {
    debugger;
    if(config.operation === this.operation) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.requestUpdate();
        this.proccessOperation();
    } else if(config.operation === 'all') {
      this.x = config.x || 0;
      this.y = config.y || 0;
      this.requestUpdate();
      this.proccessOperation();
    }
  }

  async proccessOperation() {
    await this.completeUpdate;
    let a, b, r;
    a = this.x ? this.x : 0;
    b = this.y ? this.y : 0;
    a = parseFloat(a);
    b = parseFloat(b);
    switch (this.operation) {
      case '+':
        r = a + b;
        break;

      case '-':
        r = a - b;
        break;

      case '*':
        r = a * b;
        break;

      case '/':
        if(b === 0) {
          r = NaN;
          break;
        }
        r = Math.round((a / b)*100)/100;
        break;
    }
    this.result = r;
    this.requestUpdate();
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('capacitacion-operation-shared-styles').cssText}
    `;
  }

  // Define a template
  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
      <div class = "container">
        <div class = "item variables" >${typeof this.x === 'undefined' ? 0 : this.x}</div>
        <div class = "item" >${this.operation ? this.operation : '?'}</div>
        <div class = "item variables" >${typeof this.y === 'undefined' ? 0 : this.y}</div>
        <div class = "item" >=</div>
        <div class = "item resultado" >${typeof this.result === 'undefined' ? 0 : this.result}</div>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define(CapacitacionOperation.is, CapacitacionOperation);
