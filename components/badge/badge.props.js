const componentProps = {
  position: { type: String, reflect: true },
  size: { type: String, reflect: true, value: 's' },
  pulse: { type: Boolean, reflect: true, value: false },
  count: { type: Number, reflect: true, value: undefined },
  bell: { type: Boolean, reflect: true, value: false },
  shake: { type: Boolean, reflect: true, value: false },
  disabled: { type: Boolean, reflect: true, value: false },
};

export default componentProps;
