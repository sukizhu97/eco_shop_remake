<template>
  <div class="container">
    <!-- 盒子区域 -->
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="sculpture">
        <img src="vite.svg" alt="">
      </div>
      <!-- 表单区域 -->
      <div class="login_form">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="50px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
        <el-form-item prop="name" required>
          <el-col :span="20">
            <el-input v-model="ruleForm.name" :prefix-icon="User" />
          </el-col>
        </el-form-item>
        <el-form-item prop="password" required>
          <el-col :span="20">
            <el-input type="password" v-model="ruleForm.password" :prefix-icon="Lock" />
          </el-col>
        </el-form-item>
        <el-form-item style="margin-left: 150px">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue'
const formSize = ref('default')
const ruleFormRef = ref('')
const ruleForm = reactive({
  name : 'admin',
  password: ''
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, message: 'Length should more than 1', trigger: 'blur' },
  ],
  password : [
  {  required: true, message: 'Please input Activity password', trigger: 'blur' },
    { min: 1, message: 'Length should more than 1', trigger: 'blur' },
  ]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}


</script>

<style scoped lang="less">
.container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  height: 300px;
  width: 450px;
  position: absolute; // 子绝父相 居中
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  .sculpture {
    height: 100px;
    width: 100px;
    border-radius: 50px; // 变成圆形
    margin-left: 175px;
    margin-top: -50px;
    zoom: 1;
    background-color: #fff;
    img {
      height: 100px;
      width: 60px;
    }
  }
  .login_form {
    margin-top: 50px;
  }
}
</style>