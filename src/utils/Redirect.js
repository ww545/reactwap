export function getRedirectPath({type,avatar}){
  let url = (type==='boss')?'/boss':'/staff'
    if(!avatar){
      url+='info'
    }
    return url
}


/*
* 根据用户信息跳转
* 1.user.type 根据用户type ( 是boss 跳转到/boss )  or(是staff 跳转到/staff)
* 2.user.avatar 用户是否有头像 （有头像调到 /bossinfo  /staffinfo）
*
* */