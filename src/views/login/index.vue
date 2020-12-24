<template>
  <div class="login-container">
    <div class="login-head">
      <div class="logo"></div>
    </div>
    <el-form
      class="login-form"
      ref="login-form"
      :model="user"
      :rules="formRules"
    >
      <el-form-item prop="LoginID">
        <el-input
          v-model.trim="user.LoginID"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item prop="LoginPwd">
        <el-input
          v-model.trim="user.LoginPwd"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onLogin" class="login-btn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { http_login } from "@/api/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        LoginID: "", //用户名
        LoginPwd: "", //密码
      },
      // checked:false,

      formRules: {
        LoginID: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        LoginPwd: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onLogin() {
      // const user = this.user
      this.$refs["login-form"].validate((valid, err) => {
        if (!valid) {
          return;
        }
        // 验证通过，请求登录
        this.login();
      });
      // this.loginLoading = true;
    },
    login() {
      let _this = this
      http_login(this.user).then(res => {
        console.log(res);
        _this.$message({
          message:'登录成功',
          type:'success'
        })
     
      }).catch(err=>{
          console.log('登录失败',err);
          _this.$message.error('登录失败,手机号验证失误')
        })
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("./login_bg.jpg") no-repeat;
  background-size: cover;
  .login-head {
    display: flex;
    justify-content: center;
    .logo {
      width: 100%;
      height: 57px;
      background: url("./logo_index.png") no-repeat;
      background-size: contain;
    }
  }
  .login-form {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>