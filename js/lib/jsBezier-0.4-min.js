(function(){"undefined"==typeof Math.sgn&&(Math.sgn=function(a){return 0==a?0:0<a?1:-1});var m={subtract:function(a,b){return{x:a.x-b.x,y:a.y-b.y}},dotProduct:function(a,b){return a.x*b.x+a.y*b.y},square:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},scale:function(a,b){return{x:a.x*b,y:a.y*b}}},w=Math.pow(2,-65),u=function(a,b){for(var f=[],d=b.length-1,h=2*d-1,g=[],c=[],k=[],i=[],l=[[1,0.6,0.3,0.1],[0.4,0.6,0.6,0.4],[0.1,0.3,0.6,1]],e=0;e<=d;e++)g[e]=m.subtract(b[e],a);for(e=0;e<=d-1;e++){c[e]=
m.subtract(b[e+1],b[e]);c[e]=m.scale(c[e],3)}for(e=0;e<=d-1;e++)for(var n=0;n<=d;n++){k[e]||(k[e]=[]);k[e][n]=m.dotProduct(c[e],g[n])}for(e=0;e<=h;e++){i[e]||(i[e]=[]);i[e].y=0;i[e].x=parseFloat(e)/h}h=d-1;for(g=0;g<=d+h;g++){e=Math.max(0,g-h);for(c=Math.min(g,d);e<=c;e++){j=g-e;i[e+j].y=i[e+j].y+k[j][e]*l[j][e]}}d=b.length-1;i=r(i,2*d-1,f,0);h=m.subtract(a,b[0]);k=m.square(h);for(e=l=0;e<i;e++){h=m.subtract(a,s(b,d,f[e],null,null));h=m.square(h);if(h<k){k=h;l=f[e]}}h=m.subtract(a,b[d]);h=m.square(h);
if(h<k){k=h;l=1}return{location:l,distance:k}},r=function(a,b,f,d){var h=[],g=[],c=[],k=[],i=0,l,e;e=Math.sgn(a[0].y);for(var n=1;n<=b;n++){l=Math.sgn(a[n].y);l!=e&&i++;e=l}switch(i){case 0:return 0;case 1:if(d>=64){f[0]=(a[0].x+a[b].x)/2;return 1}var o,i=a[0].y-a[b].y;e=a[b].x-a[0].x;n=a[0].x*a[b].y-a[b].x*a[0].y;l=max_distance_below=0;for(o=1;o<b;o++){var m=i*a[o].x+e*a[o].y+n;m>l?l=m:m<max_distance_below&&(max_distance_below=m)}o=e;l=(1*(n-l)-o*0)*(1/(0*o-i*1));o=e;e=n-max_distance_below;i=(1*
e-o*0)*(1/(0*o-i*1));e=Math.min(l,i);if(Math.max(l,i)-e<w){c=a[b].x-a[0].x;k=a[b].y-a[0].y;f[0]=0+1*(c*(a[0].y-0)-k*(a[0].x-0))*(1/(c*0-k*1));return 1}}s(a,b,0.5,h,g);a=r(h,b,c,d+1);b=r(g,b,k,d+1);for(d=0;d<a;d++)f[d]=c[d];for(d=0;d<b;d++)f[d+a]=k[d];return a+b},s=function(a,b,f,d,h){for(var g=[[]],c=0;c<=b;c++)g[0][c]=a[c];for(a=1;a<=b;a++)for(c=0;c<=b-a;c++){g[a]||(g[a]=[]);g[a][c]||(g[a][c]={});g[a][c].x=(1-f)*g[a-1][c].x+f*g[a-1][c+1].x;g[a][c].y=(1-f)*g[a-1][c].y+f*g[a-1][c+1].y}if(d!=null)for(c=
0;c<=b;c++)d[c]=g[c][0];if(h!=null)for(c=0;c<=b;c++)h[c]=g[b-c][c];return g[b][0]},v={},x=function(a){var b=v[a];if(!b){var b=[],f=function(a){return function(){return a}},d=function(){return function(a){return a}},h=function(){return function(a){return 1-a}},g=function(a){return function(b){for(var c=1,d=0;d<a.length;d++)c=c*a[d](b);return c}};b.push(new function(){return function(b){return Math.pow(b,a)}});for(var c=1;c<a;c++){for(var k=[new f(a)],i=0;i<a-c;i++)k.push(new d);for(i=0;i<c;i++)k.push(new h);
b.push(new g(k))}b.push(new function(){return function(b){return Math.pow(1-b,a)}});v[a]=b}return b},p=function(a,b){for(var f=x(a.length-1),d=0,h=0,g=0;g<a.length;g++){d=d+a[g].x*f[g](b);h=h+a[g].y*f[g](b)}return{x:d,y:h}},q=function(a,b,f){for(var d=p(a,b),h=0,g=f>0?1:-1,c=null;h<Math.abs(f);){b=b+0.005*g;c=p(a,b);h=h+Math.sqrt(Math.pow(c.x-d.x,2)+Math.pow(c.y-d.y,2));d=c}return{point:c,location:b}},t=function(a,b){var f=p(a,b),d=p(a.slice(0,a.length-1),b),h=d.y-f.y,f=d.x-f.x;return h==0?Infinity:
Math.atan(h/f)};window.jsBezier={distanceFromCurve:u,gradientAtPoint:t,gradientAtPointAlongCurveFrom:function(a,b,f){b=q(a,b,f);if(b.location>1)b.location=1;if(b.location<0)b.location=0;return t(a,b.location)},nearestPointOnCurve:function(a,b){var f=u(a,b);return{point:s(b,b.length-1,f.location,null,null),location:f.location}},pointOnCurve:p,pointAlongCurveFrom:function(a,b,f){return q(a,b,f).point},perpendicularToCurveAt:function(a,b,f,d){b=q(a,b,d==null?0:d);a=t(a,b.location);d=Math.atan(-1/a);
a=f/2*Math.sin(d);f=f/2*Math.cos(d);return[{x:b.point.x+f,y:b.point.y+a},{x:b.point.x-f,y:b.point.y-a}]},locationAlongCurveFrom:function(a,b,f){return q(a,b,f).location}}})();