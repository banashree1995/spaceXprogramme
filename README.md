# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Project Structure:

The project is about SpaceX Programme and the details of the Space X Mission data .
Landing Page consist of the 100 space X programes data.
Each block represent a single spaceX programe.

Details in a single programe :
Mission Name and Number > It represents the name of the mission and number . 
Mission Ids > It represents missions ids.
Launch Year > It represents the year of the mission launch.
Successful Launch > It represents the status of the launch wheather it is succesful or failure.
Succesful Land > It represents the status of the landing wheather it is succesful or failure.

### Filters:

Landing Page contains three types of filters to filter the data .

1)Year Filter > Contains the launch years 
2)Successful Launch Filter > contain the status of the launch
3)Successful Land Filter > conatins the status of the landing

By clicking on the Year filter it filters the data based on launch year , launch and land filter .

 Sample URL: 
 https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

By Clicking on the Launch filter it filters the data based on the launch status .

 Sample URL:
 https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true

By Clicking on the Land FIlter it filters the data based on the launch status and land status.

 Sample URL:
 https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true

NOTE:
All filters are limited to only 100 records.

# Code Structure

Project Consist of a main class(component) App.js .
On executtion of the app , App.js is called and the landing page and Filter functionality is integrated in this file.
index.css is used for styling of the app.
For Mobile View, Table View and Desktop View resolutions css is handled using @media styles.






