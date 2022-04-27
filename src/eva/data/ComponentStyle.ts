import { TemplateComponents } from '@/eva/interface/component';
export const componentStyle: TemplateComponents = {
  eaMerryGoRound: [
    {
      className: '.slide',
      style: {
        display: ' inline-block',
        position: 'relative',
        width: '600px',
        height: '200px',
        textAlign: 'center',
        fontFamily: 'Arial',
        color: '#fff',
        overflow: 'hidden',
      },
    },
    {
      className: '.slide ul',
      style: {
        padding: '0',
        width: 'calc(600px * 3)',
        transition: 'all 0.5s',
      },
    },
    {
      className: '.slide li',
      style: {
        float: 'left',
        width: '600px',
        height: '200px',
        listStyle: 'none',
        lineHeight: '200px',
        fontSize: '36px',
      },
    },
    {
      className: '.slide li:nth-child(1)',
      style: { background: '#9fa8ef' },
    },
    {
      className: '.slide li:nth-child(2)',
      style: { background: '#ef9fb1' },
    },
    {
      className: '.slide li:nth-child(3)',
      style: { background: '#9fefc3' },
    },
    {
      className: '.slide input[name="sildeInput"]',
      style: { display: 'none' },
    },
    {
      className: '.slide label[for^="sildeInput"]',
      style: {
        position: 'absolute',
        bottom: '20px',
        width: '20px',
        height: '20px',
        margin: ' 0 10px',
        lineHeight: '20px',
        color: '#fff',
        background: '#fff',
        cursor: 'pointer',
        borderRadius: '50%',
      },
    },
    {
      className: '.slide label[for="sildeInput1"]',
      style: {
        left: 'calc(50% - 40px)',
      },
    },
    {
      className: '.slide label[for="sildeInput2"]',
      style: {
        left: 'calc(50% - 10px)',
      },
    },
    {
      className: '.slide label[for="sildeInput3"]',
      style: {
        left: 'calc(50% + 20px)',
      },
    },
    {
      className: ' #sildeInput1:checked ~ ul',
      style: {
        marginLeft: '0',
      },
    },
    {
      className: ' #sildeInput2:checked ~ ul',
      style: {
        marginLeft: '-600px',
      },
    },
    {
      className: '#sildeInput3:checked ~ ul',
      style: {
        marginLeft: '-1200px',
      },
    },
    {
      className: '#sildeInput1:checked ~ label[for="sildeInput1"]',
      style: {
        color: '#000',
        background: ' #1989fa',
      },
    },
    {
      className: '#sildeInput2:checked ~ label[for="sildeInput2"]',
      style: {
        color: '#000',
        background: ' #1989fa',
      },
    },
    {
      className: '#sildeInput3:checked ~ label[for="sildeInput3"]',
      style: {
        color: '#000',
        background: ' #1989fa',
      },
    },
  ],
  eaNav: [
    {
      className: 'ul',
      style: {
        listStyle: 'none',
      },
    },
    {
      className: '.container',
      style: {
        margin: '0 auto',
        width: '1000px',
      },
    },
    {
      className: '.nav',
      style: {
        width: '100%',
        height: '40px',
        lineHeight: '40px',
        background: ' #403c3c',
      },
    },
    {
      className: '.nav li',
      style: {
        float: 'left',
        position: 'relative',
      },
    },
    {
      className: '.nav li a',
      style: {
        display: 'block',
        width: '100px',
        textAlign: 'center',
        color: '#bfc3c3',
        textDecoration: 'none',
      },
    },
    {
      className: '.nav li ul li a',
      style: {
        color: '#bfc3c3',
      },
    },
    {
      className: '.nav li ul li',
      style: {
        float: 'none',
      },
    },
    {
      className: '.nav li ul',
      style: {
        background: '#403c3c',
        display: 'none',
        position: 'absolute',
        left: '0',
        zIndex: '1000',
      },
    },
    {
      className: '.nav li a:hover',
      style: {
        color: '#403c3c',
      },
    },
    {
      className: '.nav li:hover',
      style: {
        background: '#fff',
        color: ' #403c3c',
      },
    },
    {
      className: '.nav li:hover ul',
      style: {
        display: 'block',
      },
    },
  ],
  eaTable: [
    {
      className: 'table,td,th',
      style: {
        border: ' 1px solid black',
      },
    },
    {
      className: 'table',
      style: {
        borderCollapse: 'collapse',
        width: '300px',
      },
    },
  ],
};
