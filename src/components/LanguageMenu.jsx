import globe from  '../assets/Globe.jpg';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    div,
  } from "@material-tailwind/react";
  

const LanguageMenu = () => {
    return (
        <Menu>
          <MenuHandler>
            <img
              variant="circular"
              alt="tania andrew"
              className="cursor-pointer w-7 h-7 rounded-full ml-4 mt-1"
              src={globe}
            />
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex items-center gap-2">
              <div variant="small" className="font-medium">
                Languages
              </div>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <div variant="small" className="font-medium">
                Add Language
              </div>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <div variant="small" className="font-medium">
                See all languages
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      );
}

export default LanguageMenu