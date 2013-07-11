var format = require("./lib/format")

var MESSAGE = "Expected %s to be at least %d characters long"

module.exports = min

function min(n, message) {
    message = message || MESSAGE

    return function validate(value, key) {
        if (!value || value.length < n) {
            return { message: format(message, key, n), type: "min" }
        }
    }
}
