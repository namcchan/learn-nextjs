import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import facebookIcon from '@/images/fb.png';
import twitterIcon from '@/images/twitter.png';
import linkedinIcon from '@/images/linkedin.png';
import instagramIcon from '@/images/insta.png';

export function Footer() {
  return (
    <Box textAlign="center" py={10}>
      <Stack direction="row" justifyContent="center" spacing={3} mb={2}>
        <Box sx={{ minWidth: '30px' }}>
          <Image src={facebookIcon} layout="responsive" alt="" />
        </Box>
        <Box sx={{ minWidth: '30px' }}>
          <Image src={instagramIcon} layout="responsive" alt="" />
        </Box>
        <Box sx={{ minWidth: '30px' }}>
          <Image src={twitterIcon} layout="responsive" alt="" />
        </Box>
        <Box sx={{ minWidth: '30px' }}>
          <Image src={linkedinIcon} layout="responsive" alt="" />
        </Box>
      </Stack>
      <Typography>Copyright ©2020 All rights reserved </Typography>
    </Box>
  );
}
