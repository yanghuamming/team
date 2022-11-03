window.addEventListener('load',function (){
    //轮播图
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    //鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter',function (){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function (){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // // 定时器
        timer = setInterval(function (){
            // 手动调用点击事件
            arrow_r.click();
        },3000);

    })

    // 动态生成小圈圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // 获取图片的长度
    var focusWidth = focus.offsetWidth;
    for(var i=0; i<ul.children.length; i++){
        var li = document.createElement('li');
        // 设置自定义属性
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 排它思想
      li.addEventListener('click',function (){
          for(var i=0; i<ol.children.length ;i++){
              ol.children[i].className='';
          }
          this.className = 'current';

          // 设置动画效果
          var index = this.getAttribute('index');
          animate(ul,-index*focusWidth);
          // 关连变量
          num = index;
          circle = index;
      })
    }
    ol.children[0].className='current';

    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);


    var num = 0;        //图片个数
    var circle =0;      //圆圈个数
    var flag =true;     //节流阀
// 右侧按钮动画
    arrow_r.addEventListener('click',function (){

       if(flag){
           flag = false;//关阀
           if(num==ul.children.length-1){
               ul.style.left=0;
               num =0;
           }
           num++;
           animate(ul,-num*focusWidth,function (){
               flag = true;//开阀
           });

           circle++;
           if(circle == ol.children.length){
               circle=0;
           }
           for(var i =0;i<ol.children.length;i++){
               ol.children[i].className='';
           }
           ol.children[circle].className='current';

       }

    })
// 左侧按钮动画
    arrow_l.addEventListener('click',function (){

        if(flag){
            flag=false;
            if(num==0){
                num = ul.children.length-1;
                ul.style.left=-num*focusWidth+'px';
            }
            num--;
            animate(ul,-num*focusWidth,function () {
                flag=true;
            });

            circle--;
            if(circle <0){
                circle=ol.children.length-1;
            }
            for(var i =0;i<ol.children.length;i++){
                ol.children[i].className=''
            }
            ol.children[circle].className='current';

        }
    })
    // 定时器
    var timer = setInterval(function (){
        // 手动调用点击事件
        arrow_r.click();
    },3000)




})

window.onload = function (){
    alert("dddddddddddd");
    // var user = document.querySelector('.user')
    // axios({
    //     method:"get",
    //     url:"http://5u1163329j.eicp.vip/b_war_exploded/MainServlet"
    // }).then(function (resp){
    //     var use = resp.data;
    //     console.log(use);
    //     user.innerHTML=use.userName;
    // })
    // alert("dddddddddddd");
}

