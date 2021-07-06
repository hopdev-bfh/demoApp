# DemoApp

Employ Angular [1], the Angular Material Library [2] and an IDE of your choice (we suggest WebStorm) to develop a simple web app.

Task 1
------

a.  Display a material input field and a label with the text
"write something in the input field to change this label".

b. If the user types characters in the input field, update the
text on the label accordingly.

Task 2
------
a. Display two 2 tabs with different content.

b. If the user clicks on one of the tabs, the main content of 
the page changes accordingly.

Task 3
------

1. Create a pipe function that takes a string as input and validates the following:
   
   a. The given string is an integer
   
   b. The given string is at least 3 characters long
   
   c. The given string contains at least a 9
   
2. When the validation is wrong the system should return an error
   to the user explaining what condition failed.
   
3. Apply the pipe function to the input field from task 1

Task 4 [optional]
-----------------

1. Create a unit test that validates your pipe function in the following way
   
   a. Running the function with the input "test" shall return an error
   "the inserted text is not an integer"
   
   b. Running the function with the input "109" shall return "validated"
   
   c. Running the function with the input "11" shall return an error
   "the inserted text is too short and it does not contain a 9"

Remember that you have to use Angular Material for every component of the UI.

Once you have done at least tasks 1, 2 and 3, send us the link to the  GIT repo so that we can clone to review the code.


[1] Angular (https://angular.io/)

[2] Angular Material (https://material.angular.io/)


