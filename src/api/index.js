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
const User = require('../models/user.js');


function router(io){
    let router_running = express.Router();
    require( "./tools" )( router_running, User, io );
    require( "./user" )( router_running, User );
    require( "./procedure" )( router_running, User );

}

module.exports = router;
