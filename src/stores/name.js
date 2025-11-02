import { defineStore } from 'pinia'

export const useNameStore = defineStore('name', {
  state: () => ({
    // 用户输入的信息
    userInfo: {
      surname: '',
      gender: '',
      birthDate: '',
      nameLength: '',
      style: '',
      wuxing: [],
      avoidWords: []
    },
    // 生成的名字列表
    generatedNames: [],
    // 收藏的名字
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
  }),

  getters: {
    getFavorites: (state) => state.favorites,
    isFavorite: (state) => (name) => {
      return state.favorites.some(item => item.fullName === name)
    }
  },

  actions: {
    // 设置用户信息
    setUserInfo(info) {
      this.userInfo = { ...this.userInfo, ...info }
    },

    // 设置生成的名字
    setGeneratedNames(names) {
      this.generatedNames = names
    },

    // 添加收藏
    addFavorite(nameData) {
      if (!this.isFavorite(nameData.fullName)) {
        this.favorites.push(nameData)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      }
    },

    // 移除收藏
    removeFavorite(name) {
      this.favorites = this.favorites.filter(item => item.fullName !== name)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    // 清空收藏
    clearFavorites() {
      this.favorites = []
      localStorage.removeItem('favorites')
    }
  }
})
