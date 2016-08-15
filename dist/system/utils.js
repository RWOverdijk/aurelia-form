'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      function normalizeOptions(options) {
        return options.map(function (option) {
          if (typeof option === 'string') {
            return {
              name: option,
              value: option
            };
          }

          if (option.name && option.value) {
            return option;
          }

          if (option.name || option.value) {
            return {
              name: option.name || option.value,
              value: option.name || option.value
            };
          }
        });
      }

      _export('normalizeOptions', normalizeOptions);
    }
  };
});