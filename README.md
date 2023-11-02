# CypressCaptchaPoC

## How to run the project using docker
1. Run the following command, where "cypress-captcha" is the name of the docker image:

    ```bash
    docker build -t cypress-captcha .
    ```
2. Run the following command, where "cypress-captcha" is the name of the docker image:

    ```bash
    docker run -it cypress-captcha -b chrome
    ```
    The "-it" will allow you to create an interactive terminal to add some arguments in the command, like the browser or a specific test.
3. To execute an specific test, run the following command, where "cypress/e2e/tests/captcha.cy.js" is the relative path of the test that you want to run:

    ```bash
    docker run -it cypress-captcha --spec ./cypress/e2e/tests/captcha.cy.js -b chrome
    ```
## How to run the project using docker compose   
1. Run the following command, this will execute the cypress container as well as running SonarQube locally:
    ```bash
        docker compose up
    ```
2. Access http://127.0.0.1:9000 to see SonarQube running
    ```bash
        username: admin
        password: <check user.json file>
    ```
3. After cypress is done executing reports can be found on /cypress/results folder, if you wish to re-execute only cypress use the command:
    ```bash
        docker compose up --build cypress
    ```