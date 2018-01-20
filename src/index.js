/**
 * Project: Spartahack2018
 * File name: index
 * Created by:  joshbenner on 1/20/18.
 *
 * Outside references:
 *
 * Purpose:
 */
"use strict";

const app = require( "express" )();
const http = require( "http" ).Server( app );
let io = require('socket.io')(http);

const PORT = 3000;

app.get( "/", function( req, res ) {
    res.send( "<h1>Hello world</h1>" );
} );

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen( PORT, function() {
    console.log( `listening on port :${PORT}` );
} );
    
