window.onload = function () {

    // AJAX request to get table contents
    $.getJSON('../data/php/language_productivity.php', {column: null} )
    .done( function(data) { 
        populateTable(data); 
    })
    .fail( function() {
        console.error('Failed to retrieve data.');
    });
};

// Add data to table view
function populateTable(data) 
{
    for( i = 0; i < data.length; i++ )
    {
        $('#databaseTable tr:last').after('<tr><td>' + data[i].LANGUAGE + '</td><td>' + data[i].LEVEL + '</td><td>' + data[i].AVERAGE_SOURCE_STATEMENTS_PER_FUNCTION_POINT + '</td></tr>');
    }
}