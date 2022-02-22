import * as React from "react";

type CardProps = {
  contact:{fname:string, surname: string, phone: number, picture:string}
};

const Card: React.FC<CardProps> = (Props: CardProps) => {
  return <div>
  <img src={Props.contact.picture}/>
  <p>Name: {Props.contact.fname}</p>
  <p>Surname: {Props.contact.surname}</p>
  <p>Phone Number: {Props.contact.phone}</p>
</div>;;
};

export default Card;
