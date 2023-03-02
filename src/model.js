import image from './img/test.png'
import { TextBlock, ImageBlock, TitleBlock, ColumnsBlock } from './classes/blocks';

const text = 'Extra utulite for creating sites, version 0.1b'

export const model = [
  new TitleBlock('Site constructor (CMS) beta version', {
    tag: 'h1',
    styles: {
      background: `linear-gradient(to right, #ff0099, #493240)`,
      color: `#fff`,
      padding: `1.5rem`,
      'text-align': 'center'
    }  
  }),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
    },
    imageStyles: {
      width: '500px',
      height: '400px',
      margin: '0 auto'
    }
  }),
  new ColumnsBlock([
    'Select DOM element and set unique style',
    'Create your own site with UI',
    'Waffen corp entartainment presents this product',
    'ETC ETC ETC ETC ETC'
  ],  {
    styles: {
      background: `linear-gradient(to bottom, #8e2de2, #4a00e0)`,
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: `linear-gradient(to right, #ff0099, #493240)`,
      padding: `1rem`,
      color: '#fff',
      'font-weight': 'bold',
      'text-align': 'center'
    }
  })
];