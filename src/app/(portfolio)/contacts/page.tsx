import ContactForm from '@/app/components/ContactForm';
import Container from '@/app/components/Container';

export const metadata = {
  title: 'Contacts',
  description:
    "Interested in working with me? Contact me through the form on this page to discuss potential projects, collaborations, or any other inquiries. I'll get back to you shortly.",
};

type Props = {};

const Contacts = (props: Props) => {
  return (
    <Container>
      <ContactForm />
    </Container>
  );
};

export default Contacts;
