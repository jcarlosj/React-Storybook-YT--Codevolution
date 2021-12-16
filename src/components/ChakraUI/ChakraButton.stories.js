import React from 'react';
import { ThemeProvider, ChakraProvider, theme, CSSReset, Box, Button } from '@chakra-ui/react';

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
}

// Stories: Historias o Variaciones del mismo componente
export const Success = () => <Button variant='green'>Button</Button>;
export const Danger = () => <Button variant='red'>Button</Button>;

