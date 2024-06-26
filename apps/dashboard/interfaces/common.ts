export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: any;
  label?: string;
  description?: string;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}
