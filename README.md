# Semester5MetricModeller
For the 5th Semester Analytics &amp; Metrics class @ Mohawk College

------------------------------------------------------------------------------------------------------------------------------------

EACH TEAM MEMBER MUST ADD A SINGLE FEATURE TO THE PROJECT 
  > Be creative 
  > This will explore an extra metric or factor 
  > Each team member might use a custom set of data 

------------------------------------------------------------------------------------------------------------------------------------

Use a database as a benchmark: 
  > You must produce “Field Definitions” documenting your understanding of each and every field in the database. 
    > Populate the database with 3-5 sample projects with size metrics 
  > You will create KLOC and function points and other fields that you consider useful 
  > This database will represent completed projects that we have measured 
  > You can invent the data, but be as real as possible 

Read in the language table and use it to aid in your calculations. 
  > For example, a past project in C# (productivity 6) took 1000 hours. It is the same number of function points as a new project 
  > You are building the new project in Ruby (productivity 7) so you will expect it to take 857 hours (1000 * 6/7) 
  > You might use some records that represent more popular languages and not include other records 

One field might be Project Type values 
  > Try to classify these various projects by type 
  > OO vs Linear 

Read in a number of inputs from the keyboard for a new project.  
  > Your program will calculate the size of the project 
  > It will use function point calculations similar to the online examples 
  > it will query the database you created to compare the new project to the database of completed ones 

Your modeler will calculate values that will show the size of the project (scope, cost, time) and output them 

------------------------------------------------------------------------------------------------------------------------------------

Here's what we need to do:
  > Create database
    > populate with values from csv provided by professor
    > add in a column to classify project type by object-oriented vs linear(??)

  > Write PHP to pull from database
    > show on data.html page
    > Write PHP to allow for edits to be made to data
      > each update button should allow for editing of that specific record when clicked (using javascript)
        > sanitize this user's inputs so that they cannot drop the table
      > each delete button should allow for deleting of that specific record when clicked

  > Write JS to calculate results based on queries to database
    > pull related information from database
      > results are output to the "formOutput" id on the calculator.html page, above the form

------------------------------------------------------------------------------------------------------------------------------------

https://elearn.mohawkcollege.ca/d2l/le/content/549969/viewContent/4835609/View 
https://elearn.mohawkcollege.ca/d2l/le/content/549969/viewContent/4835624/View 

Requirements (What we're being graded on):  

  > Calculate base function points, LOC, and time 
    -  Clear and correct 
  > Ease of use 
    -  Very easy, combo boxes where possible, screens and inputs are easy to understand 
  > Expandable and easy to modify 
    -  Use of versioning, comments, and good organization 
  > Estimation technique 
    - Good use of historical data, clear to understand 
    - Believable 