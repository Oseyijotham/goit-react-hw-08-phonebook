import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/AppRedux/selectors';
import { selectContactsFilter } from '../../redux/AppRedux/selectors';
import { deleteContact } from '../../redux/AppRedux/operations';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleDelete = evt => {
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow = 'none';
    }, 1000);
    dispatch(deleteContact(evt.target.name));
  };
  const filterValue = useSelector(selectContactsFilter);

  return (
    <div className={css.contactsSection}>
      <h3 className={css.contactsTitle}>Contacts</h3>
      {children}
      {filterValue === '' && contacts.length !== 0 && (
        <ul className={css.contactsList}>
          {contacts.map(contact => (
            <li key={contact.id} className={css.contactsItem}>
              <span className={css.contactsData}>
                {contact.name}: {contact.number}
              </span>
              <button
                type="submit"
                className={css.contactsButton}
                name={contact.id}
                onClick={handleDelete}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};
