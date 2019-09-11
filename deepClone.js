function deepClone(e){
    let deepData;
    let result = isType(e);//判断类型
    if(result=='Array'){
        deepData=[]
    }else if(result=='Object'){
        deepData={}
    }else{
        return e
    }
    for(let i in e){
        let copy=e[i];
        if(result=='Array'||result=='Object'){
            deepData[i]=deepClone(copy)//递归
        }else{
            deepData[i]=copy
        }
    }
    return deepData
}

//判断传进来的参数是什么类型
function isType(e){
    let type;
    if(e=='undefined'){
        type='undefined'
    }else if(e=='null'){
        type='null'
    }else{
        type=Object.prototype.toString.call(e).slice(8,-1);
        //Object.prototype.toString.call(e)可判断js的所有数据类型，不只是基本类型
        //typeOf(e)只能判断最基本的数据类型
    }
    return type;
}

let a=[{a:1,b:2}]

let b=deepClone(a)
console.log(b)