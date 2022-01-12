<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <el-row style="height :60vh" justify="center" align="middle" :gutter="10">
    <el-col :xs="24" :sm="12" :md="9" :xl="6">
      <h1 id="page-header" tabindex="-1">
        Login
      </h1>
      <el-card class="light" shadow="never">
        <el-form label-position="left" label-width="100px" :model="auth.formData">
          <el-form-item label="User ID">
            <el-input v-model="auth.userid" placeholder="Masukan user id" />
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="auth.password" placeholder="Masukan password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="auth.login">
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
