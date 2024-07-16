import HomeIcon from "@mui/icons-material/Home";
import CasesIcon from "@mui/icons-material/Cases";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PolicyIcon from "@mui/icons-material/Policy";
import EventIcon from "@mui/icons-material/Event";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';

export const SideBarLinks=[
    {
        title:"Home",
        icon:<HomeIcon className="text-xl text-ascent"/>,
        link:'',
        role:['admin','user','agency']
    },
    {
        title:"Notifications",
        icon:<NotificationsIcon className="text-xl text-ascent"/>,
        link:'notifications',
        role:['admin','user','agency']
    },
    {
        title:"Events",
        icon:<EventIcon className="text-xl text-ascent"/>,
        link:'events',
        role:['admin']
    },
    {
        title:"Create Event",
        icon:<CreateNewFolderIcon className="text-xl text-ascent"/>,
        link:'create-event',
        role:['admin']
    },
    {
        title:"Alerts",
        icon:<AlarmAddIcon className="text-xl text-ascent"/>,
        link:'alerts',
        role:['agency']
    },
    {
        title:"Cases",
        icon:<CasesIcon className="text-xl text-ascent"/>,
        link:'cases',
        role:['agency']
    },
    {
        title:"Applications",
        icon:<SettingsApplicationsIcon className="text-xl text-ascent"/>,
        link:'applications',
        role:['agency']
    },
    {
        title:"Register",
        icon:<CreateNewFolderIcon className="text-xl text-ascent"/>,
        link:'register-case',
        role:['user']
    },
       
]