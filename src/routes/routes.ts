import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-Lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;

}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-Lazyload/layout/LazyLayout'));


export const routes:Route[] = [
    {
        path:'/lazyload/*',
        to:'/lazyload/',
        Component:LazyLayout,
        name:'LazyLayout - Dashboard'
    
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazy,
        name:'No Lazy'
    },
]