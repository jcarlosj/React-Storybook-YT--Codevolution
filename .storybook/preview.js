import { addDecorator,addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';               //  Knobs: Permite editar accesorios dinámicamente usando la interfaz de usuario de Storybook. También puede usar Knobs como una variable dinámica dentro de las historias en Storybook.
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';    //  Viewport Addon permite que sus historias se muestren en diferentes tamaños y diseños
import { withA11y } from '@storybook/addon-a11y';                 //  a11y puede ser útil para hacer que los componentes de la interfaz de usuario sean más accesibles


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: ( a, b ) =>
      a[ 1 ].kind === b[ 1 ].kind ? 0 : a[ 1 ].id.localeCompare( b[ 1 ].id, undefined, { numeric: true } ),
  },
}

// Implementa un envoltorio usando un decorador
addDecorator( ( storyFn, context ) => withConsole()( storyFn )( context ) );    // Permitira que los mensajes de consola se vean en el Addon de Acciones de Storybook e identifique el titulo del componente
addDecorator( withKnobs );
addDecorator( withA11y );

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
