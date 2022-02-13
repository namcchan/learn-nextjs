import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Chip, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import image1 from '@/images/Rectangle 4.png';
import image2 from '@/images/Rectangle 5.png';
import image3 from '@/images/Rectangle 6.png';

const BlogDetail: NextPageWithLayout = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          mt={{
            xs: 4,
            md: 10,
          }}
          mb={{
            xs: 2,
            md: 4,
          }}
        >
          Designing Dashboards with usability in mind
        </Typography>
        <Stack
          direction="row"
          mb={{
            xs: 2,
            md: 4,
          }}
          spacing={2}
        >
          <Chip color="primary" label="2020" sx={{ color: 'white' }} />
          <Typography>Dashboard, User Experience Design</Typography>
        </Stack>
        <Typography
          mb={{
            xs: 4,
            md: 6,
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>
        <Box
          mb={{
            xs: 6,
            md: 10,
          }}
        >
          <Image src={image1} layout="responsive" alt="" />
        </Box>

        <Typography component="h1" variant="h3" mb={2}>
          Heading 1
        </Typography>
        <Typography component="h2" variant="h4" mb={2}>
          Heading 2
        </Typography>
        <Typography
          mb={{
            xs: 4,
            md: 6,
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </Typography>

        <Box
          mb={{
            xs: 6,
            md: 10,
          }}
        >
          <Image src={image2} layout="responsive" alt="" />
        </Box>
        <Box>
          <Image src={image3} layout="responsive" alt="" />
        </Box>
      </Container>
    </Box>
  );
};

BlogDetail.Layout = MainLayout;

export default BlogDetail;
