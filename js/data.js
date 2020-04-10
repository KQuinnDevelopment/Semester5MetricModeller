window.onload = function () {

    $.getJSON('../data/php/language_productivity.php')
    .done( function(data) { 
        console.log('Retrieved data');
        populateTable(data); 
    })
    .fail(function() {
        console.log('Failed to retrieve data.');
    });
};

function populateTable(data) 
{
    for( i = 0; i < data.length; i++ )
    {
        console.log(i);
        $('#databaseTable tr:last').after('<tr><td>' + data[i].LANGUAGE + '</td><td>' + data[i].LEVEL + '</td><td>' + data[i].AVERAGE_SOURCE_STATEMENTS_PER_FUNCTION_POINT + '</td></tr>');
    }
}