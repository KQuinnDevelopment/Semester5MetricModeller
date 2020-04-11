
window.onload = function () {
    this.populateLanguages();
    this.calculateFp();
    this.calculateLOC();
    this.calculateEAF();
};

function calculateEAF() {
    
    form = document.getElementById('calculateEAF');

    form.onsubmit = function(e) {

        e.preventDefault();

        eafValues = [];
        reliabilityFactor = document.getElementsByClassName('reliability');
        for ( i = 0; i < reliabilityFactor.length; i++ )
        {
            if ( reliabilityFactor[i].checked )
            {
                eafValues.push( parseFloat( reliabilityFactor[i].value ) );
            }
        }

        sizeFactor = document.getElementsByClassName('size');
        for ( i = 0; i < sizeFactor.length; i++ )
        {
            if ( sizeFactor[i].checked )
            {
                eafValues.push( parseFloat( sizeFactor[i].value ) );
            }
        }

        complexityFactor = document.getElementsByClassName('complexity');
        for ( i = 0; i < complexityFactor.length; i++ )
        {
            if ( complexityFactor[i].checked )
            {
                eafValues.push( parseFloat( complexityFactor[i].value ) );
            }
        }

        runtimeFactor = document.getElementsByClassName('runtime');
        for ( i = 0; i < runtimeFactor.length; i++ )
        {
            if ( runtimeFactor[i].checked )
            {
                eafValues.push( parseFloat( runtimeFactor[i].value ) );
            }
        }

        memoryFactor = document.getElementsByClassName('memory');
        for ( i = 0; i < memoryFactor.length; i++ )
        {
            if ( memoryFactor[i].checked )
            {
                eafValues.push( parseFloat( memoryFactor[i].value ) );
            }
        }

        volatilityFactor = document.getElementsByClassName('volatility');
        for ( i = 0; i < volatilityFactor.length; i++ )
        {
            if ( volatilityFactor[i].checked )
            {
                eafValues.push( parseFloat( volatilityFactor[i].value ) );
            }
        }

        turnaboutFactor = document.getElementsByClassName('turnabout');
        for ( i = 0; i < turnaboutFactor.length; i++ )
        {
            if ( turnaboutFactor[i].checked )
            {
                eafValues.push( parseFloat( turnaboutFactor[i].value ) );
            }
        }

        analystFactor = document.getElementsByClassName('analyst');
        for ( i = 0; i < analystFactor.length; i++ )
        {
            if ( analystFactor[i].checked )
            {
                eafValues.push( parseFloat( analystFactor[i].value ) );
            }
        }

        applicationsFactor = document.getElementsByClassName('applications');
        for ( i = 0; i < applicationsFactor.length; i++ )
        {
            if ( applicationsFactor[i].checked )
            {
                eafValues.push( parseFloat( applicationsFactor[i].value ) );
            }
        }

        engineerFactor = document.getElementsByClassName('engineer');
        for ( i = 0; i < engineerFactor.length; i++ )
        {
            if ( engineerFactor[i].checked )
            {
                eafValues.push( parseFloat( engineerFactor[i].value ) );
            }
        }

        vmFactor = document.getElementsByClassName('vm');
        for ( i = 0; i < vmFactor.length; i++ )
        {
            if ( vmFactor[i].checked )
            {
                eafValues.push( parseFloat( vmFactor[i].value ) );
            }
        }

        languageFactor = document.getElementsByClassName('language');
        for ( i = 0; i < languageFactor.length; i++ )
        {
            if ( languageFactor[i].checked )
            {
                eafValues.push( parseFloat( languageFactor[i].value ) );
            }
        }

        methodsFactor = document.getElementsByClassName('methods');
        for ( i = 0; i < methodsFactor.length; i++ )
        {
            if ( methodsFactor[i].checked )
            {
                eafValues.push( parseFloat( methodsFactor[i].value ) );
            }
        }

        toolsFactor = document.getElementsByClassName('tools');
        for ( i = 0; i < toolsFactor.length; i++ )
        {
            if ( toolsFactor[i].checked )
            {
                eafValues.push( parseFloat( toolsFactor[i].value ) );
            }
        }

        scheduleFactor = document.getElementsByClassName('schedule');
        for ( i = 0; i < scheduleFactor.length; i++ )
        {
            if ( scheduleFactor[i].checked )
            {
                eafValues.push( parseFloat( scheduleFactor[i].value ) );
            }
        }

        B = 1;
        for ( i = 0; i < eafValues.length; i++ ) 
        {
            if ( ! isNaN( eafValues[i] ) )
            {   
                B *= eafValues[i];
                console.log(eafValues[i]);
            }
        }

        type = document.getElementsByName('type');
        for ( i = 0; i < type.length; i++ )
        {
            if ( type[i].checked )
            {
                console.log(type[i]);
                A = parseFloat( type[i].getAttribute('a') );
                C = parseFloat( type[i].getAttribute('c') );
                D = parseFloat( type[i].getAttribute('d') );
                E = parseFloat( type[i].getAttribute('e') );
            }
        }
        outputLOC = document.getElementById("outputLOC");
        kloc = parseInt( outputLOC.getAttribute("loc") ) / 1000;
        effort = A * B * ( Math.pow( kloc, C ) );
        effort = Math.round( effort * 10 ) / 10;
        time = D * ( Math.pow( effort, E ) );
        time = Math.round( time * 10 ) / 10;
        staff = effort / time;
        outputEffort = document.getElementById('effort');
        outputEffort.innerHTML = "Estimated effort in person months: " + effort;
        outputTime = document.getElementById('time');
        outputTime.innerHTML = "Total months estimated for project: " + time;
        outputStaffing = "Average staffing necessary: " + staff + " people.";
    };
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

function calculateLOC() {
    outputFP = document.getElementById("outputFP");
    fp = outputFP.getAttribute('fp');
    form = document.getElementById('calculateLOC');
    form.onsubmit = function(e) {
        e.preventDefault();
        source = parseInt(document.getElementById('language').value);
        loc = Math.round( source * fp ); 
        outputLOC = document.getElementById("outputLOC");
        outputLOC.innerHTML = "Lines of Code: " + loc;
        outputLOC.setAttribute("loc", loc);
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
        outputFP.setAttribute("fp", fp);
    };
};