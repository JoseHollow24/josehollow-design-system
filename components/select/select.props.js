const componentProps = {
  id: String,
  type: { type: String, reflect: true, value: 'select' },
  option: { type: String, reflect: true, value: 'simple' },
  variant: { type: String, reflect: true, value: 'primary' },
  label: { type: String, reflect: true, value: 'Label' },
  helper: { type: String, reflect: true, value: '' },
  placeholder: { type: String, reflect: true, value: '' },
  checkboxPlaceholderPlural: { type: String, reflect: true, value: 'ítems seleccionados' },
  checkboxPlaceholderSingular: { type: String, reflect: true, value: 'ítem seleccionado' },
  disabled: { type: Boolean, reflect: true, value: false },
  error: { type: Boolean, reflect: true, value: false },
  active: { type: Boolean, reflect: true, value: false },
  modal: { type: Boolean, reflect: true, value: false },
  nested: { type: Boolean, reflect: true, value: false },
  alphabeticalOrder: { type: Boolean, reflect: true, value: false },
  value: { type: String, reflect: true, value: null },
};

export default componentProps;
