import { AdminLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';

const Admin: NextPageWithLayout = () => {
  return <h1>Admin Page</h1>;
};

Admin.Layout = AdminLayout;

export default Admin;
