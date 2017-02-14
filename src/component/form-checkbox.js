import {bindable, customElement, bindingMode} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@resolvedView('spoonx/form', 'form-checkbox')
@customElement('form-checkbox')
export class FormCheckbox {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value;

  @bindable type = 'checkbox';

  @bindable name = '';

  @bindable label = '';

  @bindable classes = '';

  @bindable placeholder = '';

  @bindable readonly = false;

  @bindable disabled = false;

  @bindable options = {};
}
