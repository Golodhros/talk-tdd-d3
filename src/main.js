// RequireJS configuration
requirejs.config({

    baseUrl: '/',

    paths: {
      'd3': 'node_modules/d3/build/d3'
    },

    shims: {
      'd3': { exports: 'd3'}
    }
});


requirejs([
    'd3',
    'dist/bar.js'
    ], function(
        d3,
        bar
    ) {

    var dataset = [
        {
            letter: 'A',
            frequency: .08167
        },
        {
            letter: 'B',
            frequency: .01492
        },
        {
            letter: 'C',
            frequency: .02782
        },
        {
            letter: 'D',
            frequency: .04253
        },
        {
            letter: 'E',
            frequency: .12702
        },
        {
            letter: 'F',
            frequency: .02288
        },
        {
            letter: 'G',
            frequency: .02015
        },
        {
            letter: 'H',
            frequency: .06094
        },
        {
            letter: 'I',
            frequency: .06966
        },
        {
            letter: 'J',
            frequency: .00153
        },
        {
            letter: 'K',
            frequency: .00772
        },
        {
            letter: 'L',
            frequency: .04025
        },
        {
            letter: 'M',
            frequency: .02406
        },
        {
            letter: 'N',
            frequency: .06749
        },
        {
            letter: 'O',
            frequency: .07507
        },
        {
            letter: 'P',
            frequency: .01929
        },
        {
            letter: 'Q',
            frequency: .00095
        },
        {
            letter: 'R',
            frequency: .05987
        },
        {
            letter: 'S',
            frequency: .06327
        },
        {
            letter: 'T',
            frequency: .09056
        },
        {
            letter: 'U',
            frequency: .02758
        },
        {
            letter: 'V',
            frequency: .00978
        },
        {
            letter: 'W',
            frequency: .02360
        },
        {
            letter: 'X',
            frequency: .00150
        },
        {
            letter: 'Y',
            frequency: .01974
        },
        {
            letter: 'Z',
            frequency: .00074
        }
    ];
    var container = d3.select('.chart-container');
    var barChart = bar();

    container.datum(dataset).call(barChart);
});