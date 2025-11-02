import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'

// Vant 组件按需引入
import {
  Button,
  Form,
  Field,
  CellGroup,
  Cell,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Popup,
  DatePicker,
  NavBar,
  Tag,
  Icon,
  Empty,
  Collapse,
  CollapseItem,
  showConfirmDialog
} from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
const pinia = createPinia()

// 注册 Vant 组件
app.use(Button)
app.use(Form)
app.use(Field)
app.use(CellGroup)
app.use(Cell)
app.use(RadioGroup)
app.use(Radio)
app.use(CheckboxGroup)
app.use(Checkbox)
app.use(Popup)
app.use(DatePicker)
app.use(NavBar)
app.use(Tag)
app.use(Icon)
app.use(Empty)
app.use(Collapse)
app.use(CollapseItem)

app.use(pinia)
app.use(router)
app.mount('#app')
