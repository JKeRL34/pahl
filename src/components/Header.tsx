import Title from './Title.tsx';
import Links from './Links.tsx';

interface Props {
    children: string
}

const Header = ({ children }: Props) => {
  return (
    <header>
        <Title>{children}</Title>
        <Links />
    </header>
  )
}

export default Header