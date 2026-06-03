import { c, useEffect, useState } from "atomico";
import Props from "./icon.props";
import { customProperties, mainStyles } from "./icon.styles";

const Component = (props) => {
  const { class: className, color, size, iconName, faStyles } = props;
  const [showFonts, setShowFonts] = useState(false);

  useEffect(() => {
    // Mostrar íconos cuando las fuentes FA estén listas
    // o tras un timeout de 1.5 s por si ya estaban cargadas
    const timeout = setTimeout(() => setShowFonts(true), 1500);

    const handleLoaded = () => { clearTimeout(timeout); setShowFonts(true); };

    document.fonts.ready.then(handleLoaded);
    document.fonts.addEventListener('loadingdone', handleLoaded);

    return () => {
      clearTimeout(timeout);
      document.fonts.removeEventListener('loadingdone', handleLoaded);
    };
  }, []);

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
