import Ember from 'ember';
import config from './config/environment';

 var quotes = require('../api/quote');
 module.exports = function(router) {


        router.route('/quotes').post(function(req, res) { console.log(req.body); quotes.addQuote(req,res); })
                              .get(function(req,res) { quotes.getAllQuotes(req,res) });
        router.route('*').get(function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file

        });

};

