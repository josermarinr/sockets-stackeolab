# Implementantion of Notificaction like StakeoLab

## current problem 

inside stackeolab, when an user made any change, the others users in the same project, cant see the last update, only if the user reload the site. 

## methodology

OT, transformación operativa.

## problems in the implementation

We have a system, which is working, we must send an update notification to other people who are within the same forescast ROI and not to all users who use stackeoLAB

## what will we build?
For this implementation we are going to create a simple TODO's system, which will have a home page where you create your project or join an existing project. (We imagine that each forescast ROI must have a unique id).

Within the created project we will be able to see our project ide which we are going to share so that other users can enter and interact within it, both users will be able to see and auto-update when each of the users makes a change

# technology & library to use

* Nodejs 
* REACT **
* React Router 
* mongoDB
* mongoose
* Socket.io
* nodemon
* body-parse
* cors


# how to use

```
npm install


```

listening change with nodemon

```
nodemon dist 
```
or 

```
node dist 
```