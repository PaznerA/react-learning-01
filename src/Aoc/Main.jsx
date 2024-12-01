import { createBrowserRouter, Outlet, RouterProvider, useParams } from 'react-router-dom';
import Demos from '../Demos/Demos';
import AocNav from "./AocNav";
import D1Main from './Day1/D1Main';
import Nav from '../Core/Nav';

export default function AoCMain() {

    const {day} = useParams()

    return <>
        <Nav />
        <AocNav />
            {/* todo: draw ouput by day param */}
            <D1Main />
    </>
}