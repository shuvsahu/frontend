import { ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';

export const publicMenuitems = [
  {
    label: 'Login',
    key: 'login',
  },
  {
    label: 'Sign-up',
    key: 'register',
  },
]

export const privateMenuitems = [
  {
    label: 'Menu',
    key: 'menu',
  },
  {
    icon: <ShoppingCartOutlined style={{ fontSize: 20 }} />,
    key: 'cart',
  },
  {
    label: 'Shubham',
    key: 'MenuDropdown',
    icon: <DownOutlined />,
    children: [
      {
        label: 'Orders',
        key: 'orders',
      },
      {
        label: 'Logout',
        key: 'logout',
      },
    ],
  },
]
