import React from 'react';

// Stories
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
    title: 'Form/Subscription'      //   (Obligatorio): Nombre que se desplegara en el menu de Storybook
}

// Stories: Historias o Variaciones del mismo componente
export const PrimarySubscription = () => (
    <>
        <Large />
        <Primary />
    </>
);
