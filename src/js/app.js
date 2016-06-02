import Router from 'router';
import attachFastClick from 'fastclick';
//import 'weui';
import './app.less';
import Home from './home/home';
import Register from './register/register';
import Profile from './profile/profile';

attachFastClick.attach(document.body);

const router = new Router();
router.push(Home).push(Register).push(Profile).setDefault('/').init();