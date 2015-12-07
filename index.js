var fs = require('fs')

var createFlog = function(logLocation) {
	var stream = fs.createWriteStream(logLocation)
	var msgs = []
	
	return function(msg) {
		msgs.push(msg)
		process.nextTick(function() {
			while(msgs.length > 0) {
				stream.write(msgs.shift())
			}
		})
	}
	
}

module.exports = createFlog
