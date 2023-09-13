import mailIcon from '../assets/mail.svg'
import githubIcon from '../assets/github.svg';
import twitterIcon from '../assets/twitter.svg';
import Section from '../components/Section';
import { Button, Text, Flex, Grid, Heading2, Link } from '../components/elements';
import { useState } from 'react';
import { TextArea, TextInput } from '../components/Input';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Section id="contact">
      <Flex $col gap="l">
        <Heading2>Contact</Heading2>
        <Grid>
          <Flex $col as="form" action="#">
            <TextInput type="text" name="name" placeholder="Name" value={name} setValue={setName} />
            <TextInput type="email" name="email" placeholder="Email" value={email} setValue={setEmail} />
            <TextArea name="message" placeholder="Your message" value={message} setValue={setMessage} />
            <Button $large $primary>Submit</Button>
          </Flex>
          <Flex $col $gap="xl">
            <Text>You want to get in touch? Feel free to reach out to me if you an idea or question.</Text>
            <Flex>
              <img src={mailIcon} alt="email" />
              <Link href="#">hello@nel.dev</Link>
            </Flex>
            <Flex>
              <img src={githubIcon} />
              <Link href="#">GitHub</Link>
            </Flex>
            <Flex>
              <img src={twitterIcon} />
              <Link href="#">Twitter</Link>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </Section>
  )
}

export default Contact