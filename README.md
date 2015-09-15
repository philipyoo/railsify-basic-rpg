# Railsify Basic RPG

## P1: Intro

This repo is an attempt to port over my previous Basic RPG project to Rails backend and React frontend. My previous Basic RPG project was made with mainly Sinatra, ActiveRecord, and Ruby, with some JavaScript, jQuery, ajax, Materialize CSS, and basic HTML.

Given the short amount of time we had on this project, I spent most of the first 2 days reading up about React and Rails. I worked on porting the user CRUD operations to Rails, and then was able to implement Character creations and incorporate some ReactJS. 

Basic RPG is a basic CRUD app with minor gameplay available. Unfortunately for this project, I could not implement the game portion of the app, but I learned a quite a bit about Rails and React.

## P2: Demo

Use case for this app would have been for casual gamers. The user would have been able to create characters, fight monsters with the characters, and level up their characters. 

## P3: Code

Using Rails, I was able to incorporate User login/registration, edit some account details, account deletion, and user show. For login/logout, I used Rails sessions with bcrypt encryption. 

Although I would have liked to incorporate React to all of my front-end, I only got it to work on my character creation page. Initially I had a lot of difficulty figuring out how to approach React-ifying my view page, considering how to break apart my view portions into separate components. 

After receiving some guidance, I split apart my logic using OOJS to increment/decrement the numbers for associated stats. I was able to create a new Character with initial state declared, and with rendered buttons on React, I would change the state using `this.forceUpdate();` in a separate function within my parent component.

For my character creation page, I broke apart my components with my parent being the rendered form, with state declared within this same parent. I used div tags to show the numbers representing stat points assigned so that a user could not click into an input box and manually update it. I wanted the user to assign stat points by pressing the up and down buttons. 

This parent class has 4 children: 4 separate buttons. Each button represents one stat and one direction (i.e. Attack, Defense, Up, and Down). Since state was being passed down as props to the children, I had to have a way for the children to tell the parent to update state. I did this using callback functions declared in the parent. 

Initially, I tried to build my character creation page by having a parent which had 2 children: a form and the div tags rendering state. The form itself had children with input fields. The div section had buttons as children. I tried to approach this page by breaking everything down as small as possible but ran into some difficulty with passing around props and some of the children did not really render much information and seemed pointless.

## P4 - Collaboration

Things I would like to add to this project:
- A User can edit/delete a character.
- A User can select a character and enter the game mode.
- A User can select a level to play.
- A Character can gain experience points.
- A Character can level up.
- A Character can heal up.
- A Character can assign its unassigned stat points (in edit).
- A User can exit game mode (either logout or go back to user profile page).

Others can contribute to this page by helping with any of the User stories listed above or by adding extra features or functionality to the game. There is definitely a ton of room for improvement, whether it be the CSS styling of the page, or adding some of the game logic like calculating character damage to a monster, or vice versa, amount of damage a character takes from a monster.

If you would like to contribute to this repo, please feel free to clone the repo and push with detailed commit messages. This app will mainly be Rails/JavaScript backend and React frontend, so please keep this in mind.

Thanks for reading!
