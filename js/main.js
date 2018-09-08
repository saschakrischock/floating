window.setInterval(function(){
    $(function() {

        var googleSheetKey = '1BEklIjID70zduW2cfpLR1AC8Za0V6QncvmHZVOnkFQE';

        var url = 'https://spreadsheets.google.com/feeds/list/' + googleSheetKey + '/od6/public/values?alt=json';
        $.ajax({
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


    });
}, 1000);