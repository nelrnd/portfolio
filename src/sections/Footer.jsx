import { styled } from 'styled-components';
import badgeIcon from '../assets/badge-icon.svg';
import { SectionContent } from '../components/Section';
import { Text, Flex, Grid } from '../components/elements';

const StyledFooter = styled.footer`
  background-color: var(--color-950);
  padding: 6rem 1rem;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    width: 16rem;
    height: 16rem;
    bottom: 0;
    left: 15%;
    opacity: 0.25;
    transform: rotate(15deg);
  }

  .dark & {
    background-color: var(--color-1000);
  }
`;

const Footer = () => (
  <StyledFooter>
    <SectionContent>
      <Grid $align>
        <div>
          <img src={badgeIcon} alt="" />
        </div>
        <Flex $col>
          <Text>Design and code by Nel</Text>
          <Text>© Copyright 2023</Text>
        </Flex>
      </Grid>
    </SectionContent>
  </StyledFooter>
)

export default Footer