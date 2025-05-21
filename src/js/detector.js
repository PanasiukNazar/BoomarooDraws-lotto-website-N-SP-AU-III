const detectorInit = () => {
  const is = window.is || {}; 
  const html = document.querySelector('html');

  is.opera && is.opera() && addClass(html, 'opera');
  is.mobile && is.mobile() && addClass(html, 'mobile');
  is.firefox && is.firefox() && addClass(html, 'firefox');
  is.safari && is.safari() && addClass(html, 'safari');
  is.ios && is.ios() && addClass(html, 'ios');
  is.iphone && is.iphone() && addClass(html, 'iphone');
  is.ipad && is.ipad() && addClass(html, 'ipad');
  is.ie && is.ie() && addClass(html, 'ie');
  is.edge && is.edge() && addClass(html, 'edge');
  is.chrome && is.chrome() && addClass(html, 'chrome');
  is.mac && is.mac() && addClass(html, 'osx');
  is.windows && is.windows() && addClass(html, 'windows');
  navigator.userAgent.match('CriOS') && addClass(html, 'chrome');
};
