'use strict';

require( 'dotenv' ).config();

const express_lib = require( 'express' );
const alexa_lib   = require( 'alexa-app' );

const PORT = process.env.PORT;

const express_app = express_lib();

// ALWAYS setup the alexa app and attach it to express
// before anything else
const alexa_app = new alexa_lib.app( '/' );

alexa_app.express( {
	expressApp : express_app,
	checkCert  : false,
	debug      : true
} );


var intent_name   = 'HelloAppIntent';
var intent_params = {
	'utterances' : ['hello', 'say hello', 'hello world']
};

alexa_app.launch( onLaunch );
alexa_app.intent( intent_name, intent_params, onIntent );

express_app.listen( PORT, onRequest );


function onLaunch( request, response ){
	response.say( 'You launched the app!' );
}

function onIntent( request, response ){
	response.say( 'Hello, I\'m alive! ' );
}

function onRequest(){
	console.log( 'Example app listening on port ${PORT}!' );
}