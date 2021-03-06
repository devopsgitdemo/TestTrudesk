/*
      .                              .o8                     oooo
   .o8                             "888                     `888
 .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
   888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
   888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
   888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
   "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 ========================================================================
 Created:    06/21/2016
 Author:     Chris Brame

 **/

var mongoose = require('mongoose');

var COLLECTION = 'settings';

/**
 * Setting Schema
 * @module models/setting
 * @class Setting

 *
 * @property {object} _id ```Required``` ```unique``` MongoDB Object ID
 * @property {String} name ```Required``` ```unique``` Name of Setting
 * @property {object} value ```Required``` Value of Setting
 */
var settingSchema = mongoose.Schema({
    name:       { type: String, required: true, unique: true },
    value:      { type: mongoose.Schema.Types.Mixed, required: true}
});

/**
 * Return all Settings
 *
 * @memberof Setting
 * @static
 * @method getSettings
 *
 * @param {QueryCallback} callback MongoDB Query Callback
 */
settingSchema.statics.getSettings = function(callback) {
    var q = this.model(COLLECTION).find({}).select('name value');

    return q.exec(callback);
};

/**
 * Return Single Setting via setting name
 *
 * @memberof Setting
 * @static
 * @method getSettingByName
 *
 * @param {String} name Name of Setting to search for
 * @param {QueryCallback} callback MongoDB Query Callback
 */
settingSchema.statics.getSettingByName = function(name, callback) {
    var q = this.model(COLLECTION).findOne({name: name});

    return q.exec(callback);
};

module.exports = mongoose.model(COLLECTION, settingSchema);