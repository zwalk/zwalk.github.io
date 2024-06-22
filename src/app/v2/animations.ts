import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

export const fallAnimation = animation(animate(2500, keyframes([
        style({ transform: 'translateY(0%) rotate(36deg)', offset: 0.1 }),
        style({ transform: 'translateY(50%) rotate(72deg)', offset: 0.2 }),
        style({ transform: 'translateY(100%) rotate(108deg)', offset: 0.3 }),
        style({ transform: 'translateY(150%) rotate(144deg)', offset: 0.4 }),
        style({ transform: 'translateY(200%) rotate(180deg)', offset: 0.5 })
    ])));