import { LitElement } from 'lit-element';
import { ValidatorMixin } from '@advanced-rest-client/validator-mixin/validator-mixin.js';

class CatsOnly extends ValidatorMixin(LitElement) {
  /* istanbul ignore next */
  validateObject(obj) {
    /* istanbul ignore next */
    return !Object.keys(obj).some((key) => obj[key].match(/^(c|ca|cat|cats)?$/) === null);
  }
  /* istanbul ignore next */
  validateArray(value) {
    /* istanbul ignore next */
    return !value.some((value) => value.match(/^(c|ca|cat|cats)?$/) === null);
  }

  validate(values) {
    /* istanbul ignore next */
    if (Array.isArray(values)) {
      /* istanbul ignore next */
      return this.validateArray(values);
    }
    /* istanbul ignore next */
    if (typeof values === 'object') {
      /* istanbul ignore next */
      return this.validateObject(values);
    }
    /* istanbul ignore next */
    return values.match(/^(c|ca|cat|cats)?$/) !== null;
  }
}
window.customElements.define('cats-only', CatsOnly);
