import styles from './home.less';
import tpl from 'raw!./home.html';

export default {
    url: '/',
    className: 'home',
    render: function (){
        return tpl;
    }
};