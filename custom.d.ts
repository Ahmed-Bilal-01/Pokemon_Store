
import React from 'react';

declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
  
  declare module '*.png' {
  
    import React = require('react')
  
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  
    const src: string
  
    export default src
  
  }