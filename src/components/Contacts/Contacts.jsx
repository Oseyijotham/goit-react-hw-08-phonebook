import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/AppRedux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/AppRedux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm>
        {isLoading && !error && <b>Please wait...</b>}
        {error && <b>There was an error</b>}
        <ContactList>
          <Filter />
        </ContactList>
      </ContactForm>
    </div>
  );
};

export default Contacts;
