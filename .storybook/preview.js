import '../src/generated-tokens/tokens.css';

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        xs:  { name: 'Mobile S — 320px',   styles: { width: '320px',  height: '568px'  } },
        sm:  { name: 'Mobile M — 375px',   styles: { width: '375px',  height: '812px'  } },
        md:  { name: 'Mobile L — 428px',   styles: { width: '428px',  height: '926px'  } },
        tab: { name: 'Tablet — 768px',     styles: { width: '768px',  height: '1024px' } },
        lg:  { name: 'Desktop — 1280px',   styles: { width: '1280px', height: '800px'  } },
        xl:  { name: 'Desktop XL — 1440px',styles: { width: '1440px', height: '900px'  } },
      },
      defaultViewport: 'lg',
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'landmark-one-main', enabled: false },
        ],
      },
    },
    options: {
      storySort: {
        order: [
          'Design System',
          ['Bienvenida'],
          'Tokens',
          'Components',
          ['Atoms', [
            'Button',
            'Icon',
            'Tag',
            'Badge',
            'Loading',
            'Checkbox',
            'Radio',
            'Input',
            'Textarea',
            'Select',
          ]],
          'Deprecated',
        ],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
