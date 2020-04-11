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
        $('#projectTable tr:last').after('<tr><td>' + data[i].project_number + '</td><td>' + 
                                            data[i].project_name + '</td><td>' + data[i].project_description + '</td><td>' + 
                                            data[i].project_type + '</td><td>' + data[i].start_date + '</td><td>' + 
                                            data[i].end_date + '</td><td>' + data[i].est_duration + '</td><td>' + 
                                            data[i].est_project_cost + '</td><td>' + data[i].act_project_cost + '</td><td>' + 
                                            data[i].est_effort + '</td><td>' + data[i].act_effort + '</td><td>' + dat[i].est_loc + '</td><td>' + 
                                            data[i].act_loc + '</td><td>' + data[i].est_fp + '</td><td>' + data[i].act_fp + '</td><td>' + 
                                            data[i].avg_cost_per_person_hour + '</td><td>' + data[i].avg_staffing_level + '</td><td>' + 
                                            data[i].design_review_hours + '</td><td>' + data[i].dev_lang + '</td>');
    }
}