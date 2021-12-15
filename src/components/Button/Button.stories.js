import React from 'react';
import Button from './Button';

export default {
    title: 'Form/Button',        //   (Obligatorio): Nombre que se desplegara en el menu de Storybook
    component: Button       //   (Opcional):    Componente que se desea asociar
}

// Stories: Historias o Variaciones del mismo componente
export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;

// Crea una plantilla para evitar la repeticion del cuerpo del componente
const Template = args => <Button { ...args } />;        

// Stories: Variaciones a partir de una plantilla. Args representan el estado del componente en cada historia
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}

export const SuccessButton = Template.bind({});
SuccessButton.args = {
    variant: 'success',
    children: 'Success Args'
}

export const DangerButton = Template.bind({});
DangerButton.args = {
    variant: 'danger',
    children: 'Danger Args'
}