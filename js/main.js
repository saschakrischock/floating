$(function() {




    var googleSheetKey = '1QzXXi9vaztIcYM6MNXO60IrLVeK4biwPpgjYJQfRJOk';


    var url = 'https://spreadsheets.google.com/feeds/list/' + googleSheetKey + '/od6/public/values?alt=json';


    $.getJSON(url, function(data) {

        var entry = data.feed.entry;

            $($(entry).get().reverse()).each(function() {
            //make sure this matches your column labels when you change the source sheet
            $('.results').prepend('<div class='+'"item '+this.gsx$category.$t+'">'+this.gsx$word.$t+'<div class="description">'+this.gsx$description.$t+'</div></div>');
        });

    });
});


$( document ).ready(function() {

    var $range_one = $('.range-sediments');
    var $range_two = $('.range-viscosity');
    var $range_three = $('.range-contamination');

// Initialize
    $range_one.rangeslider({
        polyfill: false
    });
    $range_two.rangeslider({
        polyfill: false
    });
    $range_three.rangeslider({
        polyfill: false
    });

    $range_one.on('input', function(){
        if ( this.value > 3 ) {
            $('.visconsity').hide();
            $('.contamination').hide();
        }
        else {
            $('.visconsity').show();
            $('.contamination').show();
        }

    });

    $range_two.on('input', function(){
        if ( this.value > 3 ) {
            $('.sediments').hide();
            $('.contamination').hide();
        }
        else {
            $('.sediments').show();
            $('.contamination').show();
        }

    });

    $range_three.on('input', function(){
        if ( this.value > 3 ) {
            $('.sediments').hide();
            $('.visconsity').hide();
        }
        else {
            $('.sediments').show();
            $('.visconsity').show();
        }

    });


});

   /* $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
            doStuff(data);
        }
    });
    function doStuff(data) {
        if (data) {

            var feed = data.feed;
            var rows = feed.entry || [];
            var html = [];

            for (var i = 0; i < rows.length; ++i) {
                var row = rows[i];

                if (i === 0) {
                    html.push('<thead>', '<tr>');
                    for (var prop in row) {
                        if (prop.substring(0,4) === 'gsx$') {
                            html.push('<th>', prop.substring(4), '</th>');
                        }
                    }
                    html.push('</tr>', '</thead>');
                }

                html.push('<tbody>', '<tr>');
                for (var prop in row) {
                    if (prop.substring(0,4) === 'gsx$' && row[prop].$t !== 'undefined') { // sheet data cell
                        html.push('<td>', row[prop].$t, '</td>');
                    }
                }
                html.push('</tr>', '</tbody>');
            }
            document.getElementById('sheet').innerHTML = html.join('');

        }
    }


}); */