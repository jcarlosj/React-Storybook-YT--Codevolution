import React from 'react';
import { addDecorator } from '@storybook/react';
import Center from '../src/components/Center/Center';

addDecorator( story => <Center>{ story() }</Center> );   //  Decorador: A este nivel funciona como un envoltorio global para todas las Stories (Requiere reiniciar el servidor de Storybook). 

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