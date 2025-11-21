const { defineConfig } = require('@cspell/cspell-types');

module.exports = defineConfig({
  version: '0.2',
  import: ['cspell-config-spellbookx'],
  language: 'it,en',
  words: [],
  dictionaryDefinitions: [
    {
      name: 'custom-words',
      path: './.cspell/custom-words.txt',
      addWords: true,
    },
  ],
  dictionaries: ['custom-words'],
});
