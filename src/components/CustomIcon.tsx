import { COLORS } from "../../constants";
import { CameraIcon } from "./icons-list/CameraIcon";
import { CloseIcon } from "./icons-list/CloseIcon";
import { AccountsIcon } from "./tab-bar-icons/AccountsIcon";
import { DateIcon } from "./tab-bar-icons/DateIcon";
import { SettingsIcon } from "./tab-bar-icons/SettingsIcon";
import { StatsIcon } from "./tab-bar-icons/StatsIcon";

type CustomIconProps = {
    focused: boolean;
    name: any,
    color: string,
    size: number,
    type: 'date' | 'stats' | 'accounts' | 'settings' | 'camera' | 'close'
}

export const CustomIcon = ({focused, name, color, size, type}: CustomIconProps) => {
    let iconColor = focused ? COLORS?.blue : COLORS?.white;
    switch(type) {
        case 'date':
            return <DateIcon name={name} size={size} color={iconColor} />
        case 'stats':
            return <StatsIcon name={name} size={size} color={iconColor} />
        case 'accounts':
            return <AccountsIcon name={name} size={size} color={iconColor} />
        case 'settings':
            return <SettingsIcon name={name} size={size} color={iconColor} />
        case 'camera':
            return <CameraIcon name={name} size={size} color={iconColor} />
        case 'close':
            return <CloseIcon name={name} size={size} color={iconColor} />
        default: 
            return null
    }
}