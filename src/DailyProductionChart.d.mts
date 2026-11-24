import type {ComponentType} from 'react';
import type {Dataset,Row} from './model';
import type {Filters} from './Dashboard';
export function createDailyChart(react:typeof import('react'),components:{TableViewport:typeof import('./components').TableViewport;ArrowRight:typeof import('lucide-react').ArrowRight}):ComponentType<{d:Dataset;work:Row;f:Filters;client:any;onNavigate:(id:string)=>void;onDetails:(title:string,rows:Row[])=>void}>;
