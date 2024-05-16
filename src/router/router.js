import { createBrowserRouter } from 'react-router-dom';
import Home from '../screens/home/Home.jsx';
import Download from '../screens/download/Download.jsx';
import Contributors from '../screens/contributors/Contributors.jsx';
import Mirror from '../screens/mirror/Mirror.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/download",
        element: <Download />
    },
    {
        path: "/mirror",
        element: <Mirror />
    },
    {
        path: "/contributors",
        element: <Contributors />
    },
]);

export default router;