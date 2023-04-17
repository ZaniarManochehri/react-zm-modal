import React, {useEffect} from "react";
import './ZMModal.scss'

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

export const ZMModal: React.FC<ModalProps> = (props) => {
    const {
        show,
        onClose,
        canceledOnTouchOutside = true,
        canceledOnTouchInside = false,
        children,
        contentStyle = {},
        isBottomSheet = false,
        fullScreen = false,
    } = props;

    if (typeof window !== 'undefined') {
        useEffect(() => {
            if (show) {
                // @ts-ignore
                document?.body?.style.overflow = "hidden";
            } else {
                // @ts-ignore
                document?.body?.style.overflow = "auto";
            }
        }, [show]);
    }

    return (
        <div
            className={`modal ${show ? 'show' : ""}`}
            onClick={canceledOnTouchOutside ? onClose : () => null}
            style={isBottomSheet ? {alignItems: "flex-end"} : {}}
        >
            <div
                className={`content ${fullScreen ? 'fullScreen' : ""}`}
                onClick={
                    canceledOnTouchInside ? () => null : (e) => e.stopPropagation()
                }
                style={{
                    ...contentStyle,
                    ...(isBottomSheet
                        ? {
                            width: "100%",
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                        }
                        : null),
                }}
            >

                <div
                    style={{height: "100%"}}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

