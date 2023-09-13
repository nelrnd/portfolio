import Section from "../components/Section"
import { Heading2, Text, Flex } from "../components/elements"

const About = () => (
  <Section id="about">
    <Flex $col $gap="l">
      <Heading2>About</Heading2>
      <Text $large>
        I’m a passionate full-stack web developer from France. I love to create things that solves real world problem and design beautiful user interfaces along the way. Beside coding, I also enjoy playing piano and climbing mountains.
      </Text>
    </Flex>
  </Section>
)

export default About