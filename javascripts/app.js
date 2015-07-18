/**
 * Created by lisheng on 15/7/18.
 */
var hhfe = angular.module('app', []);

// controller
hhfe.controller('MainController', ['$scope', function ($scope) {
  $scope.members = [{
    id: 0,
    isHHFE: true,
    name: 'HHFE',
    subInfo: 'HHFE',
    github: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 1,
    name: 'DIYgod',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    weibo: 'http://www.google.com',
    blog: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 2,
    name: 'DIYgod',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    weibo: 'http://www.google.com',
    blog: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 3,
    name: 'DIYgod',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    weibo: 'http://www.google.com',
    blog: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 4,
    name: 'DIYgod',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    weibo: 'http://www.google.com',
    blog: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 5,
    name: 'ls',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    weibo: 'http://www.google.com',
    blog: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  }, {
    id: 6,
    name: 'Aralic',
    sex: '男',
    profession: '前端工程师',
    age: 22,
    subInfo: '啦啦啦，天气真好！',
    github: 'https://github.com/Aralic',
    weibo: 'http://weibo.com/u/3059735367',
    blog: 'http://aralic.github.io/',
    avatar: 'http://i.imgur.com/14UphQ7.png'
  }];

  $scope.currentMember = {
    isHHFE: true,
    id: 0,
    name: 'HHFE',
    subInfo: '这家伙很懒，什么也没有留下',
    github: 'http://www.google.com',
    avatar: 'http://ww1.sinaimg.cn/mw690/569c32c8gw1ek3x8vdz44j205k05kq3a.jpg'
  };

  $scope.changeCurrentMemberById = function ($event) {
    $scope.currentMember = {};
    for (var props in $scope.members[this.member.id]) {
      $scope.currentMember[props] = $scope.members[this.member.id][props];
    }
  };

}]);