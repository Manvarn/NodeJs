var mongoose = require("mongoose");
var booksSchema = new mongoose.Schema(
{
    "title": {
        "type": "string"
    },
    "writer": {
        "type": "string"
    },
    "year": {
        "type": "number"
    },
    "actors": {
        "type": "array",
        "items": {
          "type": "string"
        }
    },
    "author": {
    "type": "object"
    },
    "properties": {
          "profile": {
            "type": "object"
        },
        "properties": {
            "courses": {
            "type": "number"
            },
            "books": {
            "type": "number"
            }
        }
    }
});

module.exports = mongoose.model('books', booksSchema); //mongoose database books

