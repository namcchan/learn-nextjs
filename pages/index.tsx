import { MainLayout } from '@/components/layout';
import { Box } from '@mui/system';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return <Box>Home page</Box>;
};

Home.Layout = MainLayout;

export default Home;
