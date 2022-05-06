import {FC} from 'react';

const Card: FC<CardProps> = (Props: CardProps) => {
  return <div className='contact'>
  <img src={Props.contact.picture} alt={Props.contact.fname}/>
  <p>Name: {Props.contact.fname}</p>
  <p>Surname: {Props.contact.surname}</p>
  <p>Home phone number: {Props.contact.phone[1]}</p>
  <p>Mobile phone number: {Props.contact.phone[0]}</p>
</div>;
};

export default Card;
