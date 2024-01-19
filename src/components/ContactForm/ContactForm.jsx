import styles from './ContactForm.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newObj = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input placeholder="Name" type="text" name="name" required />
      </label>

      <label>
        <input placeholder="Phone number" type="tel" name="number" required />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};
