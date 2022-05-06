//https://randomuser.me/api/

import {FC, useState, FormEvent} from "react";
import Card from '../Card';

const initialContacts: Array<Contact> = [
  { fname:'Marie', surname: 'Sørensen', phone: [666555444, 915557867], picture:'https://randomuser.me/api/portraits/women/51.jpg'},
  {  fname: 'Dwayne', surname: 'Meyer', phone: [666444444, 918768987], picture:'https://randomuser.me/api/portraits/men/57.jpg'}
];

const Form: FC = () => {

  const [contacts, setContacts] = useState(initialContacts)

  const createContact = (fname: string, surname: string, phone: number[], picture: string) => {
    const newContact = {fname, surname, phone, picture}
    setContacts([...contacts, newContact])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const fname: string = event.currentTarget.fname.value;
    const surname: string = event.currentTarget.surname.value;
    const phone: number[] = [parseInt(event.currentTarget.homePhone.value), parseInt(event.currentTarget.mobilePhone.value)]
    const picture: string = event.currentTarget.img.value;
    createContact(fname, surname, phone, picture)
  }

  const paintContacts = () => contacts.map((contact,i)=> <Card contact={contact} key={i}/>)

  return <><h1>Contact Book</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fname">Name: </label>
              <input type="text" name="fname"/>
            </div>
            <div>
              <label htmlFor="surname">Surname: </label>
              <input type="text" name="surname"/>
            </div>
            <div>
              <label htmlFor="homePhone">Home phone number: </label>
              <input type="tel" name="homePhone" pattern="[0-9]{9}"/>
            </div>
            <div>
              <label htmlFor="mobilePhone">Mobile phone number: </label>
              <input type="tel" name="mobilePhone" pattern="[0-9]{9}"/>
            </div>
            <div>
              <label htmlFor="img">Picture URL: </label>
              <input type="text" name="img"/>
            </div>
            <input type="submit" value="Save"/>
          </form>
          <div className="list">{paintContacts()}</div>
        </>;
};

export default Form;
