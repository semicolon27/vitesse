<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()

</script>

<template>
  <div>
    Hello World
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
