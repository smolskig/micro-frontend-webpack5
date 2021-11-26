# Webpack 5 micro frontend
This project is a implementation of micro-frontends using webpack 5 module federation

## Folders
- Home: A Home app
- Clients: A client app
- Orchestrator: A Navbar app, entry point for the other apps

## Module federation
Home and Clients apps share their routes via Webpack module federation, the Orchestrator get this external routes and integrates with his own router
![image](https://user-images.githubusercontent.com/50807768/143615065-5f2bf44c-5595-43cc-a5de-fb76314d17ca.png)

## How to run this implementation ?
First of all, you have to clone the monorepo and install all the dependencies, for all the projects.
```
$ yarn install
```
then you have to run each one of them in a separate terminal
```
$ yarn start
```
The default ports per project config are:
- Orchestrator: 9000
- Clients: 9001
- Home: 9002

## :star2: Done! :star2:
Now you just have to open your browser in the url of the orchestrator `localhost:9000/`
![image](https://user-images.githubusercontent.com/50807768/143615506-46542985-dcdb-49b5-9928-d61d4ad342d5.png)
