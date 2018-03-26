/**
 * Project: Spartahack2018
 * File name: database
 * Created by:  joshbenner on 1/20/18.
 * Copyright: GrowthChart Records Inc. All Rights Reserved
 *
 * Outside references:
 *
 * Purpose:
 */
'use strict';

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://167.99.4.180:27017/trackor',function(err){
    if(err){
        console.log("Failed to connect to mongodb");
    }
    else{
        console.log("Successfully connected to mongodb");
    }
});