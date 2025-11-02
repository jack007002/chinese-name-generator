<template>
  <div class="home-page">
    <div class="header">
      <h1 class="title">中文取名神器</h1>
      <p class="subtitle">为宝宝取一个美好的名字</p>
    </div>

    <van-form @submit="onSubmit" class="form-container">
      <van-cell-group inset>
        <van-field
          v-model="formData.surname"
          name="surname"
          label="姓氏"
          placeholder="请输入姓氏"
          :rules="[{ required: true, message: '请输入姓氏' }]"
        />

        <van-field name="gender" label="性别">
          <template #input>
            <van-radio-group v-model="formData.gender" direction="horizontal">
              <van-radio name="male">男孩</van-radio>
              <van-radio name="female">女孩</van-radio>
              <van-radio name="neutral">不限</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field name="nameLength" label="名字字数">
          <template #input>
            <van-radio-group v-model="formData.nameLength" direction="horizontal">
              <van-radio name="1">单字</van-radio>
              <van-radio name="2">双字</van-radio>
              <van-radio name="all">不限</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-model="formData.birthDate"
          is-link
          readonly
          name="birthDate"
          label="出生日期"
          placeholder="选择日期（可选）"
          @click="showDatePicker = true"
        />

        <van-field name="style" label="取名风格">
          <template #input>
            <van-checkbox-group v-model="formData.style" direction="horizontal">
              <van-checkbox name="classic">古典诗意</van-checkbox>
              <van-checkbox name="modern">现代简约</van-checkbox>
              <van-checkbox name="elegant">文雅书香</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>

        <van-field
          v-model="formData.avoidWords"
          name="avoidWords"
          label="避讳字"
          placeholder="输入要避开的字（可选）"
        />
      </van-cell-group>

      <div class="button-container">
        <van-button round block type="primary" native-type="submit">
          开始取名
        </van-button>
      </div>
    </van-form>

    <van-popup v-model:show="showDatePicker" position="bottom">
      <van-date-picker
        @confirm="onDateConfirm"
        @cancel="showDatePicker = false"
        :min-date="new Date(2000, 0, 1)"
        :max-date="new Date()"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useNameStore } from '../stores/name'

const router = useRouter()
const nameStore = useNameStore()

const formData = reactive({
  surname: '',
  gender: 'neutral',
  nameLength: 'all',
  birthDate: '',
  style: ['classic'],
  avoidWords: ''
})

const showDatePicker = ref(false)

const onDateConfirm = ({ selectedValues }) => {
  formData.birthDate = selectedValues.join('-')
  showDatePicker.value = false
}

const onSubmit = () => {
  nameStore.setUserInfo(formData)
  router.push('/generate')
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.header {
  text-align: center;
  padding: 40px 0;
  color: white;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  opacity: 0.9;
}

.form-container {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.button-container {
  margin-top: 30px;
  padding: 0 20px;
}
</style>
