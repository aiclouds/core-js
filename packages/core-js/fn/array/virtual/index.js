require('../../../modules/es.array.join');
require('../../../modules/es.array.slice');
require('../../../modules/es.array.sort');
require('../../../modules/es.array.for-each');
require('../../../modules/es.array.map');
require('../../../modules/es.array.filter');
require('../../../modules/es.array.some');
require('../../../modules/es.array.every');
require('../../../modules/es.array.reduce');
require('../../../modules/es.array.reduce-right');
require('../../../modules/es.array.index-of');
require('../../../modules/es.array.last-index-of');
require('../../../modules/es.string.iterator');
require('../../../modules/es.array.iterator');
require('../../../modules/es.array.copy-within');
require('../../../modules/es.array.fill');
require('../../../modules/es.array.find');
require('../../../modules/es.array.find-index');
require('../../../modules/es.array.includes');

module.exports = require('../../../internals/entry-virtual')('Array');
