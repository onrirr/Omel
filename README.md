# OMEL 

OMEL (Onrir's Minimalistic Easy Language) is a minimal file format for creating simple and easy to understand configuration files heavily insipired by [TOML](https://toml.io/en/). It is extremely lightweight with the entirety of the parser coming under 200 lines and 4kb minified.

```
port = 8000

[user]
  username = "Alex"
  password = "yousholdentstorepasswordsinplaintext"
  permissions = ["Administrator", "Moderator"]
```

![Logo](https://media.discordapp.net/attachments/1069307384230596658/1103750132983418890/test.png)


## Features

- Simple key/value pairs.
- Arrays and Sections.
- Supports various data types like strings, numbers, booleans and dates.
- Returns JavaScript objects.
- Familiar by design.


## Omel By Example

The entirety of Omel, in one example code sample.
```
port = 8000 # port to listen on
bool = true # boolean value
date = 2035-01-01 # date value
time = 12:00:00 # time value

array = [
  "test", "test2", "test3" # array of strings
]

[section]  # section name
  key = "value" # key value pair

  [section.subsection] # subsection
    key = "value" # key value pair
```

And how to use it;
```
const omel = require('omel');

const config = omel.read('config'); //-> reads file and parse it

const input = `
  id = 1
`
const output = omel.parse(input); //-> reads input string and parses it.
```
## Authors

- [@onrirr](https://www.github.com/onrirr)
