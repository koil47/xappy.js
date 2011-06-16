#!/usr/bin/env node
var _ = require('underscore');
var get = require('node-get');
var nodexml = require('node-xml');
//var libxmljs = require('libxmljs');

var prefix = 'http://xapi.osm.spline.de/api/0.6/';
//var prefix = 'http://jxapi.openstreetmap.org/xapi/api/0.6/';
var bbox = '[bbox=52.3418234221,13.0882097323,52.6697240587,13.7606105539]';
var tests = [
        'node',
        'node[amenity=pub]',
        'node[amenity=pub|cafe]',
        'node[name|name:de=spline]',
        'node' + bbox,
        'node[amenity=pub]' +  bbox,
        'way[highway=motorway]',
        'way[highway=motorway|trunk]',
        'way' + bbox,
        'way[name=Wasgenstraße]' + bbox,
        'relation[name=U3]',
        'relation[name=U3|U4]',
        'relation' + bbox,
        'relation[name=U3]' + bbox
        ];

var doTheTest = function(toTest) {
    toTest = prefix + toTest;
    //console.log(toTest);
    var download = new get(toTest);
    download.asString(function(error, string) {
        if(error) {
            console.error('Download for ' + toTest + ' failed.\n\tError:' + JSON.stringify(error));
        }
        else {
            console.log('Download completed for ' + toTest);
            try {
                //var xml = libxmljs.parseXmlString(string);
                var parser = new nodexml.SaxParser(function(cb) {});
                parser.parseString(string);
            }
            catch (e) {
                console.error('Error while parsing the data: ' + e);
            }
        }
    });
};


_.each(tests,doTheTest);
