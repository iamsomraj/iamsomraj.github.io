import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's Somraj Mukherjee`, 'Learner', 'Developer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
