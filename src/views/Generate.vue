<template>
  <div class="generate-page">
    <van-nav-bar
      title="生成结果"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="content">
      <div class="result-header">
        <p class="tip">为您生成了 {{ names.length }} 个好名字</p>
      </div>

      <div class="name-list">
        <div
          v-for="(name, index) in names"
          :key="index"
          class="name-card"
          @click="viewDetail(name)"
        >
          <div class="name-main">
            <h3 class="name-text">{{ name.fullName }}</h3>
            <p class="name-pinyin">{{ name.pinyin }}</p>
          </div>
          <div class="name-info">
            <van-tag type="primary">{{ name.score }}分</van-tag>
            <van-icon
              :name="isFavorite(name.fullName) ? 'star' : 'star-o'"
              :color="isFavorite(name.fullName) ? '#ff6b9d' : '#999'"
              size="24"
              @click.stop="toggleFavorite(name)"
            />
          </div>
        </div>
      </div>

      <div class="action-buttons">
        <van-button round block type="primary" @click="regenerate">
          重新生成
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useNameStore } from '../stores/name'
import { generateNames } from '../utils/nameGenerator'

const router = useRouter()
const nameStore = useNameStore()

const names = ref([])

const isFavorite = computed(() => (name) => nameStore.isFavorite(name))

onMounted(() => {
  // 生成名字
  names.value = generateNames(nameStore.userInfo)
  nameStore.setGeneratedNames(names.value)
})

const onClickLeft = () => {
  router.back()
}

const viewDetail = (name) => {
  router.push(`/detail/${encodeURIComponent(name.fullName)}`)
}

const toggleFavorite = (name) => {
  if (isFavorite.value(name.fullName)) {
    nameStore.removeFavorite(name.fullName)
  } else {
    nameStore.addFavorite(name)
  }
}

const regenerate = () => {
  names.value = generateNames(nameStore.userInfo)
  nameStore.setGeneratedNames(names.value)
}
</script>

<style scoped>
.generate-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
}

.result-header {
  text-align: center;
  margin-bottom: 20px;
}

.tip {
  color: #666;
  font-size: 14px;
}

.name-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.name-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s;
}

.name-card:active {
  transform: scale(0.98);
}

.name-main {
  flex: 1;
}

.name-text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.name-pinyin {
  font-size: 14px;
  color: #999;
}

.name-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.action-buttons {
  margin-top: 20px;
}
</style>
