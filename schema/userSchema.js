const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	dob: {
		type: Date,
		required: true
	},
	emailVerifiedAt: {
		type: Date
	},
	deletedAt: {
		type: Date
	}
}, { timestamps: true});

// MUTATION
userSchema.pre("save", function(next) {
	const user = this

	if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(saltError, salt) {
      if (saltError) return next(saltError)
      else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) return next(hashError);
          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;