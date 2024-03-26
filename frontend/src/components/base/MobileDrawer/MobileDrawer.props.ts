import { ReactNode } from "react";

export interface MobileDrawerProps {
    direction: 
          "right" 
        | "left" 
        | "top" 
        | "bottom";
    children?: ReactNode;
    isOpenDrawer: boolean;
    drawerSize: string;
    handleDrawerClose: () => void;
    isModalVisible: boolean;
}

export type TouchEventHandler<T> = (event: React.TouchEvent<T>) => void;
