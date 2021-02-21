//Name, Email, Password & Profile

const { Schema, model } = require('mongoose')


const userScheme = new Schema
				(

					{

							username: {type: String,trim: true,maxlength: 15,required: true},
							email: {type: String,trim: true,required: true},
							password: {type: String,required: true},
							
							profile: {},
				
					},

					{
						timestamps: true
					}
				)


const User = model('User',userScheme)
module.exports = User


