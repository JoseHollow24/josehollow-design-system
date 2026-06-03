const Props = {
  id: { type: String, reflect: true },
  name: { type: String, reflect: true },
  focus: { type: Boolean, reflect: true, value: false },
  value: { type: String, reflect: true },
  disabled: { type: Boolean, reflect: true, value: false },
  error: { type: Boolean, reflect: true, value: false },
  dark: { type: Boolean, reflect: true, value: false },
  checked: { type: Boolean, reflect: true, value: false },
  tabIndex: { type: Number, reflect: true, value: 1 },
  ariaLabel: { type: String, reflect: true },
};

export default Props;
