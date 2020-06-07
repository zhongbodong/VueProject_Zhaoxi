<template>
  <div id="app">
    <!-- <VueUseTest/> -->
    <div class="lay-head">
      <div class="lay-head-top">
        <div class="lay-head-top-inner">
          <div class="lay-head-top-left">
            <img src="/imgs/companyInfo/Logo1.png" alt />
            <span>咨询电话：1888888888</span>
            <span>咨询 QQ：8888888</span>
            <span>咨询微信：zhaoxi005</span>
          </div>
          <div class="lay-head-top-right">
            <span class="user-login">注册</span>
            <span class="user-login">登录</span>
            <span class="user-login">用户：</span>
            <span class="user-logout">退出</span>
          </div>
        </div>
      </div>
      <div class="lay-head-navi">
        <img src="/imgs/companyInfo/Logo2.png" alt />
        <ul>
          <li @click="selNo='Home'">
            <router-link to="/">首页</router-link>
            <span :class="{'navi-sel':selNo=='Home'}"></span>
          </li>
          <li @click="selNo='About'">
            <router-link to="/about">关于我们</router-link>
             <span :class="{'navi-sel':selNo=='About'}"></span>
          </li>
          <li>
            <router-link to>课程中心</router-link>
            <span></span>
          </li>
          <li @click="selNo='Recruit'">
            <router-link to="/recruit">诚聘英才</router-link>
            <span :class="{'navi-sel':selNo=='Recruit'}"></span>
          </li>
          <li>
            <router-link to>个人中心</router-link>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="lay-body">
      <router-view />
    </div>
    <div class="lay-left-window">
      <div class="left-pad">
        <div class="left-icon"></div>
        <span></span>
        <div class="left-content">咨询电话：18664876671</div>
      </div>
      <div class="left-pad">
        <div class="left-icon"></div>
        <span></span>
        <div class="left-content">咨询电话：18664876671</div>
      </div>
      <div class="left-pad">
        <div class="left-icon"></div>
        <span></span>
        <div class="left-content">咨询电话：18664876671</div>
      </div>
      <div class="left-pad">
        <div class="left-icon"></div>
        <span></span>
        <div class="left-content">咨询电话：18664876671</div>
      </div>
      <div class="left-qrcode">
        <img src="/imgs/companyInfo/qrCode.jpg" alt="">
      </div>
    </div>

    <div class="lay-foot">
      <div class="lay-foot-inner">
        <div class="lay-foot-inner-left">
          <p>
            <a href>关于我们</a>
            <span>|</span>
            <a href>诚聘英才</a>
            <span>|</span>
            <a href>课程中心</a>
            <span>|</span>
            <a href>个人中心</a>
            <span>|</span>
          </p>
          <p>版权所有 © 2019-2029 朝夕教育科技有限公司</p>
          <p>copyright © zhaoxi.com All Rights Reserved</p>
        </div>
        <div class="lay-foot-inner-center">
          <p>联系电话：18664876671</p>
          <p>企业微信：Zhaoxi005</p>
          <p>电子邮箱：Service@ZhaoxiEdu.Net</p>
          <p>网站备案：鄂ICP备19025999号-1</p>
        </div>
        <div class="lay-foot-inner-right">
          <img src="/imgs/companyInfo/erCode.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selNo:"/"
    }
  },
  mounted(){
    console.log(this.$route)
   var {name} = this.$route;
  this.selNo = name;
  },
  methods:{

  }
}
</script>
<style lang="scss">
body {
  background-color: #f0f0f0 !important;
  font-family: 微软雅黑;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.lay-head {
  height: 108px;
  width: 100%;
  .lay-head-top {
    position: relative;
    height: 36px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e6e6e6;
    .lay-head-top-inner {
      width: 1200px;
      margin: auto;
      overflow: hidden;
      .lay-head-top-left {
        height: 36px;
        line-height: 36px;
        float: left;
        font-size: 13px;
        span {
          margin-right: 10px;
        }
        img {
          height: 30px;
          width: 30px;
          vertical-align: middle;
        }
      }
      .lay-head-top-right {
        float: right;
        line-height: 36px;
        font-size: 13px;
        .user-login {
          cursor: pointer;
          margin-right: 10px;
        }
        .user-logout {
          cursor: pointer;
        }
        .user-logout:hover {
          color: red;
        }
      }
    }
  }
  .lay-head-navi {
    height: 66px;
    width: 1200px;
    margin: auto;
    position: relative;
    img {
      height: 58px;
      float: left;
      margin-top: 12px;
    }
    ul {
      float: right;
      margin-top: 6px;
      color: #000;
      li {
        cursor: pointer;
        float: left;
        list-style-type: none;
        margin: 18px 0 25px 0;
        font-size: 15px;
        position: relative;
        height: 40px;
        line-height: 40px;
        a {
          color: #000;
          padding: 0 25px;
          display: block;
          height: 40px;
          text-decoration: none;
        }
        a:visited {
          color: #000;
        }
        .navi-sel {
          width: 100%;
          left: 0;
        }
        span {
          width: 0;
          height: 2px;
          background-color: rgb(255, 118, 0);
          display: block;
          position: absolute;
          transition: 600ms;
          left: 50%;
        }
      }
      li:hover {
        span {
          width: 100%;
          left: 0;
        }
      }
    }
  }
}

.lay-foot {
  background-color: rgba(0, 0, 0, 0.38);
  height: 110px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  .lay-foot-inner {
    width: 1200px;
    margin: auto;
    > div {
      padding-top: 20px;
      float: left;
      text-align: left;
      width: 33%;
      p {
        padding-bottom: 6px;
      }
    }
    .lay-foot-inner-left {
      a {
        cursor: pointer;
        padding-right: 10px;
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        text-decoration: underline;
      }
      a:visited {
        color: #fff;
      }
      span {
        margin-right: 10px;
        font-size: 12px;
        color: #fff;
      }
    }
    .lay-foot-inner-center {
      padding-left: 88px;
    }
    .lay-foot-inner-right {
      padding-top: 10px;
      text-align: right;
      overflow: hidden;
      img {
        float: right;
        width: 330px;
      }
    }
  }
}
.lay-left-window {
  position: fixed;
  width: 220px;
  top: 36%;
  right: 10px;
  overflow: hidden;
  z-index: 10;
  .left-pad {
    position: relative;
    right: -170px;
    width: 220px;
    height: 50px;
    transition: 0.6s right;
    margin-bottom: 10px;
    .left-icon {
      height: 50px;
      width: 50px;

      float: left;
      background-repeat: no-repeat;
      background-position: center;
    }
    .left-content {
      height: 50px;
      color: #fff;
      font-size: 13px;
      text-align: center;
      line-height: 50px;
    }
    span{
      display: inline-block;
      position: absolute;
      width: 0;
      height: 0;
      left: -18px;
      top: 0;
      bottom: 0;
      margin: auto;
      border:10px transparent solid;
    }
  }
  .left-pad:nth-child(1) {
    .left-icon {
      background-color: #590088;
      background-image: url("/imgs/icons/wx.png");
    }
    .left-content {
      border: 1px solid #590088;
    }
  }
  .left-pad:nth-child(2) {
    .left-icon {
      background-color: #99d693;
      background-image: url("/imgs/icons/QQ.png");
    }
    .left-content {
      border: 1px solid #99d693;
      background-color: #aedeaa;
    }
    
  }
  .left-pad:nth-child(3) {
    .left-icon {
      background-color: #fb8e78;
      background-image: url("/imgs/icons/phone.png");
    }
    .left-content {
      border: 1px solid #fb8e78;
      background-color: #fdb4a5;
    }
  }
  .left-pad:nth-child(4) {
    .left-icon {
      background-color: #c73c64;
      background-image: url("/imgs/icons/topArr.png");
    }
    .left-content {
      border: 1px solid #c73c64;
      background-color: #db7692;
    }
  }

  .left-pad:hover {
    .left-icon {
    }
  }
  .left-pad:nth-child(1):hover {
    span{
      border-right: 8px solid #590088;
    }
  }
  .left-pad:nth-child(1):hover ~ .left-qrcode{
    display: block;
  }
  .left-pad:nth-child(2):hover {
    right: 0;
    .left-icon {
      background-color: #fff;
      background-image: url("/imgs/icons/QQ_full.png");
      border: 1px solid #99d693;
    }
  }
  .left-pad:nth-child(3):hover {
    right: 0;
    .left-icon {
      background-color: #fff;
      background-image: url("/imgs/icons/phone_full.png");
      border: 1px solid #fb8e78;
    }
  }
  .left-pad:nth-child(4):hover {
    right: 0;
    .left-icon {
      background-color: #fff;
      background-image: url("/imgs/icons/topArr_full.png");
      border: 1px solid #c73c64;
    }
  }

  .left-qrcode{
    width: 88px;
    height: 88px;
    position: absolute;
    left: 60px;
    top: 0;
    display: none;
     img{
       height: 88px;
       width: 88px;
     }
  }
}
</style>
