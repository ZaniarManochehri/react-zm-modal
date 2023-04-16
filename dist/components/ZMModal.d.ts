import React from "react";
import './ZMModal.scss';
export interface ModalProps {
    show: boolean;
    onClose: () => void;
    canceledOnTouchOutside?: boolean;
    canceledOnTouchInside?: boolean;
    children: React.ReactNode;
    contentStyle?: React.CSSProperties;
    isBottomSheet?: boolean;
    fullScreen?: boolean;
    showNavigation?: boolean;
}
export declare const ZMModal: React.FC<ModalProps>;
