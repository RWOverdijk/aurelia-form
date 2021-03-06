import {Config as ViewManagerConfig} from 'aurelia-view-manager';
import {getLogger} from 'aurelia-logging';

export const logger = getLogger('aurelia-form');

export * from './decorator/index';

export function configure(aurelia, config) {
  aurelia.aurelia.use.plugin('aurelia-view-manager');

  aurelia.container.get(ViewManagerConfig).configureNamespace('spoonx/form', {
    location: './view/{{framework}}/{{view}}.html'
  });

  let defaultComponents = [
    'aurelia-form',
    'form-element',
    'form-label',
    'form-button',
    'form-help',
    'form-error',
    'form-group',
    'entity-form'
  ];

  let defaultElements = [
    'input',
    'checkbox',
    'radio',
    'select',
    'textarea',
  ];

  aurelia.globalResources(
    './attribute/attributes',
    './attribute/prefixed',
    ...defaultComponents.map(component => `./component/${component}`),
    ...defaultElements.map(component => `./component/form-${component}`)
  );

  defaultElements.forEach(element => {
    config.elements[element] = `form-${element}`
  });
}

export const config = {
  'aurelia-form': {
    defaultElement: 'input',
    submitButton  : {
      enabled: true,
      options: ['primary'],
      label  : 'Submit'
    },
    elements      : {},
    validation    : {},
    aliases       : {
      enum   : 'radio',
      int    : 'input',
      integer: 'input',
      number : 'input',
      float  : 'input',
      string : 'input',
      bool   : 'checkbox',
      boolean: 'checkbox',
      text   : 'textarea'
    }
  }
};
