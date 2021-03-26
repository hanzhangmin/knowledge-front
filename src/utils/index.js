// 扁平化路由
export const flattenRoutes = (arr) =>
  arr.reduce((prev, item) => {
    return prev.concat(
      Array.isArray(item.children) ? flattenRoutes(item.children) : item
    );
  }, []);

// 节流固定时间内执行一次 有规律得执行
export function throttle(fn, wait = 1000) {
  let time = new Date().getTime(); //记录函数fn上一次执行的时间,如果设置初始值为0，说明第一次触发就要执行，如果设为当前系统时间，则第一次触发不执行
  let timer = null;
  return function (argument) {
    let now = new Date().getTime(); //得到函数触发的时间
    // 如果函数触发的时间-函数上一次执行的时间>wait则执行函数，否则不执行函数
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, argument);
      clearTimeout(timer);
      time = new Date().getTime();
    }, wait - now + time);
  };
}

// 节在一定时间内，一直触发函数，时间就会重新计算，最后一次触发wait时间 后执行
export function debounce(fn, wait = 1000) {
  let timer = null;
  return function (args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, [args]);
      clearTimeout(timer);
    }, wait);
  };
}

// 颜色的透明度转换
export const hexToRgba = (hex, opacity) => {
  let rgbaColor = "";
  let reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
};

//登录验证
export function authenticate() {
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? true : false;
}
