import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import avatar from '../../images/avatar.jpg';
export function HeroSection() {
  return (
    <Box
      pt={{
        xs: 4,
        md: 18,
      }}
      pb={{
        xs: 7,
        md: 9,
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={4}
          direction={{
            xs: 'column-reverse',
            md: 'row',
          }}
          alignItems={{
            xs: 'center',
            md: 'flex-start',
          }}
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{
                xs: 3.5,
                md: 5,
              }}
            >
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography
              component="p"
              mb={{
                xs: 3.5,
                md: 5,
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: {
                xs: 170,
                md: 240,
              },
              boxShadow: '-5px 13px',
              color: '#EDF7FA',
              borderRadius: '100%',
              overflow: 'hidden',
              xs: {
                minWidth: '180px',
              },
            }}
          >
            <Image src={avatar} layout="responsive" alt="avatar" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
