import React from 'react';
import { ThemeProvider, ChakraProvider, theme, CSSReset, Box, Button } from '@chakra-ui/react';
import { text, boolean } from '@storybook/addon-knobs';         //  Knobs: Permite editar accesorios dinámicamente usando la interfaz de usuario de Storybook. También puede usar Knobs como una variable dinámica dentro de las historias en Storybook.

export default {
    title: 'Chakra/Button',  //   (Obligatorio): Nombre que se desplegara en el menu de Storybook
    component: Button,       //   (Opcional):    Componente que se desea asociar
    decorators: [
        Story => (
            // ? Implementa Theme de ChakraUI para que tome su hoja de estilos predeterminada
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Box m='4'>
                    <Story />
                </Box>
            </ThemeProvider>
            
        ),
    ],
    argTypes: {
        variant: {
            options: [ 'green', 'red' ],
            control: { type: 'select' }
        },
        onClick: {
            action: 'Clicked!'
        },
        onMouseOver: {
            action: 'MouseOver!'
        }
    }
}

// Crea una plantilla para evitar la repeticion del cuerpo del componente
const Template = args => <Button { ...args } />;        

// Stories: Variaciones a partir de una plantilla. Args representan el estado del componente en cada historia
export const SuccessButton = Template.bind({});
SuccessButton.args = {
    variant: 'green',
    children: 'Success'
}

export const DangerButton = Template.bind({});
DangerButton.args = {
    variant: 'red',
    children: 'Danger'
}

export const Knobs = () => <Button disabled={ boolean( 'Disabled', false ) }>{ text( 'Label', 'Button Label' ) }</Button> 