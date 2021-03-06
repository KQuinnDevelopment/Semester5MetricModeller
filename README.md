# Semester5MetricModeller
For the 5th Semester Analytics &amp; Metrics class @ Mohawk College
--------------------------------------------------------------------------------------------------------------------------------

SETUP

Database
  - create database named 'metric_modeller'
  - run both sql scripts located in data/sql/
  - adjust data/config/db.php file to refelct your server's credentials
  - copy folder to web server root, or wherever you would like to serve it from
  - navigate to location in web browser
  - GOOD TO GO

--------------------------------------------------------------------------------------------------------------------------------

FIELD DEFINITIONS (Relevant Columns)

language_productivity table
  - Language name is self explanatory
  - Level of a language is based on how many statements are required to complete one function point of the proposed project.
    This gives a basis to compare the proposed project size from one language to another
  - Average statements per function point is the average number of lines of code required to complete a function point in that language
  - field 4 I have no idea, it appeared when I converted the accessdb file to sql, and i couldn't be bothered to remove it

project_history table
  - estimated duration is how long the project is expected to take, I believe the duration is in person months
  - estimated project cost is how much the project will cost to build, person months -> person hours -> person hours multiplied by average hourly rate
  - actual project cost would be how much they actually paid to have it built
  - estimated effort is the amout of person months generated by the cocomo model, or whichever model was used to generate this estimate
  - actual effort is the actual amount of person months required for the project to be built
  - estimated lines of code is found by calculating the function point and using the language table to find the average lines of code
    per function point andthe product of those two values is the estimated lines of code
  - actual lines of code would be the total number of lines of code produced for the project to function
  - estimated function points are a result of a calculation regarding the relevance of 5 major areas and then taking into account the technical 
    complexity factors
  - actual function points would the actual number of function points that ended up being needed
  - the expected error rate is an estimate of how many errors will be encountered while developing the project
  - avg cost per person hour can be found by taking the salaries of those involved (assuming equal amount of work for all)
    dividing it among total person hours per year, then multiply that by estimated person hours for the project
  - average staffing level can be found by taking the effort (calculated through COCOMO) and dividing that by the estimated time (calculated via COCOMO)
  - design review hours take place before any work estimates are done, and are not factored in when getting the functin points
    But they are calculated as a function of the effort multiplied by a relatively stable coefficient
  - errors found are the actual errors encoutnered when developing the project (bugs)
  - defects reported are bugs in production, or discovered upon delivery to the client
  - dev language is the language(s) used when developing the application
  - language productivity factor is based on how many statements are required to complete one function point of the proposed project.
    This gives a basis to compare the proposed project size from one language to another
  - critical path method tasks defined are the number of items declared on the critical path when the project manager plans out the project
  - doc pages are the number of pages of documentation that will be included with the project
