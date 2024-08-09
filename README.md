

## **Learning Goals**

-   Implement a mini web app to practice on components, props, state, events and data fetching in react

## **Introduction**

For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

## **Requirements**

For this project, you must:

-   Have a well-written README file.
-   Fetch data from a local server running JSON DB server.

### **Project Setup & Pre-requisite Data**

-   In your project directory, create a db.json file and use this [dataLinks to an external site.](https://docs.google.com/document/d/1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA/edit?usp=sharing) for your server DB.

-   Run this command to get the backend started: `json-server --watch db.json`

-   Test your server by visiting this route in the browser: `http://localhost:8001/transactions`

## **Project Setup**

Once you have the plan in place for the application you want to build take the following steps:

-   Create a new project folder.
-   Create a new GitHub repository (**NB: ENSURE IT IS PRIVATE**).
-   Add your TM as a contributor to the project. (**This is only for grading purposes**)
-   Please make sure you regularly commit to the repository.

## **Project Guidelines**

Your project should conform to the following set of guidelines:

### **Core Deliverables**

As a user, I can:

-   See a table of all transactions.
-   Fill out and submit the form to add a new transaction. This should add the new  transaction to the table * the new transaction does not have to be persisted to the backend *

-   Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### **Bonus Deliverables**

These bonus deliverables are here if you want an extra challenge and won't affect your score. **Make sure to commit your work to save your progress before attempting the bonus deliverables!**

As a user, I should be able to:

- Sort transactions alphabetically by category or description.

-   Delete a transaction which will remove it from the table.

_Happy hacking!_

## Rubric

Phase 2 Rubric

Phase 2 Rubric

Criteria

Ratings

Pts

This criterion is linked to a Learning OutcomeProps & State

4  pts

4

Advanced deliverables are met.

3  pts

3

State works and is held by the lowest common component. No unnecessary state is created. Only the necessary props are being passed down. Functions used to edit state are passed down.

2  pts

2

State is working. However, it may be in the wrong component, it might be nested oddly or might have some unnecessary state. Props are being passed unnecessarily to components. Functions that change or calculate state are not defined in the component that they are most closely tied to.

1  pts

1

State is not being set or updated. Props are not being passed down, or you are passing down the right prop but trying to access it incorrectly (wrong name, unnecessary this, state instead of props) or key props are missing. API call does not successfully populate state or does not rely on state at all (e.g. uses querySelector() to grab the value instead of passing the state).

0  pts

0

No code or very little code has been written or the code doesn't run. If it runs, no deliverables have been met. Not managed to set state or pass props successfully.

4  pts  

This criterion is linked to a Learning OutcomeCode Structure/Efficiency

2  pts

2

Advanced deliverables met. Uses some of the following: destructuring, functional components, spreading, hooks, pure functions, and performance is taken into account.

1.5  pts

1.5

Components are structured in a logical way. Class components only used when needed, functional components used for everything else. Code is abstracted into clear methods. Used object destructuring and spread operator successfully.

1  pts

1

Fetch is triggered in the right place. Code is not abstracted into clear methods. Additional components have been added which serve no purpose. Props and variables could be named consistently and descriptively.

0.5  pts

0.5

Starter components have been unnecessarily modified and broken. There is no reference to componentDidMount. Incorrect or unnecessary lifecycle methods are used. Vanilla JavaScript methods (e.g. querySelector()) are being used instead of appropriate React techniques.

0  pts

0

No code or very little code has been written or the code doesn't run, i.e. syntax errors, imports missing, etc. If it runs, no deliverables have been met.

2  pts  

This criterion is linked to a Learning OutcomeData Fetching

4  pts

4

Data is fetched correctly from a local JSON server and displayed in the app.

3  pts

3

Data is fetched from a local JSON server, but there are minor issues with the display.

1  pts

1

Data fetching is attempted but not working correctly or consistently.

0  pts

0

No data fetching implemented.

4  pts  

This criterion is linked to a Learning OutcomeTransactions Table

5  pts

5

The transactions table is correctly implemented, displays all transactions accurately and the form is fully functional, adding new transactions correctly to the table.

4  pts

4

The transactions table is implemented but may have minor display issues. Form adds new transactions but may have minor issues.

2  pts

2

The transactions table and the form are implemented but have significant display or functionality issues.

0  pts

0

No transactions table and form are present.

5  pts  

Total Points:  15

[Previous](https://moringa.instructure.com/courses/800/modules/items/125858)[Next](https://moringa.instructure.com/courses/800/modules/items/125859)