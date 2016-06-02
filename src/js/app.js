import Router from 'router';
import 'weui';
import './app.less';
import Home from './home/home';
import Register from './register/register';

const router = new Router();

router.push(Home).push(Register).setDefault('/').init();