function Section({ title, children }) {
  return (
    <section className="section">
      <span className="section-label">{title}</span>
      <div className="section-content">{children}</div>
    </section>
  );
}

function App() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Design System — Átomos</h1>
        <p>Consumo práctico de cada átomo desde React</p>
      </header>

      <div className="grid">
        <Section title="Button">
          <dsh-button variant="primary" color="blue">
            Confirmar
          </dsh-button>
        </Section>

        <Section title="Icon">
          <dsh-icon icon-name="fa-heart" fa-styles="fas" color="g1" size="s3" />
        </Section>

        <Section title="Tag">
          <dsh-tag
            variant="informative"
            subvariant="success"
            label="Aprobado"
            show-icon
          />
        </Section>

        <Section title="Badge">
          <div style={{ position: 'relative', display: 'inline-flex', padding: '6px' }}>
            <dsh-icon icon-name="fa-bell" fa-styles="fas" size="s3" />
            <dsh-badge count={4} size="s" />
          </div>
        </Section>

        <Section title="Loading">
          <dsh-loading size="md" />
        </Section>

        <Section title="Checkbox">
          <dsh-checkbox id="chk-demo" name="terms" value="accept">
            Acepto los términos y condiciones
          </dsh-checkbox>
        </Section>

        <Section title="Radio">
          <dsh-radio id="radio-demo" name="plan" value="pro">
            Plan Pro
          </dsh-radio>
        </Section>

        <Section title="Input">
          <div style={{ width: '100%', maxWidth: '360px' }}>
            <dsh-input
              id="inp-email"
              name="email"
              type="email"
              label="Correo electrónico"
              placeholder="usuario@ejemplo.com"
            />
          </div>
        </Section>

        <Section title="Textarea">
          <div style={{ width: '100%', maxWidth: '360px' }}>
            <dsh-textarea
              id="ta-msg"
              name="mensaje"
              label="Mensaje"
              placeholder="Escribe aquí..."
            />
          </div>
        </Section>

        <Section title="Select">
          <div style={{ width: '100%', maxWidth: '360px' }}>
            <dsh-select
              type="select"
              label="País"
              placeholder="Selecciona un país..."
            >
              <dsh-select-option value="cl">Chile</dsh-select-option>
              <dsh-select-option value="ar">Argentina</dsh-select-option>
              <dsh-select-option value="pe">Perú</dsh-select-option>
              <dsh-select-option value="mx">México</dsh-select-option>
            </dsh-select>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
