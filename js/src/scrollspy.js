"use strict";var _typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof3(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof3(t)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":_typeof2(t)};+function(t){function o(e,s){this.$body=t(document.body),this.$scrollElement=t(t(e).is(document.body)?window:e),this.options=t.extend({},o.DEFAULTS,s),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var s=t(this),i=s.data("bs.scrollspy"),n="object"==("undefined"==typeof e?"undefined":_typeof(e))&&e;i||s.data("bs.scrollspy",i=new o(this,n)),"string"==typeof e&&i[e]()})}o.VERSION="3.3.2",o.DEFAULTS={offset:10},o.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},o.prototype.refresh=function(){var o=this,e="offset",s=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",s=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var o=t(this),i=o.data("target")||o.attr("href"),n=/^#./.test(i)&&t(NexT.utils.escapeSelector(i));return n&&n.length&&n.is(":visible")&&[[n[e]().top+s,i]]||null}).sort(function(t,o){return t[0]-o[0]}).each(function(){o.offsets.push(this[0]),o.targets.push(this[1])})},o.prototype.process=function(){var o,e=this.$scrollElement.scrollTop()+this.options.offset,s=this.getScrollHeight(),i=this.options.offset+s-this.$scrollElement.height(),n=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=s&&this.refresh(),e>=i)return l!=(o=r[r.length-1])&&this.activate(o);if(l&&e<n[0])return t(this.selector).trigger("clear.bs.scrollspy"),this.activeTarget=null,this.clear();for(o=n.length;o--;)l!=r[o]&&e>=n[o]&&(!n[o+1]||e<=n[o+1])&&this.activate(r[o])},o.prototype.activate=function(o){this.activeTarget=o,this.clear();var e=this.selector+'[data-target="'+o+'"],'+this.selector+'[href="'+o+'"]',s=t(e).parents("li").addClass("active");s.parent(".dropdown-menu").length&&(s=s.closest("li.dropdown").addClass("active")),s.trigger("activate.bs.scrollspy")},o.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var s=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=o,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=s,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var o=t(this);e.call(o,o.data())})})}(jQuery);