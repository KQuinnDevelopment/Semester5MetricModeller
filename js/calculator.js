
window.onload = function () {
    this.populateLanguages();
    this.calculateFp();
    this.calculateLOC();
};

function populateLanguages() {
    $.getJSON('../data/php/language_productivity.php', {column: 'source'} )
    .done( function(data) {
        for( i = 0; i < data.length; i++ )
        {
            $('#language').append('<option languageID="' + data[i].ID + '" value="' + data[i].SOURCE + '">' + data[i].LANGUAGE + '</option>');
        }
    })
    .fail( function() {
        console.error('Failed to retrieve data.');
    });
};

function calculateLOC( fp ) {
    form = document.getElementById('calculateLOC');
    form.onsubmit = function(e) {
        e.preventDefault();
        source = parseInt(document.getElementById('language').value);
        loc = Math.round( source * fp ); 
        outputLOC = document.getElementById("outputLOC");
        outputLOC.innerHTML = "Lines of Code: " + loc;
    }
}

function calculateFp() {
    var form = document.getElementById('fpCalculator');
    form.onsubmit = function(e) {
        
        // Prevent clearing of inputs
        e.preventDefault();

        // Get weight factor for each information domain values
        inputsWeight = document.getElementsByName("inputsWeight");
        for ( i = 0; i < inputsWeight.length; i++ )
        {
            if ( inputsWeight[i].checked ) {
                input = inputsWeight[i].value;
            }
        }
        outputsWeight = document.getElementsByName("outputsWeight");
        for ( i = 0; i < outputsWeight.length; i++ )
        {
            if ( outputsWeight[i].checked ) {
                output = outputsWeight[i].value;
            }
        }
        inquiriesWeight = document.getElementsByName("inquiriesWeight");
        for ( i = 0; i < inquiriesWeight.length; i++ )
        {
            if ( inquiriesWeight[i].checked ) {
                inquiries = inquiriesWeight[i].value;
            }
        }
        filesWeight = document.getElementsByName("filesWeight");
        for ( i = 0; i < filesWeight.length; i++ )
        {
            if ( filesWeight[i].checked ) {
                files = filesWeight[i].value;
            }
        }
        interfacesWeight = document.getElementsByName("interfacesWeight");
        for ( i = 0; i < interfacesWeight.length; i++ )
        {
            if ( interfacesWeight[i].checked ) {
                interfaces = interfacesWeight[i].value;
            }
        }
        
        // Calculate Unadjust Function Points
        ufp = document.getElementById("inputs").value * input + document.getElementById("outputs").value * output + document.getElementById("inquiries").value * inquiries + document.getElementById("files").value * files + document.getElementById("interfaces").value * interfaces;
        
        // Sum technical complexity factor
        complexItems = document.getElementsByClassName("technical");
        technical = 0;

        for ( i = 0; i < complexItems.length; i++ )
        {
            technical += parseInt(complexItems[i].value);
        }
        
        // Calculate Technical Complexity Factor
        tcf = 0.65 + ( 0.01 * technical);
        // Calculate total function points
        // Round to one deciaml place
        fp = Math.round( (tcf * ufp) * 10 ) / 10;
        outputFP = document.getElementById("outputFP");
        outputFP.innerHTML = "Function Points: " + fp;

        calculateLOC(fp);
    };
};