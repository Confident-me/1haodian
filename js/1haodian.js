$(function(){
/********************************/
   //文本框事件
     var inputs=$(".inputs")[0];
    inputs.onfocus=function(){//表单获得焦点
       if(inputs.value=="请输入关键词"){
    	inputs.value="";
    	}
    }
    inputs.onblur=function(){
    	if(inputs.value){

    	}else{
    		inputs.value="请输入关键词";
    	}
    }
 
/************************************/

//下拉菜单 左边送货地址
var yiji=$(".yiji");
        var erji=$(".erji");
        for(var i=0;i<yiji.length;i++){
            yiji[i].index=i;
            hover(yiji[i],function(){
                var lis=$("li",erji[this.index]);
                var h=lis[0].offsetHeight;
                erji[this.index].style.height=0+"px";
                animate(erji[this.index],{height:lis.length*h},600,Tween.Linear);
                },function(){
                    animate(erji[this.index],{height:0},600,Tween.Linear)
            });

        }

/************************************/

//下拉菜单 右边 我的1号店，搜藏夹，客户服务
var yiji1=$(".yiji1");
var erji1=$(".erji1");
        for(var i=0;i<yiji1.length;i++){
            yiji1[i].index=i;
            hover(yiji1[i],function(){
                var lis=$("li",erji1[this.index]);
                var h=lis[0].offsetHeight;
                erji1[this.index].style.height=0+"px";
                animate(erji1[this.index],{height:lis.length*h},600,Tween.Linear);
                },function(){
                    animate(erji1[this.index],{height:0},600,Tween.Linear)
            });

        }


/************************************/

//下拉菜单 右边 我的1号店，搜藏夹，客户服务
var yiji2=$(".yiji2");
var erji2=$(".erji2");
        for(var i=0;i<yiji2.length;i++){
            yiji2[i].index=i;
            hover(yiji2[i],function(){
                var lis=$("li",erji2[this.index]);
                var h=lis[0].offsetHeight;
                erji2[this.index].style.height=0+"px";
                animate(erji2[this.index],{height:lis.length*h},600,Tween.Linear);
                },function(){
                    animate(erji2[this.index],{height:0},600,Tween.Linear)
            });

        }
/************************************/

var yiji3=$(".yiji3");
var erji3=$(".erji3");
        for(var i=0;i<yiji3.length;i++){
            yiji3[i].index=i;
            hover(yiji3[i],function(){
                var lis=$("div",erji3[this.index]);
                var h=lis[0].offsetHeight;
                erji3[this.index].style.height=0+"px";
                animate(erji3[this.index],{height:lis.length*h},600,Tween.Linear);
                },function(){
                    animate(erji3[this.index],{height:0},600,Tween.Linear)
            });

        }

/**************************************/
var yiji5=getClass("yiji5");
    //alert(yiji5);
    var erji5=getClass("erji5");
    for(var i=0;i<yiji5.length;i++){
      yiji5[i].index=i;
       yiji5[i].onmouseover=function(){
        for(var j=0;j<erji5.length;j++){
            erji5[j].style.display="none";
            yiji5[j].style.fontWeight="normal";
            yiji5[j].style.textDecoration="none";
        }
        erji5[this.index].style.display="block";
        this.style.fontWeight="bold";
        //this.style.textDecoration="underline";
       }
       yiji5[i].onmouseout=function(){
        this.style.textDecoration="";
        erji5[this.index].style.display="none";
       }
    }

/************************************/

var yiji4=$(".yiji4")[0];
var erji4=$(".erji4")[0];
hover(yiji4,function(){
    var lis=$("div",erji4);
    var h=lis[0].offsetHeight;
    animate(erji4,{height:h},600,Tween.Linear);
    erji4.style.borderTop="2px solid red";
    },
    function(){
        animate(erji4,{height:0},600,Tween.Linear)
        erji4.style.borderTop="";
    }
);

        

/************************************/

//banner轮播 事件
var imgs=$(".imgbox");//获取
        //alert(imgs);
        var btn=$(".btn");
        var num=1;
        var imgbox=$(".imgbox");
        //alert(num);
        function aa(){
            if(num==7){//当num=4的时候就给它赋值成0
                num=0;
            }
            for(var i=0;i<imgs.length;i++){//遍历banner图片
                 imgs[i].style.zIndex=2;//初始的层级都为2
                 btn[i].style.background="#ccc";//小按钮初始的背景颜色
                 btn[i].style.color="#333";//字体颜色
            }
            imgs[num].style.zIndex=5;
            btn[num].style.background="#333";
            btn[num].style.color="#ccc";
            num++;
            //alert(imgs[num]);
        }
        var t=setInterval(aa,2000);//时间函数
         for(var i=0;i<btn.length;i++){//遍历小按钮
             btn[i].index=i;//index就是保存当前对象的i值
             btn[i].onmouseover=function(){
                clearInterval(t);//当鼠标滑上去，停止时间函数。
                for(var j=0;j<btn.length;j++){
                    imgs[j].style.zIndex=2;
                    btn[j].style.background="#ccc";
                    btn[j].style.color="#333";
                }
                imgs[this.index].style.zIndex=5;
                btn[this.index].style.background="#333";
                btn[this.index].style.color="#ccc";
           }
           btn[i].onmouseout=function(){
            t=setInterval(aa,2000);
            num=this.index+1;
           }
         }
            for(var i=0;i<imgbox.length;i++){
                imgbox[i].index=i;
                imgbox[i].onmouseover=function(){
                  clearInterval(t);  
                }
                imgbox[i].onmouseout=function(){
                    t=setInterval(aa,2000);
                }
            }

/************************************/

/******* 11F选项卡 *********/
var boxa1=getClass("box-a1");
    //alert(boxa1);
    var dabox=getClass("f11-ka");
    for(var i=0;i<boxa1.length;i++){
      boxa1[i].index=i;
       boxa1[i].onclick=function(){
        for(var j=0;j<dabox.length;j++){
            dabox[j].style.display="none";
            boxa1[j].style.fontWeight="normal";
            boxa1[j].style.textDecoration="none";
        }
        dabox[this.index].style.display="block";
        this.style.fontWeight="bold";
        this.style.textDecoration="underline";
       }
    }

/************ 图片按需加载 ****************/

var floor=$(".floor");
        
        var ch=document.documentElement.clientHeight;
        window.onscroll=function(){
            var scrollT=getScrollT();//
        //document.title=scrollT;
            //alert(floor[0].offsetTop)
            for(var i=0;i<floor.length;i++){
            if(floor[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
                var imgs=$("img",floor[i]);//获取当前楼层的所有图片
                for(var j=0;j<imgs.length;j++){//遍历图片
                    imgs[j].src=imgs[j].getAttribute("aa");//把每一个图片的aa属性的值赋值给src属性即可
                }
                //alert(imgs.length)
            }
        }


/** 楼层跳转，（onscroll事件不能重复，所有的事件必须写到一个onscroll事件里面）****/
        var h=document.documentElement.clientHeight;
        //var scrollT=getScrollT();
         for(var i=0;i<tiaozhuan.length;i++){
            tiaozhuan[i].t=tiaozhuan[i].offsetTop;
            if(tiaozhuan[i].t<scrollT+h/2){
                for(var j=0;j<louceng.length;j++){
                    louceng[j].style.display="block";
                }
                //louceng[i]=tiaozhuan[i];
                louceng[i].style.display="none";
                //alert(louceng.length)
            }
         }

         
         var obj=document.documentElement.scrollTop?document.documentElement:document.body;
         
         if(obj.scrollTop>=580){
            loucengbox.style.display="block";
         }else{
            loucengbox.style.display="none";
         }

         var rightdhWord1=$(".rightdh-word1")[0];
      rightdhWord1.onclick=function(){
        animate(obj,{scrollTop:0})
      }
 }

/************* 8楼左小轮播   *************/

    var t8=setInterval(moveleft,2000);
          function moveleft()
        {
           var father=$(".lunbo-box")[0];
             var first=getFirst(father);
             animate(father,{left:-100},600,Tween.Linear,function()
                {//用回调函数来等动画执行完成在运行恢复功能，如果写在外边会导致在执行动画的过程中会同时执行下边的代码导致效果错误
                    father.appendChild(first);
                    father.style.left=0+"px";
                });   
        }
        
        function moveright()
        {
             var father=$(".lunbo-box")[0];
             var last=getLast(father);
             var first=getFirst(father);
             father.style.left=-100+"px";
             father.insertBefore(last,first);
             animate(father,{left:0},600,Tween.Linear);
         }
         var left=$(".btn-z")[0];
         var right=$(".btn-y")[0];
         left.onmouseover=right.onmouseover=function()
         {
             clearInterval(t8);
         }
         left.onmouseout=right.onmouseout=function()
         {
            t8=setInterval(moveleft,2000);
         }
             left.onclick=function()
             {
               moveleft();
             }
             right.onclick=function()
             {
                moveright();
             }





/********** 1楼图片左移  *************/
    var hua=$(".hua");
    //alert(hua)
    for(var i=0;i<hua.length;i++){
        hua[i].index=i;
        hua[i].onmouseover=function(){
          for(var j=0;j<hua.length;j++){
            hua[j].style.left="";
          }
             hua[this.index].style.left=30+"px";   
        }
         hua[i].onmouseout=function(){
             hua[this.index].style.left=40+"px";   
        }
    }
    
/********* 楼层banner 轮播   **********/
   
   function qb(a){
         var xiaobox=$(".xiaobox")[a];
         function qq(){
        var first=getFirst(xiaobox);
        var last=getLast(xiaobox);
        animate(xiaobox,{left:-330},function(){
            xiaobox.appendChild(first,last);
            xiaobox.style.left=0+"px";
        })
       }
        var tq=setInterval(qq,3000);
   }
//吧上面的封装成一个函数，然后调用上面的函数qb
    var xiaobox=$(".xiaobox");
    for(var i=0;i<xiaobox.length;i++){
        qb(i);
    }
//然后遍历所有，即：调用上面封装的盒子


/*********   楼层跳转  ***********/

  var tiaozhuan=$(".tiaozhuan");
  //alert(tiaozhuan[0].offsetTop)
  //alert(tiaozhuan.length)
  var loucengbox=$(".loucengbox")[0];
  //alert(loucengbox[0])
  var louceng=$(".louceng");
  var imgsbox=$(".imgsbox");
  var rightdhWord=$(".rightdh-word");
  //alert(imgsbox.length)

  for(var i=0;i<tiaozhuan.length;i++){
    rightdhWord[i].index=i;

    rightdhWord[i].onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:tiaozhuan[this.index].offsetTop})
    }
  }
  
 for(var i=0;i<imgsbox.length;i++){
    imgsbox[i].index=i;
    imgsbox[i].onmouseover=function(){
        louceng[this.index].style.display="none";
        
    }
    imgsbox[i].onmouseout=function(){
        louceng[this.index].style.display="block";
    }
 }


 







})