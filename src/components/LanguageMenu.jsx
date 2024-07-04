import { useNavigate,Link} from 'react-router-dom';
import globe from  '../assets/Globe.jpg';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
  } from "@material-tailwind/react";

const LanguageMenu = () => {
  const navigate=useNavigate();
    return (
        <Menu>
          <MenuHandler>
            <img
              className="cursor-pointer w-7 h-7 rounded-full ml-4 mt-1"
              src={globe}
            />
            {/* <Globe/> */}
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex items-center gap-2">
              <Link to="/ComingSoon" variant="small" className="font-medium">
                English Language     
              </Link>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Link to="/ComingSoon" variant="small" className="font-medium">
                Telugu Language  
              </Link>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <Link to="/ComingSoon" variant="small" className="font-medium">
                See all languages
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      );
}

export default LanguageMenu