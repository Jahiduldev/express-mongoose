
class Contacts{

	constructor(){

		this.contacts = []
	}

	getAllContacts(){
		return this.contacts
	}

	getContactsById(id){
		return this.contacts.find(contact => contact.id === id)
	}

	createContact(contact){
		contact.id = this.contacts.length + 1;
		this.contacts.push(contact)
		return contact
	}

	UpdateContactById(id,UpdatedContact){

		this.contacts[index].name = UpdatedContact.name || this.contacts[index].name
		this.contacts[index].phone = UpdatedContact.phone || this.contacts[index].phone
		this.contacts[index].email = UpdatedContact.email || this.contacts[index].email


		return this.contacts[index]
	}


	deleteContactById(id){

		let index = this.contacts.findIndex(contact => contact.id === id)
		let deletedObj = this.contacts[index]
		this.contacts = this.contacts.filter(contact => contact.id === id)
		return deletedObj;
	}


}


module.exports = new Contacts()