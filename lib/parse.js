"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;var indexOf=[].indexOf||function(e){for(var n=0,l=this.length;n<l;n++)if(n in this&&this[n]===e)return n;return -1},isNumeric=function(e){return!isNaN(parseInt(e,10))},uescape=function(e){return e.replace("\\n","\n").replace("\\t","	").replace(/\\(["'])/,"$1")},newlines="\n\r",whitespace="	 ",quotes="\"'",ignore=[null,"newline","whitespace"],values=["number","string","date"];function parse(e){var n,l,i,u,t,r,c,s,a,f,o={},d=o,p=null,$=0,g="",x=null,w=null,h=null,m=null,v={},O=-1,_=null,b=null,y=function(e,n,l){return n.test(e)?(g+=e,!1):(p=l,x=g,g="",!0)};for(a=e.toString()+"\n",i=u=0,r=a.length;u<r;i=++u){if(n=a[i],!(--$>0)){if(parse.debug&&console.log(n,p),(null!=p?p.slice(-4):void 0)==="_end"&&(p=null),!p&&indexOf.call(newlines,n)>=0&&(p="newline"),indexOf.call(ignore,p)>=0&&"#"===n&&(p="comment"),"comment"===p){if(0>indexOf.call(newlines,n))continue;p="newline"}if(!(("whitespace"===p||"expect_value"===p)&&indexOf.call(whitespace,n)>=0)){if(indexOf.call(newlines,b)>=0&&indexOf.call(whitespace,n)>=0){p="whitespace";continue}if(indexOf.call(ignore,p)>=0&&"["===n){p="group";continue}if("group"===p&&y(n,/[^\]]/)&&(l=x),l){for(t=0,d=o,c=(f=l.split(".")).length;t<c;t++)d=null!=d[s=f[t]]?d[s]:d[s]={};l=null}if(indexOf.call(ignore,p)>=0&&/\w/.test(n)&&(p="key"),"key"===p&&y(n,/[^=]/)&&(w=x.trim()),w&&"="===n){p="expect_value";continue}if("expect_value"===p){if(indexOf.call(quotes,n)>=0){p="string",_=n;continue}if("t"===n&&"true"===e.slice(i,+(i+3)+1||9e9)&&(h=!0,$=4,p=null),"f"===n&&"false"===e.slice(i,+(i+4)+1||9e9)&&(h=!1,$=5,p=null),"-"===n){p="number",g="-";continue}if(isNumeric(n)&&(p="number"),"["===n){m=v[++O]=[];continue}}if("string"===p&&y(n,/[^"']/,"string_end")&&(h=uescape(x)),"number"===p&&y(n,/[\d.]/,"number_end")&&(h=+x),"date"===p&&y(n,/[\d-:TZ]/)&&(h=new Date(x)),"string_end"===p&&(n!==_||n===_&&"\\"===b?(p="string",g=h+n,h=null):(p=null,_=null)),"number_end"===p&&("-"===n?(p="date",g=x+n,h=null):p=null),null!=m){if(null!=h&&(m.push(h),h=null,p="expect_value"),","===n)continue;"]"===n&&0>indexOf.call(values,p)&&(0===O&&(h=m,m=null,O=-1,p=null),O>0&&(v[--O].push(m),m=v[O]))}w&&null!=h&&(d[w]=h,w=h=null),b=n}}}return o}exports.parse=parse;