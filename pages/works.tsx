import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { WorkCard } from '@/components/home/WorkCard';
import { works } from 'data/works';

const Works: NextPageWithLayout = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h3"
          fontWeight="bold"
          mt={{
            xs: 6,
            md: 16,
          }}
          mb={{
            xs: 4,
            md: 10,
          }}
        >
          Works
        </Typography>
        {works.map((item, index) => (
          <Box
            pb={{
              xs: 2,
              md: 6,
            }}
            mb={{
              xs: 2,
              md: 6,
            }}
            key={index}
            borderBottom="1px solid #E0E0E0"
          >
            <WorkCard workData={item} key={index} />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

Works.Layout = MainLayout;

export default Works;
