'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utils = require('./utils');

/**
 * List of GET Endpoints available on the Destiny API
 */
var GET = [
  { name: 'Search', url: 'Destiny/SearchDestinyPlayer/${ membershipType }/${ name }/', required: ['membershipType', 'name'] },
{ name: 'Account', url: 'Destiny/${ membershipType }/Account/${ membershipId }/', required: ['membershipType', 'membershipId'] },
{ name: 'Character', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/', required: ['membershipType', 'membershipId', 'characterId'] },
{ name: 'Activities', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Activities/', required: ['membershipType', 'membershipId', 'characterId'] },
{ name: 'ActivityHistory', url: 'Destiny/Stats/ActivityHistory/${ membershipType }/${ membershipId }/${ characterId }/?definitions=true&mode=${ mode }', required: ['membershipType', 'membershipId', 'characterId', 'mode'] },
{ name: 'CarnageReport', url: 'Destiny/Stats/PostGameCarnageReport/${ activityId }/', required: ['activityId'] },
{ name: 'Inventory', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory/', required: ['membershipType', 'membershipId', 'characterId'] },
{ name: 'Progression', url: 'Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Progression/', required: ['membershipType', 'membershipId', 'characterId'] },
{ name: 'BungieUser', url: 'User/GetBungieNetUserById/${ membershipId }', required: ['membershipId'] },
{ name: 'BungieGroup', url: 'group/name/${ name }', required:['name']}

].map(_utils.UTILS.assignMap({ options: { method: _utils.UTILS.METHODS.GET, headers: _utils.UTILS.HEADERS } }));

/**
 * List of POST Endpoints available on the Destiny API
 */
var POST = [{ name: 'Equip', url: 'Destiny/EquipItem', required: ['characterId', 'itemId', 'membershipType'] }, { name: 'TransferItem', url: 'Destiny/TransferItem', required: ['characterId', 'itemId', 'itemReferenceHash', 'membershipType'] }].map(_utils.UTILS.assignMap({ options: { method: _utils.UTILS.METHODS.POST, headers: _utils.UTILS.HEADERS } }));

var ENDPOINTS = [].concat(GET, POST);

exports['default'] = ENDPOINTS;
module.exports = exports['default'];
