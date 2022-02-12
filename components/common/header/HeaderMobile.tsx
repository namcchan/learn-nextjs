import { Menu as MenuIcon } from '@mui/icons-material';
import { Stack, Link as MuiLink } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import clsx from 'clsx';
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export function HeaderMobile() {
  return (
    <Box display={{ xs: 'block', md: 'none' }} py={1} px={2}>
      <TemporaryDrawer />
    </Box>
  );
}

export function TemporaryDrawer() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {ROUTE_LIST.map((route, index) => (
          <Link key={route.label} href={route.path} passHref>
            <ListItem button key={route.label}>
              <MuiLink
                sx={{
                  ml: 2,
                }}
                underline="none"
                className={clsx({ active: route.path === router.pathname })}
              >
                {route.label}
              </MuiLink>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Stack direction="row" justifyContent="flex-end">
            <Button sx={{ padding: 0, minWidth: 'unset' }} onClick={toggleDrawer(anchor, true)}>
              <MenuIcon sx={{ color: '#21243D' }} />
            </Button>
          </Stack>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
