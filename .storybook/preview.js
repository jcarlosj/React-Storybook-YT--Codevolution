import { addDecorator,addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';    //  Viewport Addon permite que sus historias se muestren en diferentes tamaños y diseños


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

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
