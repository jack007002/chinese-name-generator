<template>
  <div class="knowledge-page">
    <van-nav-bar
      title="取名知识"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="content">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item
          v-for="(item, index) in knowledgeList"
          :key="index"
          :title="item.title"
          :name="index"
        >
          <div class="knowledge-content" v-html="item.content"></div>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeNames = ref([0])

const knowledgeList = [
  {
    title: '取名的基本原则',
    content: `
      <p><strong>1. 音韵和谐</strong></p>
      <p>名字读起来要顺口，避免拗口的组合。注意声调的搭配，平仄相间更好听。</p>
      <p><strong>2. 字义美好</strong></p>
      <p>选择寓意积极、美好的字，避免生僻字和歧义字。</p>
      <p><strong>3. 简洁易记</strong></p>
      <p>名字不宜过于复杂，便于书写和记忆。</p>
    `
  },
  {
    title: '五行与取名',
    content: `
      <p>五行包括金、木、水、火、土，根据生辰八字可以推算五行缺失。</p>
      <p><strong>金：</strong>锐、钢、铭、鑫等</p>
      <p><strong>木：</strong>林、森、柏、桐等</p>
      <p><strong>水：</strong>海、江、涛、泽等</p>
      <p><strong>火：</strong>炎、焱、煜、烨等</p>
      <p><strong>土：</strong>坤、培、城、堃等</p>
    `
  },
  {
    title: '诗词取名技巧',
    content: `
      <p>从古诗词中取名是传统且优雅的方式：</p>
      <p><strong>诗经：</strong>适合女孩名，如"静姝"、"婉如"</p>
      <p><strong>楚辞：</strong>适合男孩名，如"怀瑾"、"云帆"</p>
      <p><strong>唐诗宋词：</strong>意境优美，如"思源"、"明月"</p>
    `
  },
  {
    title: '取名常见误区',
    content: `
      <p><strong>1. 过于追求独特</strong></p>
      <p>使用生僻字会给孩子带来不便。</p>
      <p><strong>2. 忽视谐音</strong></p>
      <p>注意名字的谐音，避免不雅的联想。</p>
      <p><strong>3. 盲目跟风</strong></p>
      <p>避免使用过于流行的名字，重名率高。</p>
    `
  }
]

const onClickLeft = () => {
  router.back()
}
</script>

<style scoped>
.knowledge-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.content {
  padding: 20px;
}

.knowledge-content {
  padding: 15px;
  line-height: 1.8;
  color: #666;
}

.knowledge-content p {
  margin-bottom: 10px;
}

.knowledge-content strong {
  color: #333;
  font-weight: 600;
}
</style>
