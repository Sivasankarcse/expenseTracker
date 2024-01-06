import { COLORS } from "../../constants";
import { AccountsIcon } from "./tab-bar-icons/AccountsIcon";
import { DateIcon } from "./tab-bar-icons/DateIcon";
import { SettingsIcon } from "./tab-bar-icons/SettingsIcon";
import { StatsIcon } from "./tab-bar-icons/StatsIcon";

type TabBarIconProps = {
    focused: boolean;
    name: any,
    color: string,
    size: number,
    type: 'date' | 'stats' | 'accounts' | 'settings'
}

export const TabBarIcon = ({focused, name, color, size, type}: TabBarIconProps) => {
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
        default: 
            return null
    }
}