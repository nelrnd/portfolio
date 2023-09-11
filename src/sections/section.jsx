import Section from "../components/Section";
import { Button, Grid, Heading2, Headline, Text, TextInput } from "../components/basics";

const Hero = () => (
  <Section id="hero">
    <Headline>
      Hi, I&apos;m Nel<br />Web Developer
    </Headline>
  </Section>
);

const About = () => (
  <Section id="about">
    <Heading2>About</Heading2>
    <Text $large>
      I’m a passionate full-stack web developer from France. I love to create things that solves real world problem and design beautiful user interfaces along the way. Beside coding, I also enjoy playing piano and climbing mountains.
    </Text>
  </Section>
);

const Contact = () => (
  <Section id="contact">
    <Heading2>Contact</Heading2>
    <Grid>
      <form action="#">
        <TextInput />
        <Button>Submit</Button>
      </form>
    </Grid>
  </Section>
)

