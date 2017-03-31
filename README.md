

# Ping Pong Pinger

#### A narration of a hypothetical game of ping pong! Watch it ping and pong at set intervals. 3/31/17

#### By Ben Williams

## Description

Inputting a number will create a count up to that number with pings and pongs occurring at set intervals.

## Setup/Installation Requirements
* User needs git pivotal scripts in their CLI. Project can be modified with a text editor such as Atom after it has been downloaded from GitHub.

## Specifications
  1. Make an array that can count up to the provided number (with a "for" loop).

    example input: 2
    example output: [1, 2]

  2. Make an "if" statement in the "for" loop that replaces every third word with ping. Have the count up to the provided number be captured by "else."

    example input: 4
    example output: [1, 2, ping, 4]

  3. Make an "if" statement in the "for" loop that replaces every 15th word with pingpong and shift the previous "if" statement into an "else if" statement.

    example input: 20
    example output: [1, 2, ping, 4, 5, ping ... 14, pingpong, 16 , 17, ping, 19, 20]

  3. Make an "else if" statement in the "for" loop that replaces every 5th word with pingpong.

    example input: 20
    example output: [1, 2, ping, 4, pong, ping ... 14, pingpong, 16 , 17, ping, 19, pong]

  4. Display the output in an array that will empty and reset after each input.

    first input: 4
    first output: [1, 2, ping, 4]
    second input: 2
    second output: [1, 2]

## Known Bugs

There are no known bugs. If you find one, please contact me at benjarwilliams at gmail dot com.

## Support and contact details

If you'd like to improve upon or use this project, please contact me at benjarwilliams at gmail dot com.

## Technologies Used

* Built with HTML, CSS, and JS.
* Used Bootstrap (CSS) and JQuery(JS).

### License

Completely open source.

Copyright (c) 2016 Ben Williams
