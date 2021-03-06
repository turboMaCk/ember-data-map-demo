/**
 * @description Demo app using Google Map Api 3 in Ember.js and Ember Data base single page app.
 * @author Marek Fajkus @turbo_MaCk
 * @license http://sam.zoy.org/wtfpl WTFPL v.2
 * @version 0.0.2
 */

var EmberDataMapDemo = window.EmberDataMapDemo = Ember.Application.create();

/* Order and include as you please. */
require('scripts/store');
require('scripts/router');
require('scripts/routes/*');
require('scripts/controllers/*');
require('scripts/models/*');
require('scripts/views/*');
