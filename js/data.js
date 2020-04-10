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
        $('#databaseTable tr:last').after('<tr><td>' + data[i].LANGUAGE + '</td><td>' + data[i].LEVEL + '</td><td>' + data[i].AVERAGE_SOURCE_STATEMENTS_PER_FUNCTION_POINT + '</td></tr>');
    }
}