(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["your-library-name"] = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function ___$insertStyle(css) {
      if (!css || typeof window === 'undefined') {
          return;
      }
      const style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  ___$insertStyle(".modal {\n  position: fixed;\n  margin: 0 auto;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n  z-index: 99999;\n}\n.modal .content {\n  width: 85%;\n  background-color: white;\n  border-radius: 16px;\n  transform: translateY(200px);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n}\n.modal .content.fullScreen {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n}\n\n.modal.show {\n  opacity: 1;\n  pointer-events: visible;\n}\n\n.modal.show .content {\n  transform: translateY(0px);\n}\n\n.header {\n  direction: rtl;\n  height: 46px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #424242;\n  font-size: 16px;\n  font-weight: 500;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n}\n.header .iconContainer {\n  height: 100%;\n  width: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.header .iconContainer i {\n  color: #323232;\n  font-size: 16px;\n  font-weight: 400;\n}");

  const ZMModal = (props) => {
      const { show, onClose, canceledOnTouchOutside = true, canceledOnTouchInside = false, children, contentStyle = {}, isBottomSheet = false, fullScreen = false, } = props;
      if (typeof window !== 'undefined') {
          React.useEffect(() => {
              var _a, _b;
              if (show) {
                  // @ts-ignore
                  (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.style.overflow = "hidden";
              }
              else {
                  // @ts-ignore
                  (_b = document === null || document === void 0 ? void 0 : document.body) === null || _b === void 0 ? void 0 : _b.style.overflow = "auto";
              }
          }, [show]);
      }
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

}));
//# sourceMappingURL=index.umd.js.map
