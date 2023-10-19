# Flight Booking Service

### To setup follow the following steps

- clone this repository to your machine
- cd to the project directory
- install all the dependencies using `npm i` in the project root directory
- create a new .env file and add following entries or modify existing one with your configuration if present
  - add
    ```
    PORT=<YOUR_PORT_NO.>
    ```
- create a new file `config.json` with following content or edit existing one if present
  ```
  {
    "development": {
        "username": "<YOUR_DB_USERNAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "<YOUR_DB_NAME>",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "<YOUR_DB_USERNAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "<YOUR_DB_NAME>",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "<YOUR_DB_USERNAME>",
        "password": "<YOUR_DB_PASSWORD>",
        "database": "<YOUR_DB_NAME>",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
  }
  ```
- now you are good to go, head to the project root directory and run command `npm start`
