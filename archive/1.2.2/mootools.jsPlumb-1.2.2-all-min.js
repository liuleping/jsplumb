(function(){var x=function(){var f=this,i=/MSIE/.test(navigator.userAgent)&&!window.opera,q=null,o=function(){e.repaintEverything()},k=true,l={},g={},h={},p=[],u={},G={},J=true,D=[],K={},I="DEFAULT",fa=1200,S=function(a,b,c){var d=function(n,r){if(n===r)return true;else if(typeof n=="object"&&typeof r=="object"){var s=true;for(var v in n)if(!d(n[v],r[v])){s=false;break}for(v in r)if(!d(r[v],n[v])){s=false;break}return s}};c=+c||0;for(var j=a.length;c<j;c++)if(d(a[c],b))return c;return-1},P=function(a,
b,c){var d=a[b];if(d==null){d=[];a[b]=d}d.push(c);return d},V=function(a,b){var c=H(a,"id"),d=l[c];if(d){var j=""+(new Date).getTime();Q(c,b);for(var n=p[c],r=D[c],s=0;s<d.length;s++){var v=d[s],F=v.anchor.compute([n.left,n.top],r,v);v.paint(F);v=v.connections;for(F=0;F<v.length;F++)v[F].paint(c,b,false,j)}}},ga=function(a,b){var c=null;if(typeof a=="object"&&a.length){c=[];for(var d=0;d<a.length;d++){var j=y(a[d]),n=H(j,"id");c.push(b(j,n))}}else{j=y(a);n=H(j,"id");c=b(j,n)}return c},aa=function(a,
b){var c=K[a];if(c)for(var d in c)try{c[d][a](b)}catch(j){}},ba={},y=function(a){if(typeof a=="string"){var b=ba[a];if(!b){b=e.CurrentLibrary.getElementObject(a);ba[a]=b}return b}else return e.CurrentLibrary.getElementObject(a)},H=function(a,b){var c=y(a);return e.CurrentLibrary.getAttribute(c,b)},ca=function(a,b,c){a=y(a);e.CurrentLibrary.setAttribute(a,b,c)},ha=function(a){a=y(a);return e.CurrentLibrary.getOffset(a)},ia=function(a){a=y(a);return e.CurrentLibrary.getSize(a)},T=function(a,b){var c=
y(a),d=H(c,"id");if(!d){d=arguments.length==2?b:"_jsPlumb_"+new String((new Date).getTime());ca(c,"id",d)}return d},W=function(a,b,c){if(b=b==null?J:b)if(e.CurrentLibrary.isDragSupported(a)){c=c||f.Defaults.DragOptions||e.Defaults.DragOptions;c=e.extend({},c);b=e.CurrentLibrary.dragEvents.drag;c[b]=M(c[b],function(){var d=e.CurrentLibrary.getUIPosition(arguments);V(a,d);d=y(a);e.CurrentLibrary.addClass(d,"jsPlumb_dragged")});b=G[T(a)];c.disabled=b==null?false:!b;e.CurrentLibrary.initDraggable(a,c)}},
ja=function(a,b,c){var d=document.createElement("canvas"),j=d;b?e.CurrentLibrary.appendElement(j,b):document.body.appendChild(j);d.style.position="absolute";if(a)d.className=a;T(d,c);if(i){e.sizeCanvas(d,0,0,fa,fa);d=G_vmlCanvasManager.initElement(d)}return d},da=function(a,b){var c=l[a];if(c&&c.length)for(var d=0;d<c.length;d++)for(var j=0;j<c[d].connections.length;j++)if(b(c[d].connections[j]))return},L=function(a,b){if(a!=null)if(b)e.CurrentLibrary.removeElement(a,b);else try{document.body.removeChild(a)}catch(c){}},
U=function(a,b,c){a=a[b];if(a!=null){c=S(a,c);if(c>=0){delete a[c];a.splice(c,1);return true}}return false},ka=function(a,b){var c=H(a,"id");da(c,function(d){d.canvas.style.display=b})},oa=function(a){da(a,function(b){b.canvas.style.display="none"==b.canvas.style.display?"block":"none"})},Q=function(a,b,c){if(c||b==null){b=y(a);D[a]=ia(b);p[a]=ha(b)}else p[a]=b},M=function(a,b){a=a||function(){};b=b||function(){};return function(){var c=null;try{c=b.apply(this,arguments)}catch(d){}try{a.apply(this,
arguments)}catch(j){}return c}},la=function(a){var b=this;this.x=a.x||0;this.y=a.y||0;var c=a.orientation||[0,0],d=null;this.offsets=a.offsets||[0,0];this.compute=function(j,n,r){d=[j[0]+b.x*n[0]+b.offsets[0],j[1]+b.y*n[1]+b.offsets[1]];n=r?r.container:null;j={left:0,top:0};if(n!=null){var s=y(n);n=ha(s);r=e.CurrentLibrary.getScrollLeft(s);s=e.CurrentLibrary.getScrollTop(s);j.left=n.left-r;j.top=n.top-s;d[0]-=j.left;d[1]-=j.top}return d};this.getOrientation=function(){return c};this.equals=function(j){if(!j)return false;
var n=j.getOrientation(),r=this.getOrientation();return this.x==j.x&&this.y==j.y&&this.offsets[0]==j.offsets[0]&&this.offsets[1]==j.offsets[1]&&r[0]==n[0]&&r[1]==n[1]}},pa=function(a){var b=a.reference,c=ia(y(a.referenceCanvas)),d=0,j=0,n=null;this.compute=function(r){j=d=0;return[r[0]+c[0]/2,r[1]+c[1]/2]};this.getOrientation=function(){if(n)return n;else{var r=b.getOrientation();return[Math.abs(r[0])*d*-1,Math.abs(r[1])*j*-1]}};this.over=function(r){n=r.getOrientation()};this.out=function(){n=null}},
ma=function(a){var b=this,c=new String("_jsplumb_c_"+(new Date).getTime());this.getId=function(){return c};this.container=a.container||f.Defaults.Container;this.source=y(a.source);this.target=y(a.target);if(a.sourceEndpoint)this.source=a.sourceEndpoint.getElement();if(a.targetEndpoint)this.target=a.targetEndpoint.getElement();this.sourceId=H(this.source,"id");this.targetId=H(this.target,"id");this.endpointsOnTop=a.endpointsOnTop!=null?a.endpointsOnTop:true;this.scope=a.scope;this.endpoints=[];this.endpointStyles=
[];var d=function(r,s,v,F){if(r){b.endpoints[s]=r;r.addConnection(b)}else{if(!v.endpoints)v.endpoints=[null,null];r=v.endpoints[s]||v.endpoint||f.Defaults.Endpoints[s]||e.Defaults.Endpoints[s]||f.Defaults.Endpoint||e.Defaults.Endpoint||new e.Endpoints.Dot;if(!v.endpointStyles)v.endpointStyles=[null,null];var B=v.endpointStyles[s]||v.endpointStyle||f.Defaults.EndpointStyles[s]||e.Defaults.EndpointStyles[s]||f.Defaults.EndpointStyle||e.Defaults.EndpointStyle,z=v.anchors?v.anchors[s]:f.Defaults.Anchors[s]||
e.Defaults.Anchors[s]||f.Defaults.Anchor||e.Defaults.Anchor||e.Anchors.BottomCenter,E=v.uuids?v.uuids[s]:null;v=v.uuids?new X({style:B,endpoint:r,connections:[b],uuid:E,anchor:z,source:F,container:b.container}):new X({style:B,endpoint:r,connections:[b],anchor:z,source:F,container:b.container});return b.endpoints[s]=v}},j=d(a.sourceEndpoint,0,a,b.source);j&&P(l,this.sourceId,j);(d=d(a.targetEndpoint,1,a,b.target))&&P(l,this.targetId,d);if(!this.scope)this.scope=this.endpoints[0].scope;this.connector=
this.endpoints[0].connector||this.endpoints[1].connector||a.connector||f.Defaults.Connector||e.Defaults.Connector||new e.Connectors.Bezier;this.paintStyle=this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||a.paintStyle||f.Defaults.PaintStyle||e.Defaults.PaintStyle;Q(this.sourceId);Q(this.targetId);d=p[this.sourceId];j=D[this.sourceId];d=this.endpoints[0].anchor.compute([d.left,d.top],j,this.endpoints[0]);this.endpoints[0].paint(d);d=p[this.targetId];j=D[this.targetId];d=this.endpoints[1].anchor.compute([d.left,
d.top],j,this.endpoints[1]);this.endpoints[1].paint(d);var n=ja(e.connectorClass,b.container);this.canvas=n;this.paint=function(r,s,v){q&&q.debug("Painting Connection; element in motion is "+r+"; ui is ["+s+"]; recalc is ["+v+"]");var F=r!=this.sourceId,B=F?this.sourceId:this.targetId,z=F?0:1,E=F?1:0;if(this.canvas.getContext){Q(r,s,v);Q(B);v=p[r];s=p[B];r=D[r];var t=D[B];B=n.getContext("2d");v=this.endpoints[E].anchor.compute([v.left,v.top],r,this.endpoints[E]);this.endpoints[E].anchor.getOrientation();
s=this.endpoints[z].anchor.compute([s.left,s.top],t,this.endpoints[z]);this.endpoints[z].anchor.getOrientation();z=this.connector.compute(v,s,this.endpoints[E].anchor,this.endpoints[z].anchor,this.paintStyle.lineWidth);e.sizeCanvas(n,z[0],z[1],z[2],z[3]);e.extend(B,this.paintStyle);if(this.paintStyle.gradient&&!i){F=F?B.createLinearGradient(z[4],z[5],z[6],z[7]):B.createLinearGradient(z[6],z[7],z[4],z[5]);for(E=0;E<this.paintStyle.gradient.stops.length;E++)F.addColorStop(this.paintStyle.gradient.stops[E][0],
this.paintStyle.gradient.stops[E][1]);B.strokeStyle=F}this.connector.paint(z,B)}};this.repaint=function(){this.paint(this.sourceId,null,true)};W(b.source,a.draggable,a.dragOptions);W(b.target,a.draggable,a.dragOptions);this.source.resize&&this.source.resize(function(){e.repaint(b.sourceId)})},X=function(a){a=a||{};e.extend({},a);var b=this,c=new String("_jsplumb_e_"+(new Date).getTime());this.getId=function(){return c};b.anchor=a.anchor||e.Anchors.TopCenter;var d=a.endpoint||new e.Endpoints.Dot,j=
a.style||f.Defaults.EndpointStyle||e.Defaults.EndpointStyle;this.connectorStyle=a.connectorStyle;this.connector=a.connector;this.isSource=a.isSource||false;this.isTarget=a.isTarget||false;var n=a.source,r=a.uuid;if(r)g[r]=b;this.container=a.container||e.Defaults.Container;var s=H(n,"id"),v=a.maxConnections||1;this.canvas=a.canvas||ja(e.endpointClass,this.container,a.uuid);this.connections=a.connections||[];this.scope=a.scope||I;var F=a.reattach||false,B=null,z=null;this.dragAllowedWhenFull=a.dragAllowedWhenFull||
true;this.addConnection=function(m){b.connections.push(m)};this.detach=function(m){var A=S(b.connections,m);if(A>=0){var w=m.endpoints[0]==b?m.endpoints[1]:m.endpoints[0];b.connections.splice(A,1);w.detach(m)}};this.detachAll=function(){for(;b.connections.length>0;)b.detach(b.connections[0])};this.detachFrom=function(m){for(var A=[],w=0;w<b.connections.length;w++)if(b.connections[w].endpoints[1]==m||b.connections[w].endpoints[0]==m)A.push(b.connections[w]);for(w=0;w<A.length;w++){m.detach(A[w]);b.detach(A[w])}};
this.getElement=function(){return n};this.getUuid=function(){return r};this.makeInPlaceCopy=function(){return new X({anchor:b.anchor,source:n,style:j,endpoint:d})};this.isConnectedTo=function(m){var A=false;if(m)for(var w=0;w<b.connections.length;w++)if(b.connections[w].endpoints[1]==m){A=true;break}return A};this.isFloating=function(){return B!=null};this.isFull=function(){return v<1?false:b.connections.length>=v};this.setDragAllowedWhenFull=function(m){b.dragAllowedWhenFull=m};this.equals=function(m){return this.anchor.equals(m.anchor)&&
true};this.paint=function(m,A,w){q&&q.debug("Painting Endpoint with elementId ["+s+"]; anchorPoint is ["+m+"]");if(m==null){m=p[s];var N=D[s];if(m==null||N==null){Q(s);m=p[s];N=D[s]}m=b.anchor.compute([m.left,m.top],N,b)}d.paint(m,b.anchor.getOrientation(),w||b.canvas,j,A||j)};this.removeConnection=this.detach;if(a.isSource&&e.CurrentLibrary.isDragSupported(n)){var E=null;var t=c=null,na=false,R=null,C=a.dragOptions||{},O=e.extend({},e.CurrentLibrary.defaultDragOptions);C=e.extend(O,C);C.scope=C.scope||
b.scope;O=e.CurrentLibrary.dragEvents.start;var Y=e.CurrentLibrary.dragEvents.stop,Z=e.CurrentLibrary.dragEvents.drag;C[O]=M(C[O],function(){t=b.connections.length<v?null:b.connections[0];if(b.isFull()&&!b.dragAllowedWhenFull)return false;z=b.makeInPlaceCopy();z.paint();E=document.createElement("div");var m=y(E);document.body.appendChild(E);var A=""+new String((new Date).getTime());ca(m,"id",A);Q(A);ca(y(b.canvas),"dragId",A);ca(y(b.canvas),"elId",s);var w=new pa({reference:b.anchor,referenceCanvas:b.canvas});
B=new X({style:{fillStyle:"rgba(0,0,0,0)"},endpoint:d,anchor:w,source:m});if(t==null)t=new ma({sourceEndpoint:b,targetEndpoint:B,source:y(n),target:y(E),anchors:[b.anchor,w],paintStyle:a.connectorStyle,connector:a.connector});else{na=true;m=t.sourceId==s?0:1;t.floatingAnchorIndex=m;b.removeConnection(t);if(m==0){R=[t.source,t.sourceId];t.source=y(E);t.sourceId=A}else{R=[t.target,t.targetId];t.target=y(E);t.targetId=A}t.suspendedEndpoint=t.endpoints[m];t.endpoints[m]=B}u[A]=t;B.addConnection(t);P(l,
A,B)});C[Z]=M(C[Z],function(){var m=e.CurrentLibrary.getUIPosition(arguments);V(y(E),m)});C[Y]=M(C[Y],function(){U(l,c,B);var m=[E,B.canvas];for(var A in m)L(m[A],void 0);L(z.canvas,n);m=t.floatingAnchorIndex==null?1:t.floatingAnchorIndex;if(t.endpoints[m]==B)if(na&&t.suspendedEndpoint)if(F){t.floatingAnchorIndex=null;if(m==0){t.source=R[0];t.sourceId=R[1]}else{t.target=R[0];t.targetId=R[1]}t.endpoints[m]=t.suspendedEndpoint;t.suspendedEndpoint.addConnection(t);e.repaint(R[1])}else{t.endpoints[0].removeConnection(t);
t.endpoints[1].removeConnection(t);L(t.canvas);U(h,t.scope,t);aa("jsPlumbConnectionDetached",{source:t.source,target:t.target,sourceId:t.sourceId,targetId:t.targetId,sourceEndpoint:t.endpoints[0],targetEndpoint:t.endpoints[1]})}else{L(t.canvas);b.removeConnection(t)}t=null;delete B;delete z;b.paint()});O=y(b.canvas);e.CurrentLibrary.initDraggable(O,C)}if(a.isTarget&&e.CurrentLibrary.isDropSupported(n)){C=a.dropOptions||f.Defaults.DropOptions||e.Defaults.DropOptions;C=e.extend({},C);C.scope=C.scope||
b.scope;O=e.CurrentLibrary.dragEvents.drop;Y=e.CurrentLibrary.dragEvents.over;Z=e.CurrentLibrary.dragEvents.out;C[O]=M(C[O],function(){var m=e.CurrentLibrary.getDragObject(arguments),A=H(y(m),"dragId");m=H(y(m),"elId");var w=u[A],N=w.floatingAnchorIndex==null?1:w.floatingAnchorIndex,qa=N==0?1:0;if(!b.isFull()&&!(N==0&&!b.isSource)&&!(N==1&&!b.isTarget)){if(N==0){w.source=n;w.sourceId=s}else{w.target=n;w.targetId=s}w.endpoints[N].removeConnection(w);w.suspendedEndpoint&&w.suspendedEndpoint.removeConnection(w);
w.endpoints[N]=b;b.addConnection(w);w.endpoints[qa].addConnection(w);P(h,w.scope,w);W(n,a.draggable,{});e.repaint(m);aa("jsPlumbConnection",{source:w.source,target:w.target,sourceId:w.sourceId,targetId:w.targetId,sourceEndpoint:w.endpoints[0],targetEndpoint:w.endpoints[1]})}delete u[A]});C[Y]=M(C[Y],function(){var m=e.CurrentLibrary.getDragObject(arguments);m=H(y(m),"dragId");m=u[m];m.endpoints[m.floatingAnchorIndex==null?1:m.floatingAnchorIndex].anchor.over(b.anchor)});C[Z]=M(C[Z],function(){var m=
e.CurrentLibrary.getDragObject(arguments);m=H(y(m),"dragId");m=u[m];m.endpoints[m.floatingAnchorIndex==null?1:m.floatingAnchorIndex].anchor.out()});e.CurrentLibrary.initDroppable(y(b.canvas),C)}return b};this.Defaults={Anchor:null,Anchors:[null,null],Connector:null,Container:null,DragOptions:{},DropOptions:{},Endpoint:null,Endpoints:[null,null],EndpointStyle:{fillStyle:null},EndpointStyles:[null,null],MaxConnections:null,PaintStyle:{lineWidth:10,strokeStyle:"red"},Scope:"_jsPlumb_DefaultScope"};this.connectorClass=
"_jsPlumb_connector";this.endpointClass="_jsPlumb_endpoint";this.Anchors={};this.Connectors={};this.Endpoints={};this.addEndpoint=function(a,b){b=e.extend({},b);var c=y(a),d=H(c,"id");b.source=c;Q(d);c=new X(b);P(l,d,c);var j=p[d];d=c.anchor.compute([j.left,j.top],D[d],c);c.paint(d);return c};this.addEndpoints=function(a,b){for(var c=[],d=0;d<b.length;d++)c.push(e.addEndpoint(a,b[d]));return c};this.animate=function(a,b,c){var d=y(a),j=H(a,"id");c=c||{};a=e.CurrentLibrary.dragEvents.step;var n=e.CurrentLibrary.dragEvents.complete;
c[a]=M(c[a],function(){f.repaint(j)});c[n]=M(c[n],function(){f.repaint(j)});e.CurrentLibrary.animate(d,b,c)};this.clearCache=function(){delete ba;ba={}};this.connect=function(a){var b=e.extend({},a);if(a.uuids){var c=function(d){var j=g[a.uuids[d]];if(!j)throw"Endpoint with UUID "+a.uuids[d]+" not found.";return j};b.sourceEndpoint=c(0);b.targetEndpoint=c(1)}if(!(b.sourceEndpoint&&b.sourceEndpoint.isFull()))if(!(b.targetEndpoint&&b.targetEndpoint.isFull())){b=new ma(b);P(h,b.scope,b);aa("jsPlumbConnection",
{source:b.source,target:b.target,sourceId:b.sourceId,targetId:b.targetId,sourceEndpoint:b.endpoints[0],targetEndpoint:b.endpoints[1]});V(b.source);return b}};var ea=function(a){aa("jsPlumbConnectionDetached",{source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]})};this.detach=function(a,b){if(arguments.length==2){var c=function(d){if(d.sourceId==a&&d.targetId==b||d.targetId==a&&d.sourceId==b){L(d.canvas,d.container);d.endpoints[0].removeConnection(d);
d.endpoints[1].removeConnection(d);U(h,d.scope,d);ea(d);return true}};da(a,c)}else if(arguments.length==1){c=e.extend({},a);if(c.uuids)g[c.uuids[0]].detachFrom(g[c.uuids[1]]);else if(c.sourceEndpoint&&c.targetEndpoint)c.sourceEndpoint.detachFrom(c.targetEndpoint);else{a=T(c.source);b=T(c.target);c=function(d){if(d.sourceId==a&&d.targetId==b||d.targetId==a&&d.sourceId==b){L(d.canvas,d.container);d.endpoints[0].removeConnection(d);d.endpoints[1].removeConnection(d);U(h,d.scope,d);ea(d);return true}};
da(a,c)}}};this.detachAll=function(a){a=H(a,"id");if((a=l[a])&&a.length)for(var b=0;b<a.length;b++){var c=a[b].connections.length;if(c>0)for(var d=0;d<c;d++){var j=a[b].connections[0];L(j.canvas,j.container);j.endpoints[0].removeConnection(j);j.endpoints[1].removeConnection(j);U(h,j.scope,j);ea(j)}}};this.detachEverything=function(){for(var a in l){var b=l[a];if(b&&b.length)for(var c=0;c<b.length;c++){var d=b[c].connections.length;if(d>0)for(var j=0;j<d;j++){var n=b[c].connections[0];L(n.canvas,n.container);
n.endpoints[0].removeConnection(n);n.endpoints[1].removeConnection(n);ea(n)}}}delete h;h={}};this.draggable=function(a,b){if(typeof a=="object"&&a.length)for(var c=0;c<a.length;c++){var d=y(a[c]);d&&W(d,true,b)}else(d=y(a))&&W(d,true,b)};this.extend=function(a,b){return e.CurrentLibrary.extend(a,b)};this.getConnections=function(a){var b={};a=a||{};var c=function(s){var v=[];if(s)if(typeof s=="string")v.push(s);else v=s;return v},d=c(a.scope),j=c(a.source);a=c(a.target);for(var n in h)if(d.length>
0?S(d,n)!=-1:true){b[n]=[];for(c=0;c<h[n].length;c++){var r=h[n][c];(j.length>0?S(j,r.sourceId)!=-1:true)&&(a.length>0?S(a,r.targetId)!=-1:true)&&b[n].push({sourceId:r.sourceId,targetId:r.targetId,source:r.source,target:r.target,sourceEndpoint:r.endpoints[0],targetEndpoint:r.endpoints[1]})}}return b};this.getDefaultScope=function(){return I};this.getEndpoint=function(a){return g[a]};this.getId=T;this.hide=function(a){ka(a,"none")};this.makeAnchor=function(a,b){var c={};if(arguments.length==1)e.extend(c,
a);else{c={x:a,y:b};if(arguments.length>=4)c.orientation=[arguments[2],arguments[3]];if(arguments.length==6)c.offsets=[arguments[4],arguments[5]]}var d=new la(c);d.clone=function(){return new la(c)};return d};this.repaint=function(a){var b=function(d){d=y(d);V(d)};if(typeof a=="object")for(var c=0;c<a.length;c++)b(a[c]);else b(a)};this.repaintEverything=function(){for(var a in l)V(y(a))};this.removeAllEndpoints=function(a){a=H(a,"id");e.detachAll(a);var b=l[a];for(var c in b)L(b[c].canvas);l[a]=[]};
this.removeEveryEndpoint=function(){for(var a in l){var b=l[a];if(b&&b.length)for(var c=0;c<b.length;c++)L(b[c].canvas,b[c].container)}delete l;l={}};this.removeEndpoint=function(a,b){var c=H(a,"id");l[c]&&U(l,c,b)&&L(b.canvas)};this.reset=function(){this.detachEverything();this.removeEveryEndpoint();this.clearCache()};this.setAutomaticRepaint=function(a){k=a};this.setDefaultNewCanvasSize=function(a){fa=a};this.setDefaultScope=function(a){I=a};this.setDraggable=function(a,b){return ga(a,function(c,
d){G[d]=b;e.CurrentLibrary.isDragSupported(c)&&e.CurrentLibrary.setDraggable(c,b)})};this.setDraggableByDefault=function(a){J=a};this.setDebugLog=function(a){q=a};this.setRepaintFunction=function(a){o=a};this.show=function(a){ka(a,"block")};this.sizeCanvas=function(a,b,c,d,j){if(a){a.style.height=j+"px";a.height=j;a.style.width=d+"px";a.width=d;a.style.left=b+"px";a.style.top=c+"px"}};this.getTestHarness=function(){return{endpointCount:function(a){return(a=l[a])?a.length:0},connectionCount:function(a){a=
a||I;return(a=h[a])?a.length:0},findIndex:S,getId:T}};this.toggleVisible=this.toggle=oa;this.toggleDraggable=function(a){return ga(a,function(b,c){var d=G[c]==null?J:G[c];d=!d;G[c]=d;e.CurrentLibrary.setDraggable(b,d);return d})};this.unload=function(){delete l;delete p;delete D;delete u;delete G};this.wrap=M;this.addListener=function(a,b){if(typeof a=="object"&&a.length)for(var c=0;c<a.length;c++)P(K,a[c],b);else P(K,a,b)}},e=window.jsPlumb=new x;e.getInstance=function(f){var i=new x;f&&e.extend(i.Defaults,
f);return i}})();
(function(){jsPlumb.Anchors.TopCenter=jsPlumb.makeAnchor(0.5,0,0,-1);jsPlumb.Anchors.BottomCenter=jsPlumb.makeAnchor(0.5,1,0,1);jsPlumb.Anchors.LeftMiddle=jsPlumb.makeAnchor(0,0.5,-1,0);jsPlumb.Anchors.RightMiddle=jsPlumb.makeAnchor(1,0.5,1,0);jsPlumb.Anchors.Center=jsPlumb.makeAnchor(0.5,0.5,0,0);jsPlumb.Anchors.TopRight=jsPlumb.makeAnchor(1,0,0,-1);jsPlumb.Anchors.BottomRight=jsPlumb.makeAnchor(1,1,0,1);jsPlumb.Anchors.TopLeft=jsPlumb.makeAnchor(0,0,0,-1);jsPlumb.Anchors.BottomLeft=jsPlumb.makeAnchor(0,
1,0,1);jsPlumb.Connectors.Straight=function(){this.compute=function(x,e,f,i,q){f=Math.abs(x[0]-e[0]);i=Math.abs(x[1]-e[1]);var o=0.45*f,k=0.45*i;f*=1.9;i*=1.9;var l=Math.min(x[0],e[0])-o,g=Math.min(x[1],e[1])-k;if(f<2*q){f=2*q;l=x[0]+(e[0]-x[0])/2-q;o=(f-Math.abs(x[0]-e[0]))/2}if(i<2*q){i=2*q;g=x[1]+(e[1]-x[1])/2-q;k=(i-Math.abs(x[1]-e[1]))/2}return[l,g,f,i,x[0]<e[0]?f-o:o,x[1]<e[1]?i-k:k,x[0]<e[0]?o:f-o,x[1]<e[1]?k:i-k]};this.paint=function(x,e){e.beginPath();e.moveTo(x[4],x[5]);e.lineTo(x[6],x[7]);
e.stroke()}};jsPlumb.Connectors.Bezier=function(x){var e=this;this.majorAnchor=x||150;this.minorAnchor=10;this._findControlPoint=function(f,i,q,o,k){o=o.getOrientation();k=k.getOrientation();var l=[],g=e.majorAnchor,h=e.minorAnchor;if(o[0]!=k[0]||o[1]==k[1]){k[0]==0?l.push(q[0]<i[0]?f[0]+h:f[0]-h):l.push(f[0]+g*k[0]);k[1]==0?l.push(q[1]<i[1]?f[1]+h:f[1]-h):l.push(f[1]+g*o[1])}else{o[0]==0?l.push(i[0]<q[0]?f[0]+h:f[0]-h):l.push(f[0]-g*o[0]);o[1]==0?l.push(i[1]<q[1]?f[1]+h:f[1]-h):l.push(f[1]+g*k[1])}return l};
this.compute=function(f,i,q,o,k){k=k||0;var l=Math.abs(f[0]-i[0])+k,g=Math.abs(f[1]-i[1])+k,h=Math.min(f[0],i[0])-k/2,p=Math.min(f[1],i[1])-k/2,u=f[0]<i[0]?l-k/2:k/2,G=f[1]<i[1]?g-k/2:k/2,J=f[0]<i[0]?k/2:l-k/2;k=f[1]<i[1]?k/2:g-k/2;var D=e._findControlPoint([u,G],f,i,q,o);f=e._findControlPoint([J,k],i,f,o,q);i=Math.min(Math.min(u,J),Math.min(D[0],f[0]));q=Math.max(Math.max(u,J),Math.max(D[0],f[0]));if(q>l)l=q;if(i<0){h+=i;i=Math.abs(i);l+=i;D[0]+=i;u+=i;J+=i;f[0]+=i}i=Math.min(Math.min(G,k),Math.min(D[1],
f[1]));q=Math.max(Math.max(G,k),Math.max(D[1],f[1]));if(q>g)g=q;if(i<0){p+=i;i=Math.abs(i);g+=i;D[1]+=i;G+=i;k+=i;f[1]+=i}return[h,p,l,g,u,G,J,k,D[0],D[1],f[0],f[1]]};this.paint=function(f,i){i.beginPath();i.moveTo(f[4],f[5]);i.bezierCurveTo(f[8],f[9],f[10],f[11],f[6],f[7]);i.stroke()}};jsPlumb.Endpoints.Dot=function(x){x=x||{radius:10};var e=this;this.radius=x.radius;var f=0.5*this.radius,i=this.radius/3,q=function(o){try{return parseInt(o)}catch(k){if(o.substring(o.length-1)=="%")return parseInt(o.substring(0,
o-1))}};this.paint=function(o,k,l,g,h){var p=g.radius||e.radius;jsPlumb.sizeCanvas(l,o[0]-p,o[1]-p,p*2,p*2);o=l.getContext("2d");l=jsPlumb.extend({},g);if(l.fillStyle==null)l.fillStyle=h.strokeStyle;jsPlumb.extend(o,l);h=/MSIE/.test(navigator.userAgent)&&!window.opera;if(g.gradient&&!h){h=g.gradient;l=f;var u=i;if(h.offset)l=q(h.offset);if(h.innerRadius)u=q(h.innerRadius);h=[l,u];k=o.createRadialGradient(p,p,p,p+(k[0]==1?h[0]*-1:h[0]),p+(k[1]==1?h[0]*-1:h[0]),h[1]);for(h=0;h<g.gradient.stops.length;h++)k.addColorStop(g.gradient.stops[h][0],
g.gradient.stops[h][1]);o.fillStyle=k}o.beginPath();o.arc(p,p,p,0,Math.PI*2,true);o.closePath();o.fill()}};jsPlumb.Endpoints.Rectangle=function(x){x=x||{width:20,height:20};var e=this;this.width=x.width;this.height=x.height;this.paint=function(f,i,q,o,k){var l=o.width||e.width,g=o.height||e.height;jsPlumb.sizeCanvas(q,f[0]-l/2,f[1]-g/2,l,g);f=q.getContext("2d");q=jsPlumb.extend({},o);if(q.fillStyle==null)q.fillStyle=k.strokeStyle;jsPlumb.extend(f,q);k=/MSIE/.test(navigator.userAgent)&&!window.opera;
if(o.gradient&&!k){i=f.createLinearGradient(i[0]==1?l:i[0]==0?l/2:0,i[1]==1?g:i[1]==0?g/2:0,i[0]==-1?l:i[0]==0?g/2:0,i[1]==-1?g:i[1]==0?g/2:0);for(k=0;k<o.gradient.stops.length;k++)i.addColorStop(o.gradient.stops[k][0],o.gradient.stops[k][1]);f.fillStyle=i}f.beginPath();f.rect(0,0,l,g);f.closePath();f.fill()}};jsPlumb.Endpoints.Triangle=function(x){x=x||{width:15,height:15};var e=this;this.width=x.width;this.height=x.height;this.paint=function(f,i,q,o){var k=o.width||e.width,l=o.height||e.height;
jsPlumb.sizeCanvas(q,f[0]-k/2,f[1]-l/2,k,l);f=q.getContext("2d");var g=q=0,h=0;if(i[0]==1){q=k;g=l;h=180}if(i[1]==-1){q=k;h=90}if(i[1]==1){g=l;h=-90}f.fillStyle=o.fillStyle;f.translate(q,g);f.rotate(h*Math.PI/180);f.beginPath();f.moveTo(0,0);f.lineTo(k/2,l/2);f.lineTo(0,l);f.closePath();f.fill()}};jsPlumb.Endpoints.Image=function(x){var e=this;this.img=new Image;this.img.onload=function(){e.ready=true};this.img.src=x.url;var f=function(i,q,o,k){q=e.img.width||k.width;k=e.img.height||k.height;jsPlumb.sizeCanvas(o,
i[0]-q/2,i[1]-k/2,q,k);o.getContext("2d").drawImage(e.img,0,0)};this.paint=function(i,q,o,k,l){e.ready?f(i,q,o,k,l):window.setTimeout(function(){e.paint(i,q,o,k,l)},200)}}})();
(function(){var x=new Class({Extends:Fx.Morph,onStep:null,initialize:function(g,h){this.parent(g,h);if(h.onStep)this.onStep=h.onStep},step:function(){this.parent();if(this.onStep)try{this.onStep()}catch(g){}}}),e={},f={},i={},q={},o=function(g,h,p){if(h){var u=h.get("id");if(u)(u=f[u])&&u[p]&&u[p](g,h)}},k=function(g,h){if(g){var p=g.get("id");if(p)if(p=f[p])if(p.hoverClass)h?g.addClass(p.hoverClass):g.removeClass(p.hoverClass)}},l=function(g,h,p){var u=g[h];if(!u){u=[];g[h]=u}u.push(p)};jsPlumb.CurrentLibrary=
{dragEvents:{start:"onStart",stop:"onComplete",drag:"onDrag",step:"onStep",over:"onEnter",out:"onLeave",drop:"onDrop",complete:"onComplete"},appendElement:function(g,h){jsPlumb.CurrentLibrary.getElementObject(h).grab(g)},extend:function(g,h){return $extend(g,h)},getElementObject:function(g){return $(g)},getOffset:function(g){g=g.getPosition();return{left:g.x,top:g.y}},getSize:function(g){g=g.getSize();return[g.x,g.y]},getAttribute:function(g,h){return g.get(h)},setAttribute:function(g,h,p){g.set(h,
p)},addClass:function(g,h){g.addClass(h)},initDraggable:function(g,h){var p=jsPlumb.getId(g),u=q[p];if(!u){var G=0,J=null,D=jsPlumb.Defaults.DragOptions.zIndex||2E3;h.onStart=jsPlumb.wrap(h.onStart,function(){G=this.element.getStyle("z-index");this.element.setStyle("z-index",D);if(jsPlumb.Defaults.DragOptions.cursor){J=this.element.getStyle("cursor");this.element.setStyle("cursor",jsPlumb.Defaults.DragOptions.cursor)}});h.onComplete=jsPlumb.wrap(h.onComplete,function(){this.element.setStyle("z-index",
G);J&&this.element.setStyle("cursor",J)});p=h.scope||jsPlumb.Defaults.Scope;u=function(K){return K.get("id")!=g.get("id")};u=e[p]?e[p].filter(u):[];h.droppables=u;h.onLeave=jsPlumb.wrap(h.onLeave,function(K,I){if(I){k(I,false);o(K,I,"onLeave")}});h.onEnter=jsPlumb.wrap(h.onEnter,function(K,I){if(I){k(I,true);o(K,I,"onEnter")}});h.onDrop=function(K,I){if(I){k(I,false);o(K,I,"onDrop")}};u=new Drag.Move(g,h);l(i,p,u);l(q,g.get("id"),u);h.disabled&&u.detach()}return u},isDragSupported:function(){return typeof Drag!=
"undefined"},setDraggable:function(g,h){var p=q[g.get("id")];p&&p.each(function(u){h?u.attach():u.detach()})},initDroppable:function(g,h){var p=h.scope||jsPlumb.Defaults.Scope;l(e,p,g);var u=jsPlumb.getId(g);f[u]=h;u=function(G){return G.element!=g};p=i[p]?i[p].filter(u):[];for(u=0;u<p.length;u++)p[u].droppables.push(g)},isDropSupported:function(){if(typeof Drag!=undefined)return typeof Drag.Move!=undefined;return false},animate:function(g,h,p){(new x(g,p)).start(h)},getUIPosition:function(g){g=g[0];
return{left:g.offsetLeft,top:g.offsetTop}},getDragObject:function(g){return g[0]},removeElement:function(g){jsPlumb.CurrentLibrary.getElementObject(g).dispose()},getScrollLeft:function(){return null},getScrollTop:function(){return null}}})();