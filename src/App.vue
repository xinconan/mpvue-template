<script>

export default {
  onLaunch(e) {
    // 这里可以获取场景值，https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html
    // 用来判断一些入口和公众号关注组件能否被使用
    console.log(e.scene);
  },
  onError(err) {
    console.log(err);
  },
};
</script>

<style lang="scss">
// 定义全局css
// font-size
.fs{
  font-size: 28rpx;
  line-height: 40rpx;
}
.fs-sm{
  font-size: 20rpx;
  line-height: 40rpx;
}
.fs-md{
  font-size: 24rpx;
  line-height: 33rpx;
}
.fs-mdl{
  font-size: 26rpx;
  line-height: 37rpx;
}
.fs-lg{
  font-size: 32rpx;
  line-height: 44rpx;
}
.fs-xl{
  font-size: 36rpx;
  line-height: 50rpx;
}
.bold{
  font-weight: bold;
}

// margin
.mgl-lg{
  margin-left: 30rpx;
}
.mgl{
  margin-left: 20rpx;
}
.mgl-sm{
  margin-left: 10rpx;
}
.mgr{
  margin-right: 20rpx;
}
.mgr-lg{
  margin-right: 30rpx;
}
.mgr-sm{
  margin-right: 10rpx;
}
.mgt-sm{
  margin-top: 10rpx;
}
.mgt{
  margin-top: 20rpx;
}
.mgb{
  margin-bottom: 20rpx;
}
.pdl{
  padding-left: 20rpx;
}
.pdl-lg{
  padding-left: 30rpx;
}
.pdr-lg{
  padding-right: 30rpx;
}
.pdt-lg{
  padding-top: 30rpx;
}
.pdt{
  padding-top: 20rpx;
}
.pdb{
  padding-bottom: 20rpx;
}
.pdb-lg{
  padding-bottom: 30rpx;
}

// flex
.flex{
  display: flex;
  align-items: center;
}
.flex-center{
  justify-content: center;
}
.flex-end{
  justify-content: flex-end;
}
.flex-start{
  align-items: start;
}
.flex-item{
  flex: 1;
}
.flex-column{
  flex-direction: column;
}
.flex-between{
  display: flex;
  justify-content: space-between;
}
.flex-wrap{
  flex-wrap: wrap;
}

// border
.bd{
  border-bottom: 1rpx solid #eee;
}
.bdt{
  border-top: 1rpx solid #eee;
}

// text
.tx-center{
  text-align: center;
}
.tx-right{
  text-align: right;
}
.tx-87{
  color: $tx-87;
}
.tx-54{
  color: $tx-54;
}
.tx-26{
  color: $tx-26;
}
.tx-base{
  color: $base;
}
.el{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-wrapper{
  margin: 0 20rpx 20rpx;
  background: #FFFFFF;
  box-shadow: 0 0 10rpx 0 rgba(0,0,0,0.10);
  border-radius: 10rpx;
}

page{
  background-color: #f5f5f5;
  color: rgba(0,0,0,0.87);
}
textarea, input{
  color: #222;
}
button{
  box-sizing: border-box;

  &::after{
    border: none;
  }
}
.btn-base{
  box-shadow: 0 8rpx 16rpx 0 rgba(254,71,114,0.40);
  border-radius: 44rpx;
  color: #fff;
  background: $base;
  font-weight: bold;
  font-size: 36rpx;
  text-align: center;
  height: 88rpx;
  line-height: 88rpx
}
.x-hidden{
  overflow: hidden;
}
.x-wb{
  word-break: break-all;
}
</style>
