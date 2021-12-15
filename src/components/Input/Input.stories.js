import React from 'react';
import Input from './Input';

export default {
    title: 'Input',     //   (Obligatorio): Nombre que se desplegara en el menu de Storybook
    component: Input    //   (Opcional):    Componente que se desea asociar
}

// Stories: Historias o Variaciones del mismo componente
export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;