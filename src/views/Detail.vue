<template>
  <div class="detail-page">
    <van-nav-bar
      title="名字详情"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="content" v-if="nameData">
      <div class="name-header">
        <h1 class="name">{{ nameData.fullName }}</h1>
        <p class="pinyin">{{ nameData.pinyin }}</p>
        <van-tag type="primary" size="large">{{ nameData.score }}分</van-tag>
      </div>

      <van-cell-group inset title="字义解析">
        <van-cell :title="char.char" :label="char.meaning" v-for="char in nameData.characters" :key="char.char" />
      </van-cell-group>

      <van-cell-group inset title="综合分析">
        <van-cell title="五行属性" :value="nameData.wuxing" />
        <van-cell title="音韵评价" :value="nameData.rhythm" />
        <van-cell title="文化出处" :value="nameData.origin" />
      </van-cell-group>

      <div class="action-bar">
        <van-button
          round
          block
          :type="isFavorite ? 'warning' : 'primary'"
          @click="toggleFavorite"
        >
          {{ isFavorite ? '取消收藏' : '收藏此名' }}
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useNameStore } from '../stores/name'

const router = useRouter()
const route = useRoute()
const nameStore = useNameStore()

const nameData = ref(null)

const isFavorite = computed(() => {
  return nameData.value ? nameStore.isFavorite(nameData.value.fullName) : false
})

onMounted(() => {
  const name = decodeURIComponent(route.params.name)
  // 从生成的名字列表中查找
  nameData.value = nameStore.generatedNames.find(n => n.fullName === name)
})

const onClickLeft = () => {
  router.back()
}

const toggleFavorite = () => {
  if (isFavorite.value) {
    nameStore.removeFavorite(nameData.value.fullName)
  } else {
    nameStore.addFavorite(nameData.value)
  }
}
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
}

.name-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 40px 20px;
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.name {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.pinyin {
  font-size: 18px;
  margin-bottom: 15px;
  opacity: 0.9;
}

.action-bar {
  margin-top: 30px;
}
</style>
