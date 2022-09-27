import I1 from '../img/i1.png';
import F1 from '../img/f1.png';
import C3 from '../img/c3.png';
import Fi1 from '../img/fi1.png';

export const heroData = [
    {
        id: 1,
        name: 'Helado', 
        decp: 'Chocolate & Vainilla', 
        price: '700', 
        imageSrc: I1
    },{
        id: 2, 
        name: 'Frutillas', 
        decp: 'Frutillas Frescas', 
        price: '799', 
        imageSrc: F1
    },{
        id: 3, 
        name: 'Kebab de pollo', 
        decp: 'Plato de Kebab Mixto', 
        price: '2700', 
        imageSrc: C3
    },{
        id: 4, 
        name: 'Kebab de Almejas', 
        decp: 'Almejas a la Kebab', 
        price: '3000', 
        imageSrc: Fi1
    }
];

export const categories = [
    {
        id: 1,
        name: 'Pollos',
        urlParamName: 'chicken',
    },
    {
        id: 2,
        name: 'Elaborados',
        urlParamName: 'curry',
    },    
    {
        id: 3,
        name: 'Carnes',
        urlParamName: 'rice',
    },    
    {
        id: 4,
        name: 'Pescados',
        urlParamName: 'fish',
    },    
    {
        id: 5,
        name: 'Frutas',
        urlParamName: 'fruits',
    },    
    {
        id: 6,
        name: 'Helados',
        urlParamName: 'icecreams',
    },    
    {
        id: 7,
        name: 'Bebidas',
        urlParamName: 'drinks',
    }
]