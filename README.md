# node-notes-cli
A simple Notes CLI to help me learn more about NodeJS

## Usage
- `note new 'hello world' --tags bleep,bloop,blap`
  - Adds a new note.  The note can have comma-delimited tags.
- `note all`
  - Returns all of the notes in an easy to read format.
- `note find cat`
  - Returns notes where the content matches the argument provided after `find`.
- `note remove 1234`
  - Removes a note with an id that matches the argument provided after `remove`.
- `note web 4000`
  - Opens a web browser and displays all notes.  The web server will be launched on the port value provided after `web`.
- `note clean`
  - Will completely wipe out all notes.

## Notes
- I built this using node `v18.15.0`.
- To be able to run the `note` commands in my terminal, I had to navigate to the root of the project directory and run `npm link`.  
- I built this by following the example provided in [this Frontend Masters course](https://frontendmasters.com/courses/node-js-v3/).