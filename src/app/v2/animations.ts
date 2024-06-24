import { animate, animation, keyframes, state, style, transition, trigger } from '@angular/animations';

export const fallAnimation = animation(animate(2500, keyframes([
        style({ transform: 'translateY(0%) rotate(36deg)', offset: 0.1 }),
        style({ transform: 'translateY(50%) rotate(72deg)', offset: 0.2 }),
        style({ transform: 'translateY(100%) rotate(108deg)', offset: 0.3 }),
        style({ transform: 'translateY(150%) rotate(144deg)', offset: 0.4 }),
        style({ transform: 'translateY(200%) rotate(180deg)', offset: 0.5 })
    ])));

export const cloudAnimation = animation([
    state('move', style({
        transform: 'scale({{scale}}) translateX(150%)',
        opacity: '1'
      },), { params: {
        scale: ''
      }}),
      state('invisible', style({
        opacity: '0'
      })),
      state('visible', style({
        opacity: '1'
      })),
      state('reset', style({
        transform: 'scale({{scale}}) translateX(-50%)',
      }), { params: {
        scale: ''
      }}),
      transition('* => move', animate('{{travelTime}}'), { params: {
        travelTime: ''
      }}),
      transition('* => invisible', animate('0.1s')),
      transition('* => visible', animate('0.1s')),
      transition('* => reset', animate('0.1s'))
])