import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image1 from '@/images/1.png';
import image2 from '@/images/2.png';
import image3 from '@/images/3.png';

const featureWorks = [
  {
    image: image1,
    title: 'Designing Dashboards',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    tag: 'Dashboard',
    year: '2020',
  },
  {
    image: image2,
    title: 'Vibrant Portraits of 2020',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    tag: 'Illustration',
    year: '2018',
  },
  {
    image: image3,
    title: '36 Days of Malayalam type',
    subtitle:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    tag: 'Typography',
    year: '2018',
  },
];

export function FeatureWorksSection() {
  return (
    <Box mt={3} mb={8}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: { sx: 'center' },
        }}
      >
        <Typography mb={3}>Featured works</Typography>

        {featureWorks.map((item, index) => (
          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            pb={2}
            mb={2}
            borderBottom="1px solid #E0E0E0"
            key={index}
            textAlign="left"
          >
            <Box
              sx={{
                minWidth: '246px',
                minHeight: '180px',
                borderRadius: '6px',
                marginRight: { md: 2 },
                marginBottom: { xs: 2 },
              }}
            >
              <Image src={item.image} layout="responsive" alt="" />
            </Box>
            <Box>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {item.title}
              </Typography>
              <Stack direction="row" mb={2} alignItems="center">
                <Chip
                  label={item.year}
                  sx={{
                    marginRight: 2,
                    background: '#142850',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    paddingTop: 1,
                    paddingBottom: 1,
                    height: '24px',
                  }}
                />
                <Typography color="#8695A4">{item.tag}</Typography>
              </Stack>
              <Typography>{item.subtitle}</Typography>
            </Box>
          </Stack>
        ))}
      </Container>
    </Box>
  );
}
