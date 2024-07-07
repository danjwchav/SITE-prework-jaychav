# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Daniel Chavez

Time spent: 5 hours spent in total

Link to project: https://sulfuric-tourmaline-radish.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [ ] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
https://cdn.glitch.com/8a7bf2bc-0992-4bd6-b547-a083336ffabb%2FJChavez_Prework_Submission.gif?v=1616492628123

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

N/A

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

I had trouble generating a random pattern for each playing of the game - I haven't used Javascript since high school,
and it was a little difficult to remember the commands. However, I have been working with code I wrote in high school, and with a
some fiddling using console.log, I found the formula for generating an integer in a range using Math.random().

I find that while documentation helps in any language in reviewing old syntax and learning new tricks, most program goals can be solved this way.
I'm no stranger to typing and retyping code until it works for me, and working in CS through my two years in college has definitely taught me
patience when reading over my code; when you run into so many "syntax error" warnings when working through assignments, you learn to catch the small details
in your writing, like missing semicolons and misspelled functions. I can write methods well, but I can't be overlooked when it comes to
guessing-and-checking to debug, and I know in my group projects that patience in coding is a spectacular benefit that I think all programmers
could use, and it's something I can honestly say I've built for myself.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

I know that this lesson is a more basic overview of HTML website-creation, but I'm very interested in learning more about
how complex websites are built using it. As I said in the last question, I haven't used Javascript since high school, but even then,
I hadn't learned anything about the connection between .js files and .html. They seem similar to header and source files in C++; I wonder what the limitations
of HTML are in this system? It seems as though, while I've only used the system now, for the creation of a cool, game-app, there's
a lot more to be done with it, as long as you know how. I would love to learn someday - I've never gotten the chance (time and resources)
to learn HTML, but there are so many apps and projects I've seen people my age (and younger!) creating. I have a great passion for
computer science's accessibility, and I spend my free time digging into research and growing my knowledge in different corners of my knowledge,
so I have great respect for an easily-learned language with many not-so-hidden functions and limitless possibilities.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

I would love to add more display text to specify the functions I've added (including a live life-count display to make the number of remaining
tries more obvious to the player), but other than that, I'd love to learn how to do everything on the recommended "optional function list."

Also, if I had more time and a greater understanding of user input in HTML/Javascript/CSS, it would be cool to ask the user for their preferred number of rounds.
Given that user-input-variable, I could change the loop on my generatePattern() function (which creates a new "Secret Pattern") with each
game start to that variable, so the user could make the game as long or short as they wanted!

## License

    Copyright Jessica Chavez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
