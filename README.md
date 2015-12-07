# flog
Simple write to file logger

It let's you write strings to a file that will be written on the next tick. Essentially just a thin little layer that centralizes the file open logic.

Use like:

var flog = require('flog')('/the/path/to/my/log/file')


... some code later ...

flog('Some message I want recorded')


Require like:

"flog": "git+ssh://git@github.com/SpiderStrategies/flog.git"
