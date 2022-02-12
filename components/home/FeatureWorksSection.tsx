import { Box, Container, Typography } from '@mui/material';
import { works } from 'data/works';
import React from 'react';
import { WorkCard } from './WorkCard';

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

        {works.map((item, index) => (
          <Box pb={3} mb={3} key={index} borderBottom="1px solid #E0E0E0">
            <WorkCard workData={item} key={index} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
