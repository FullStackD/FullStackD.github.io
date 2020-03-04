"use strict";var _typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof4(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof4(t)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof2(t)};+function(t){function o(o){return this.each(function(){var n=t(this),f=n.data("bs.affix"),i="object"==("undefined"==typeof o?"undefined":_typeof(o))&&o;f||n.data("bs.affix",f=new e(this,i)),"string"==typeof o&&f[o]()})}var e=function f(o,e){this.options=t.extend({},f.DEFAULTS,e),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(o),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};e.VERSION="3.3.5",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,o,e,n){var f=this.$target.scrollTop(),i=this.$element.offset(),s=this.$target.height();if(null!=e&&"top"==this.affixed)return f<e&&"top";if("bottom"==this.affixed)return null!=e?!(f+this.unpin<=i.top)&&"bottom":!(f+s<=t-n)&&"bottom";var r=null==this.affixed,p=r?f:i.top,u=r?s:o;return null!=e&&f<=e?"top":null!=n&&p+u>=t-n&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),o=this.$element.offset();return this.pinnedOffset=o.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var o=this.$element.height(),n=this.options.offset,f=n.top,i=n.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=("undefined"==typeof n?"undefined":_typeof(n))&&(i=f=n),"function"==typeof f&&(f=n.top(this.$element)),"function"==typeof i&&(i=n.bottom(this.$element));var r=this.getState(s,o,f,i);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var p="affix"+(r?"-"+r:""),u=t.Event(p+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(p).trigger(p.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:s-o-i})}};var n=t.fn.affix;t.fn.affix=o,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),n=e.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),o.call(e,n)})})}(jQuery);