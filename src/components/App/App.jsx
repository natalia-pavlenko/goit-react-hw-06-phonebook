
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { AppText, AppDiv } from './App.styled';

const App = () => {
  
  return (
    <>
      <AppDiv>
        <AppText>Phonebook</AppText>
        <ContactForm  />
        <AppText>Contacts</AppText>
        <Filter />
        <ContactsList/>
      </AppDiv>
    </>
  );
};
export default App;
