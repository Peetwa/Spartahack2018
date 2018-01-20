/**
 * Project: Spartahack2018
 * File name: index
 * Created by:  joshbenner on 1/20/18.
 *
 * Outside references:
 *
 * Purpose:
 */
'use strict';

let express = require( "express" );

let router = express.Router();
const User = require('../models/user.js');

require( "./tools" )( router, User );


module.exports = router;
