<template>
  <div class="test-page">
    <van-nav-bar
      title="名字测试"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="content">
      <div class="intro">
        <p>输入已有的名字，为您分析评分</p>
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="testName"
            name="name"
            label="完整姓名"
            placeholder="请输入完整姓名"
            :rules="[{ required: true, message: '请输入姓名' }]"
          />
        </van-cell-group>

        <div class="button-container">
          <van-button round block type="primary" native-type="submit">
            开始测试
          </van-button>
        </div>
      </van-form>

      <div v-if="result" class="result-section">
        <div class="score-card">
          <h2>综合评分</h2>
          <div class="score">{{ result.score }}</div>
          <p class="score-desc">{{ result.description }}</p>
        </div>

        <van-cell-group inset title="详细分析">
          <van-cell title="音韵评分" :value="result.rhythm + '分'" />
          <van-cell title="字义评分" :value="result.meaning + '分'" />
          <van-cell title="五行评分" :value="result.wuxing + '分'" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { testName as testNameFunc } from '../utils/nameGenerator'

const router = useRouter()
const testName = ref('')
const result = ref(null)

const onClickLeft = () => {
  router.back()
}

const onSubmit = () => {
  result.value = testNameFunc(testName.value)
}
</script>

<style scoped>
.test-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
}

.button-container {
  margin-top: 20px;
  padding: 0 16px;
}

.result-section {
  margin-top: 30px;
}

.score-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px 20px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.score-card h2 {
  font-size: 18px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.score {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 10px;
}

.score-desc {
  font-size: 16px;
  opacity: 0.9;
}
</style>
