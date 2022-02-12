import { HeroSection, RecentPostsSection } from '@/components/home';
import { FeatureWorksSection } from '@/components/home/FeatureWorksSection';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/system';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPostsSection />
      <FeatureWorksSection />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
