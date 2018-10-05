<h1> My Slack Bot</h1>

<h2>Slackbot Chicote</h2>

The code application has been developed with node.js.

Install the npm packages used in the project.

```npm install```

Npm packages installed:

- @slack/client
- node-env-file
- mongoose
- node-schedule
- jest


## Environment config

Now, you have to create a file called .env which contains the environment variables used in this project. In this case, the variable SLACK_TOKEN is the token associated to the bot, so copy it from your bot

TOKEN=xoxb-xxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx

Now the app is ready to run with the command

```npm start```

The bot can be initialized automatically in a certain time/date

Running the tests
Several test have been done for this project. The tests are running under Jest and you have to run the next command to execute them

```npm test```

Highlights
Tests
In this case, only simple functions have been tested since for the big functions it was necessary to mock the object rtm. So here, I have demonstrated that I know how to test but I never had the opportunity to test at a hight level.

I also save all asigened Leaders every friday on the DB.

I coudn't compare the new asigned Leaders with the DB. 

In future days I will complete all the Challenge.

Created by: **Teo Diaz**
