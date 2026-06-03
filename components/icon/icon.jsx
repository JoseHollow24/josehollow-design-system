import { c, useEffect, useState } from "atomico";
import Props from "./icon.props";
import { customProperties, mainStyles } from "./icon.styles";

// URL del archivo local de íconos (resuelta respecto a este módulo)
const iconsHref = new URL('./icons.css', import.meta.url).href;

const loadFonts = () => {
  if (!document.querySelector('link[data-dsh-icons]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = iconsHref;
    link.setAttribute('data-dsh-icons', '');
    document.head.appendChild(link);
  }
};

const cleanUpFonts = () => {
  if (document.querySelectorAll('dsh-icon').length === 0) {
    document.querySelector('link[data-dsh-icons]')?.remove();
  }
};

const Component = (props) => {
  const { class: className, color, size, iconName, faStyles } = props;
  const [showFonts, setShowFonts] = useState(false);

  useEffect(() => {
    loadFonts();
    document.fonts.ready.then(() => setShowFonts(true));
    return cleanUpFonts;
  }, [iconName]);

  return (
    <host shadowDom>
      {customProperties(color, size)}
      <span className={`content${!showFonts ? " font-hidden" : ""}`}>
        <i
          part="icon"
          className={`${faStyles || "fas"} ${iconName} ${className || ""}`.trim()}
        />
      </span>
    </host>
  );
};

Component.props = Props;
Component.styles = mainStyles;

const Icon = c(Component);

export default Icon;
export { Icon };

if (!customElements.get('dsh-icon')) customElements.define('dsh-icon', Icon);
