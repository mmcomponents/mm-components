const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) => readdirSync(source)
  .map((name) => join(source, name)).filter(isDirectory);

const BASE_DIR = join(__dirname, 'modules', 'components');

const componentsDirectories = getDirectories(BASE_DIR);

const components = {};

componentsDirectories.forEach((directory) => {
  // eslint-disable-next-line
  const component = require(directory);
  components[component.name] = component;
});

export default {
  ...components,
};
