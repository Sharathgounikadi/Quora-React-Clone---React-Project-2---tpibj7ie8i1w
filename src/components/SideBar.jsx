import React from 'react'
import cooking from "../assets/Cooking.jpg"
import music from "../assets/Music.jpg"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
const SideBar = () => {
    return (
        <Card className="ml-20 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <List className='flex justify-center align-middle'>
            <ListItem>
              <ListItemPrefix>
                <img src={cooking} className="h-5 w-5" />
              </ListItemPrefix>
              Cooking
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src={music} className="h-5 w-5" />
              </ListItemPrefix>
              Cooking
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src={cooking} className="h-5 w-5" />
              </ListItemPrefix>
              Cooking
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
              <img src={cooking} className="h-5 w-5" />
              </ListItemPrefix>
              Cooking
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <img src={cooking} className="h-5 w-5" />
              </ListItemPrefix>
              Cooking
            </ListItem>
          </List>
        </Card>
      );
}

export default SideBar;
