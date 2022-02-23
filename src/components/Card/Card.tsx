import * as React from "react";

type CardProps = {
  contact:{fname:string, surname: string, phone: number[], picture:string}
};

const Card: React.FC<CardProps> = (Props: CardProps) => {
  return <div>
  <img src={Props.contact.picture}/>
  <p>Name: {Props.contact.fname}</p>
  <p>Surname: {Props.contact.surname}</p>
  <p>Home phone number: {Props.contact.phone[1]}</p>
  <p>Mobile phone number: {Props.contact.phone[0]}</p>
</div>;
};

export default Card;
