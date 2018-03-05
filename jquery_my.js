class $ {
   constructor (selector){

      this.selector = selector;
      this.target = document.querySelectorAll(selector);


   }
   click (callback){
      for (let value of this.target){
        value.addEventListener('click' , callback.bind(this.selector));
      }
   }

   css (obj) {
      for (let value of this.target){
        for (let key in obj ){
        value.style[key] = obj[key];
      }
    }
    return this;
  }

  on ( event , callback) {
    for (let value of this.target){
        value.addEventListener(event , callback.bind(this.selector));
      }
    }
  hide () {
    for (let value of this.target){
        value.style['display'] = 'none';
    }
    return this;
  }
  show () {
    for (let value of this.target){
        value.style['display'] = 'block';
    }
    return this;
  }

  height (){
    return this.target[0].clientHeight;
  }
  width () {
    return this.target[0].clientWidth;
  }
  innerHeight (){
    return this.target[0].offsetHeight;
  }
  innerWidth () {
    return this.target[0].offsetWidth;
  }

  next (){
    let next = this.target[this.target.length - 1].nextElementSibling;
    this.selector = '.' + next.className  next.tagName;
    this.target = document.querySelectorAll(this.selector);
    return this;
  }
  prev (){
    let prev = this.target[this.target.length - 1].previousElementSibling;
    console.log(prev);
    this.selector = '.' + prev.className  prev.tagName;
    this.target = document.querySelectorAll(this.selector);
    return this;
  }


  animate (options) {

   for (let value of this.target){
    value.style.transition = '1s all ';
    for (let keys in options){
      value.style[keys] = options[keys] ;
    }
  }
    return this;
  }

  scroll (values) {

    let timer = setInterval (function () {

    document.documentElement.scrollTop += 5;

    if( document.documentElement.scrollTop  values) clearInterval(timer);
    if( document.documentElement.scrollHeight - 10  document.documentElement.clientHeight + pageYOffset) clearInterval(timer);

    } , 0)
    return this;
  }

   print (){
     console.log(this.selector);
     return this;
   }
}
