import { html } from "lit-html";
import "../../components/button/button";

export default {
  title: 'Atoms/Button',
  component: 'dsj-button'
};

export const Primary = {
  render: () => html`
    <div class="container">
      <dsj-button id="btn-click" label="Haz clic aquí"></dsj-button>
    </div>
  `,
};