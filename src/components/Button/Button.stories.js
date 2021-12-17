import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';         //  Knobs: Permite editar accesorios dinámicamente usando la interfaz de usuario de Storybook. También puede usar Knobs como una variable dinámica dentro de las historias en Storybook.

import Button from './Button';

import { action, actions } from '@storybook/addon-actions'

export default {
    title: 'Form/Button',        //   (Obligatorio): Nombre que se desplegara en el menu de Storybook
    component: Button,           //   (Opcional):    Componente que se desea asociar
    args: {
        children: 'Button'       //   Establece el estado del componente por defecto
    },
}

// Stories: Historias o Variaciones del mismo componente
export const Primary = () => <Button onClick={ action( 'Primary Cliked!' ), () => console.log( 'Variable de entorno', process.env.STORYBOOK_THEME ) } variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary' { ...actions( 'onClick', 'onMouseOver' ) } >Secondary</Button>;
export const Success = () => <Button variant='success' onClick={ () => console.log( 'Success!', process.env.STORYBOOK_THEME ) }>Success</Button>;
export const Danger = () => ( 
    <Button
        variant='danger' 
        onClick={ () => console.log( 'Danger!', process.env.THEME  ) }
        disabled={ boolean( 'Disabled', false ) }
    >{ text( 'Label', 'Danger!' ) }</Button>
);

// Crea una plantilla para evitar la repeticion del cuerpo del componente
const Template = args => <Button { ...args } />;        

// Stories: Variaciones a partir de una plantilla. Args representan el estado del componente en cada historia
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'primary',
    children: 'Button with Args'    //  Reescribira valores establecidos por defecto en el componente
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    ...PrimaryButton.args,          //  Reescribira valores establecidos por defecto en el componente
    variant: 'secondary'
}

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    variant: 'success'
}

export const DangerButton = Template.bind({});
DangerButton.args = {
    variant: 'danger'
}