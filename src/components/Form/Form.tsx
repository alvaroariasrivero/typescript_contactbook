import * as React from "react";
import { parseCommandLine } from "typescript";
import Card from '../Card';

const initialContacts: Array<Contact> = [
  { fname:'Marie', surname: 'Sørensen', phone: 666555444, picture:'https://randomuser.me/api/portraits/women/51.jpg'},
  {  fname: 'Dwayne', surname: 'Meyer', phone: 666444444, picture:'https://randomuser.me/api/portraits/men/57.jpg'}
];

const Form: React.FC = () => {

  const [contacts, setContacts] = React.useState(initialContacts)

  const createContact = (fname: string, surname: string, phone: number, picture: string) => {
    const newContact = {fname, surname, phone, picture}
    setContacts([...initialContacts, newContact])
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
      const fname: string = event.currentTarget.fname.value;
      const surname: string = event.currentTarget.surname.value;
      const phone: number = event.currentTarget.phone.value;
      const picture: string = event.currentTarget.img.value;
    createContact(fname, surname, phone, picture)
  }

  const paintContacts = () => {
    return contacts.map((contact,i)=> <Card contact={contact} key={i}/>)
  }

  return <><form onSubmit={handleSubmit}>
            <label htmlFor="fname">Name: </label>
            <input type="text" name="fname"/>
            <label htmlFor="surname">Surname: </label>
            <input type="text" name="surname"/>
            <label htmlFor="phone">Phone number: </label>
            <input type="number" name="phone"/>
            <label htmlFor="img">Picture URL: </label>
            <input type="text" name="img"/>
            <input type="submit" value="Save"/>
          </form>
          <div>{paintContacts()}</div>
        </>;
};

export default Form;
