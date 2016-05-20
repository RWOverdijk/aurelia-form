# aurelia-form

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Makes working with forms just a tad more pleasant.

This library is an unofficial plugin for the [Aurelia](http://www.aurelia.io/) platform.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.durandal.io/). If you have questions, we invite you to [join us on Gitter](https://gitter.im/aurelia/discuss). If you would like to have deeper insight into our development process, please install the [ZenHub](https://zenhub.io) Chrome Extension and visit any of our repository's boards. You can get an overview of all Aurelia work by visiting [the framework board](https://github.com/aurelia/framework#boards).

## Features (currently)

- Generates forms based on a form schema
- Select what framework you would want to use
- Use the form elements belonging to the chosen framework or
- Overwrite the framework elements with a custom one.
- Custom elements for defining where and with what you would want to generate
  forms
- Always defaults to a input text element
- Two-way data binding by default.
- Nest schemas in schemas using the fieldset type

### Types

Depending on the framework your using, the available types might differ.

Choose one of the frameworks and see what aurelia-form has to offer.
*looking for others to support other frameworks*

- [Bootstrap](https://github.com/bas080/aurelia-form/tree/master/src/components/bootstrap)

## Installation

Make sure to execute these commands from project root.

### webpack

`npm install aurelia-form`

### jspm

`jspm install github:spoonx/aurelia-form`

## Configure

To get started some configurations are required. You could skip this step and
use the defaults that might not fit your project's needs.

```js
  aurelia.use
    .plugin('aurelia-form', config => {
      config.configure({
        translate: true,
        framework: 'bootstrap',
        components: {}
      });
    })
    .standardConfiguration()
    .developmentLogging();
```

## Usage

### Schema

Think of the schema as a standard way of describing what we want aurelia-form to
render. A schema is an array containing several attributes. The following is an
exaggerated example of a schema which shows all possible properties one could
define on the schema.

```js

  /* attributes of the schema are objects */
  let nameAttribute = {

    /* the name of the property in the model */
    name: 'name',

    /* read more if you want to know what types are supported */
    type: 'string',

    /* when true hides the label in the form-field */
    hide_label: false,

    /* when defined shows this as the label instead of the name property */
    label: 'user.name',

    /* these are set as actual html attributes on the dom element */
    attributes: {
    }

  };

  let typeAttribute = {
    name: 'type',

    /* will create a select element with options */
    type: 'select',

    /***
     * types that enable users to select one of the options require for the
     * options property to be defined in the attribute.
     */
    options: [
      {value: 'ice', name: 'Ice man'},
      {value: 'fire', name: 'Fire girl'},
      {value: 'earth', name: 'Earh mirl'},
      {value: 'air', name: 'Air gam'}
    ],

    hide_label: false,
    label: 'user.name'
  };

  /* the schema is always an array */
  let userSchema = [
    nameAttribute,
    typeAttribute
  ];

  /***
   * Nesting schemas is a feature. The type that enables you to nest
   * schema's is the fieldset type. Let's assume that a user is part of a group
   */

  let groupName = {...};

  let groupOwner = {

    /***
     * fieldset knows it is not getting bound to a property of a model. It's
     * expecting a new model/object
     */
    type: 'fieldset',

    /* add the userSchema to the schema property (required) */
    schema: userSchema,

    attributes: {...}
  }

  let groupSchema = [
    groupName,
    groupOwner
  ];

```

Having a schema is not enough. We also need data to populate it. That is where
the name property in our schema definitions come into play. Let's make a simple
model for our view. Nohing new here, just javascript and Aurelia

### Model

A schema is not enough though. If you define the model/object with properties
defined, the generated form will show these values and update the property
values. If the properties are not defined it will work too. **However**, if the
object is not defined, it will throw an error which means that the object of
which it was trying to set the property is undefined. Just like javascript
would. Makes sense?

```js
  /* ./person.js */

  export class Person {

    userSchema = userSchema // assuming we defined userSchema

    groupSchema = groupSchema  // assuming we defined groupSchema

    /* minimal required models (just the objects) */

    userModel = {}

    groupModel = {
      owner = {}
    }

  }
```

Now that we have both a schema to define what the form should look like, and the
view model that will bind to the form elements, we now can use a custom element
to generate this form.

### View

Aurelia-form provides several custom elements. They give different levels of
granularity when building a form. You might want to reuse the schema and the
model but would only want several of the elements to be rendered. Or you want
a fancy layout that requires you to have a form element here and there.
Aurelia-form let's you decide.

#### <schema-form>

Generate a complete form using the schema

```html

  <schema-form
    schema="userSchema"
    model="userModel">
  </schema-form>

```

#### <form-fields>

Generates all the form fields without the form and fieldset around it. Handy for
when you want more control when composing a single form.

```html

  <form-fields
    model.bind="userModel"
    schema.bind="userSchema">
  </form-fields>

```

#### <form-field>

When things get really detailed you can choose to only generate a single form
field. Only generates a label (if hide_label is not true) and an "input" like
field.

```html

  <form-field
    value.bind="userSchema.name"
    schema.bind="userSchema">
  </form-field>

```

### Translations

Aurelia-form uses aurelia-i18n to perform translations. It uses either the key
or the label property on the schema's attributes as keys to find the
translations. You can read more about aurelia-i18n here:
https://github.com/aurelia/i18n

### Validation

This section is a work in progress. A good candidate might be aurelia-validatejs
to perform validation and append errors to the form fields

## Platform Support

Aurelia-form is built on aurelia. Wherever aurelia runs, aurelia-form should run
also.

## Roadmap

- define two-way databinding in the view model and not make users have to write
  two-way all the time
- check if everything works when validation is not being used
- Could rename the name property in the schema to key which makes more sense
- Start using DOM.Element instead of the Element
  https://leanpub.com/aurelia-for-real-world-applications/read#leanpub-auto-difference-between-element-and-domelement

## Contributing

You can help by reporting and/or fixing bugs.

Help with implementing and improving support for your favorite html, css and js
framework. Anyone using Foundation, Polymer or other cool stuff?

## License

MIT
