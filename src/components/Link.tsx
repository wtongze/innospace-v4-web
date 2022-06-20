import { FunctionComponent } from 'react';
import { Link as RawLink, LinkProps } from 'react-router-dom';
import './Link.css';

export const Link: FunctionComponent<
  LinkProps & React.RefAttributes<HTMLAnchorElement>
> = (props) => <RawLink {...props} className={'link'} />;
