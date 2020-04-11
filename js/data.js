window.onload = function () {

    // AJAX request to get table contents
    $.getJSON('../data/php/language_productivity.php', {column: null} )
    .done( function(data) { 
        populateLanguageTable(data); 
    })
    .fail( function() {
        console.error('Failed to retrieve data.');
    });

    $.getJSON('../data/php/project_history.php')
    .done( function(data) {
        populateProjectTable(data);
    })
    .fail( function() {
        console.error('Failed to retrieve data.');
    });
};

// Add data to table view
function populateLanguageTable(data) 
{
    for( i = 0; i < data.length; i++ )
    {
        $('#languageTable tr:last').after('<tr><td>' + data[i].LANGUAGE + '</td><td>' + data[i].LEVEL + '</td><td>' + data[i].AVERAGE_SOURCE_STATEMENTS_PER_FUNCTION_POINT + '</td></tr>');
    }
}

function populateProjectTable(data)
{
    for ( i = 0; i < data.length; i++ )
    {
        $('#projectTable tr:last').after('<tr><td>' + data[i]);
    }
}