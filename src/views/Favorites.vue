<template>
  <div class="favorites-page">
    <van-nav-bar
      title="我的收藏"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="content">
      <van-empty
        v-if="favorites.length === 0"
        description="还没有收藏的名字"
      />

      <div v-else class="name-list">
        <div
          v-for="(name, index) in favorites"
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
              name="delete-o"
              color="#ee0a24"
              size="24"
              @click.stop="removeFavorite(name.fullName)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNameStore } from '../stores/name'
import { showConfirmDialog } from 'vant'

const router = useRouter()
const nameStore = useNameStore()

const favorites = computed(() => nameStore.getFavorites)

const onClickLeft = () => {
  router.back()
}

const viewDetail = (name) => {
  router.push(`/detail/${encodeURIComponent(name.fullName)}`)
}

const removeFavorite = (name) => {
  showConfirmDialog({
    title: '确认删除',
    message: '确定要取消收藏这个名字吗？',
  }).then(() => {
    nameStore.removeFavorite(name)
  }).catch(() => {
    // 取消操作
  })
}
</script>

<style scoped>
.favorites-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
}

.name-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
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
</style>
