
const contacts = require('../model/Contacts')

exports.getAllContacts = (req, res)=>{

		res.json(contacts.getAllContacts())
}


exports.createContact = (req, res)=>{

	// console.log(req.body)
	let{name,phone,email} = req.body

	let contact = contacts.createContact({
		name,
		phone,
		email
	})
	res.json(contact)

}


exports.getContactById = (req, res)=>{

	// console.log(req.body)
	let { id } = req.params

	id = parseInt(id)


	let contact = contacts.getContactsById(id)
	console.log(contact)
	res.json(contact)

}




exports.updateContact = (req, res)=>{

	// console.log(req.body)
	let{id} = req.params

	id = parseInt(id)

	let {name,phone,email} = req.body
	let contact = contacts.updateContactById(id,{
		name,
		email,
		phone,

	})
	res.json(contact)

}





exports.deleteContact = (req, res)=>{

	// console.log(req.body)
	let{id} = req.params

	id = parseInt(id)

	let contact = contacts.deleteContactById(id)
	res.json(contact)

}
