'use strict';

var React = require('react');

const ZMModal = (props) => {
    const { show, onClose, canceledOnTouchOutside = true, canceledOnTouchInside = false, children, contentStyle = {}, isBottomSheet = false, fullScreen = false, } = props;
    React.useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [show]);
    return (React.createElement("div", { className: `modal ${show ? 'show' : ""}`, onClick: canceledOnTouchOutside ? onClose : () => null, style: isBottomSheet ? { alignItems: "flex-end" } : {} },
        React.createElement("div", { className: `content ${fullScreen ? 'fullScreen' : ""}`, onClick: canceledOnTouchInside ? () => null : (e) => e.stopPropagation(), style: {
                ...contentStyle,
                ...(isBottomSheet
                    ? {
                        width: "100%",
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                    }
                    : null),
            } },
            React.createElement("div", { style: { height: "100%" }, onClick: (e) => e.stopPropagation() }, children))));
};

exports.ZMModal = ZMModal;
//# sourceMappingURL=index.cjs.js.map
