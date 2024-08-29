import { Link } from 'react-router-dom';
import icons from '../../assets/icons';
import Logo from '../Logo/Logo';
import { P } from '../Typography';

const Footer = () => {
  return (
    <div className="py-20 px-4 tablet:px-40 wide:px-96 border-t-1 border-divider flex gap-8 items-center">
      <Logo className="mr-auto" />
      <div className="flex items-center justify-center gap-2">
        <P variant="tiny" className="font-normal">made by</P>
        <Link to="https://www.linkedin.com/in/berra-karaman-3936471b0/">
          <P variant="tiny" className="font-normal transition hover:text-primary-light">Berra Karaman</P>
        </Link>
      </div>
      <Link
        to={'https://github.com/brrkrmn/codeandline'}
        className="*:transition *:hover:text-primary-light"
      >
        {icons.github}
      </Link>
    </div>
  )
}

export default Footer;
