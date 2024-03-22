import React from 'react';
import { Layout, AppHeader, Title, Menu } from './styles';
import { IconButton } from 'components';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from 'assets/images/menu_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as HelpIcon } from 'assets/images/help_FILL0_wght400_GRAD0_opsz24.svg';

interface IProps {
  onHowToPlayClick : () => void
}

export default function Header({onHowToPlayClick} : IProps) {
  return (
    <Layout data-cy='header-Layout'>
      <AppHeader data-cy='header-AppHeader'>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </AppHeader>
      <Link to={`/`}>
        <Title>워드러</Title>
      </Link>
      <Menu>
        <IconButton onClick={onHowToPlayClick}>
          <HelpIcon />
        </IconButton>
      </Menu>
    </Layout>
  );
}
