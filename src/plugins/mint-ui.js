import Vue from 'vue';
import 'mint-ui/lib/style.css';
import { Button, Cell,Toast,Indicator,MessageBox,Header,Tabbar, TabItem,Field,Loadmore} from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component(Cell.name);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Field.name, Field);
Vue.component(Loadmore.name, Loadmore);


Vue.prototype.$toast = (message,position='middle',duration=3000,className,iconClass) => {
    Toast({
        message: message,
        position: position,
        duration: duration,
        className: className,
        iconClass: iconClass,
    });
};
Vue.prototype.$loadIn=(text,spinnerType)=>{
    Indicator.open({
        text,
        spinnerType
    });
}
Vue.prototype.$loadOut=()=>{
    Indicator.close();
}
Vue.prototype.$messageBox=MessageBox;