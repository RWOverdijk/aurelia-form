# Element

Certain properties on the element are reserved for extra features.

## Attributes

It is possible to set attributes on the input elements. The `attributes`
property is used for this. This allows one to use the html builtin
[input attributes](http://www.w3schools.com/TAGS/tag_input.asp)

## Hidden

In certain cases one would want to hide an element. A usecase where this
applies is when using the `<entity-form>`. One might not have control over the
schema that is generated by the entity-form component. One can however extend
the schema by using a decorator which extends the schema when generating it.