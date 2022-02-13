import { Stack, Box, Chip } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

export interface WorkCardProps {
  workData: {
    image: any;
    title: string;
    tag: string;
    year: string;
    subtitle: string;
  };
}

export function WorkCard({ workData }: WorkCardProps) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      textAlign="left"
    >
      <Box
        sx={{
          minWidth: '246px',
          minHeight: '180px',
          borderRadius: '6px',
          marginRight: { md: 2 },
          marginBottom: { xs: 2, md: 0 },
        }}
      >
        <Image src={workData.image} layout="responsive" alt="" />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {workData.title}
        </Typography>
        <Stack direction="row" mb={2} alignItems="center">
          <Chip
            label={workData.year}
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
          <Typography color="#8695A4">{workData.tag}</Typography>
        </Stack>
        <Typography>{workData.subtitle}</Typography>
      </Box>
    </Stack>
  );
}
