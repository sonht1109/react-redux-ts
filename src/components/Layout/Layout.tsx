import { LayoutProps } from './types';

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <>{children}</>;
};

export default Layout;
Layout.displayName = Layout;
