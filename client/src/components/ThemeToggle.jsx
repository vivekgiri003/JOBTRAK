import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <MdOutlineLightMode className='toggle-icon'/>

      ) : (
        <MdDarkMode className='toggle-icon' />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;