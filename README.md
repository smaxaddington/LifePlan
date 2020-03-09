Purpose:

This application allows users to structure their day to day activities around Simon Sinek's "Start With Why" philosophy (https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action?language=en).
Similar to how companies are structured around a vision/mission statement that drives all downstream business decisions, users are able to create 
their own "Why" statements and break down that why into "Hows", then "Whats", and finally tasks that can be inserted into the user's 
Google Calendar. It also gives users the ability to establish goals at the "What" level with expected completion time and expected outcome, to be 
updated with the actual completion time and outcome. At each level in the Why hierarchy, users can add "Reflections", serving as a journal of sorts.

Required technologies to run:
-Node.js (npm)
-Mongo
-Studio 3t (Mongo interpreter)

Running:
-Clone git repository into local repository
-Open studio 3t and create a new database called "LifePlan"
-Import file "MongoDump.zip" into the DB
-Navigate to LifePlan\server
-run command "npm start"
-Navigate to LifePlan\client
-run caommand "npm run dev"
-navigate to localhost:8080 in browser
