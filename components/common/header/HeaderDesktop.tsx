import { Container, Stack, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';
import clsx from 'clsx';

export function HeaderDesktop() {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.label} href={route.path} passHref>
              <MuiLink
                sx={{
                  ml: 2,
                }}
                underline="none"
                className={clsx({ active: route.path === router.pathname })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
