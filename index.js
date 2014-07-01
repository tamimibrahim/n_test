var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false,        // use these settings
      userAgent:  'Mozilla/5.0 (Macintosh; Intel Mac OS X)'
    },
  verbose:false,
    logLevel: "debug"
});

casper.start('http://www.prothom-alo.com', function() {
    this.fill('form#vote_the_poll', {
        'the_vote':   'no'
    }, false);
});

casper.then(function() {
    this.click('#submit_the_poll a');
});

casper.then(function(){
  this.wait(2000,function(){
    this.echo('waited 2 sec');
  });
});

casper.then(function() {
    this.echo(this.fetchText('#jwPollAjaxWorking'));
    this.echo(this.fetchText('div.total_vote_container'));
});

casper.run();