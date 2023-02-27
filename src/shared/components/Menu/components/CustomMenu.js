import { Menu } from 'antd';
import "./menu.css"
import { privateMenuitems, publicMenuitems } from '../constants';

const CustomMenu = ({ navigateTo }) => {
  return <Menu className='menu' onClick={navigateTo} mode="horizontal" items={localStorage.getItem('token') ? privateMenuitems : publicMenuitems} />;
};

export default CustomMenu;