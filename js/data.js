window.onload = function () {

    $.get('localhost/Semester5MetricModeller/data/php/language_productivity.php')
    .done( function(data) { populateTable(data) } )
    .fail(function() {
        console.log('Failed to get data from database.');
    });
};

function populateTable(data) 
{
    for( i = 0; i < data.length; i++ )
    {
        console.log(i);
    }
}