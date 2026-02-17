import { html } from "lit-html";
import "../../components/button/button";

export default {
  title: 'Atoms/Button', // Asegúrate que coincida con lo que ves en el menú
  component: 'dsj-button',
  tags: ['autodocs'],
};
export const Primary = {
  render: () => html`
    <div class="container">
      <dsj-button id="btn-click" label="Haz clic aquí"></dsj-button>
    </div>
  `,
};