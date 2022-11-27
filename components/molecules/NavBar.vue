<template>
  <div class="navbar">
    <NuxtLink to="/">
      <button v-if="back" class="back" @click="$emit('back')">
        <img
          src="../../assets/images/icons/ic_arrow_right.svg"
          :height="24"
          :width="24"
          class="flip"
        />
      </button>
    </NuxtLink>
    <img v-if="faviconUrl" :src="faviconUrl" class="favicon" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Navbar extends Vue {
  @Prop({ required: false, default: false }) readonly back!: boolean
  @Prop({ required: true }) readonly url!: string
  faviconData: any | null = null

  get faviconUrl(): string | null {
    if (!this.url) return null
    const { hostname } = new URL(this.url)
    if (!hostname) return null
    return 'https://api.faviconkit.com/' + hostname
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  width: 100%;
  position: relative;
  background-color: white;
}
.back {
  position: absolute;
  left: 12px;
  bottom: 8px;
  cursor: pointer;
}
.favicon {
  position: absolute;
  height: 24px;
  width: 24px;
  object-fit: contain;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}

.flip {
  transform: rotate(180deg);
}
</style>
