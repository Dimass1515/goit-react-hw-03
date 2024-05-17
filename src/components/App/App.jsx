import ContactList from "../ContactList/ContactList";
//  import personalContacts from '../components/contact.json'
import { useState, useEffect } from "react";



export default function App() {
  return (
    <div>
  <h1>Phonebook</h1>
  <ContactList />
</div>
  );
}

