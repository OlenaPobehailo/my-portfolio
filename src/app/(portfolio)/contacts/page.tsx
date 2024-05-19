import ContactForm from '@/app/components/ContactForm';
import Container from '@/app/components/Container';

export const metadata = {
  title: 'Contacts',
  description: '',
};

type Props = {};

const Contacts = (props: Props) => {
  return <ContactForm />;
};

export default Contacts;
