
window.onload = function () {
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
        tcf = 0.65 + ( 0.1 * technical);
        // Calculate total function points
        // Round to one deciaml place
        fp = Math.round( (tcf * ufp) * 10 ) / 10;
        outputDiv = document.getElementById("formOutput");
        outputDiv.innerHTML = "Function Points: " + fp;
        // Debug output
        console.log("Function Points: " + fp);
    };
};