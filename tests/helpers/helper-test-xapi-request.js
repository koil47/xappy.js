var async_testing = require('async_testing');

var testObj = {
    object : 'node',
    bbox : {
        left : 21,
        right : 16,
        top : 0.9492,
        bottom : 23
    },
    tag : {
        key : ['name'],
        value : ['spline', 'cafete']
    }
};

var xapiTest = require('./helper-xapi-request');

module.exports = {
    /*'test-xapi-object' : function(test){
        xapiTest.test_xapi_request_object(test,testObj);
        test.finish();
    },

    'test-xapi-bbox' : function(test){
        xapiTest.test_xapi_request_bbox(test,testObj);
        test.finish();
    },

    'test-xapi-tag' : function(test){
        xapiTest.test_xapi_request_tag(test,testObj);
        test.finish();
    },*/
    'test-xapi-request' : function(test){
        xapiTest.test_xapi_request(test,testObj);
        test.finish();
    }
};

async_testing.run(__filename, process.ARGV);