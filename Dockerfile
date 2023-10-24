FROM cypress/included:13.0.0

WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npm", "run", "cyrun"]