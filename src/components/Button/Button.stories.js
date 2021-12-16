import React from 'react';
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
export const Primary = () => <Button onClick={ action( 'Primary Cliked!' ) } variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary' { ...actions( 'onClick', 'onMouseOver' ) } >Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

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