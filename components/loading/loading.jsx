import { c, useState, useEffect } from 'atomico';
import { customProperties, styles } from './loading.style';

function LoadingComponent({ loop, progress, animationtime, error, size }) {
  const RADIUS = 44;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const [dashOffset, setDashOffset] = useState(CIRCUMFERENCE);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (progress !== undefined && progress >= 0 && progress <= 100) {
      // Modo progreso determinado
      setSpinning(false);
      const offset = CIRCUMFERENCE * (1 - progress / 100);
      setDashOffset(offset);
    } else {
      // Modo indeterminado — gira indefinidamente
      setSpinning(true);
      setDashOffset(CIRCUMFERENCE * 0.75);
    }
  }, [progress, loop]);

  const renderSpinner = () => (
    <div className="spinner-wrap">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Cargando"
        role="status"
      >
        {/* Pista de fondo */}
        <circle
          class="track"
          cx="50" cy="50" r={RADIUS}
          stroke-width="var(--stroke-width, 5)"
          fill="none"
        />
        {/* Arco de progreso */}
        <circle
          class={`arc${spinning ? ' spinning' : ''}`}
          cx="50" cy="50" r={RADIUS}
          stroke-width="var(--stroke-width, 5)"
          fill="none"
          stroke-dasharray={CIRCUMFERENCE}
          stroke-dashoffset={dashOffset}
        />
      </svg>
    </div>
  );

  const renderError = () => (
    <div className="error-icon">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="3" fill="none" />
        <line x1="32" y1="18" x2="32" y2="36" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
        <circle cx="32" cy="44" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );

  return (
    <host shadowDom>
      {customProperties(size)}
      {error ? renderError() : renderSpinner()}
      <slot name="message"></slot>
      {error && (
        <div className="btn-slot">
          <slot name="btn-group"></slot>
        </div>
      )}
    </host>
  );
}

LoadingComponent.props = {
  loop:          { type: Boolean, reflect: true, value: true },
  progress:      { type: Number,  reflect: true, value: undefined },
  animationtime: { type: Number,  reflect: true, value: 1200 },
  error:         { type: Boolean, reflect: true, value: false },
  size:          { type: String,  reflect: true, value: 'md' },
};

LoadingComponent.styles = styles;

const Loading = c(LoadingComponent);

export default Loading;
export { Loading };

customElements.define('dsh-loading', Loading);
