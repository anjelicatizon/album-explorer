(this["webpackJsonpalbum-explorer"]=this["webpackJsonpalbum-explorer"]||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(29),a(21)),s=a(16),u=a(17),i=a(23),m=a(22),p=a(18),h=a.n(p),E=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Album Explorer")))},d=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("p",null,"Created at ",l.a.createElement("a",{href:"https://junocollege.com/"},"Juno College"))))},b=a(19),f=a(20),v=(a(50),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.handleClick=function(t){t.preventDefault(),h()({method:"GET",url:"https://itunes.apple.com/search",dataResponse:"JSON",params:{term:e.state.userInput,country:"CA",media:"music",entity:"album"}}).then((function(t){var a=t.data.results;console.log(a),e.setState({albums:a})})),e.setState({userInput:""})},e.handleSort=function(e){console.log(e);Object(o.a)(e).sort()},e.state={albums:[],userInput:""},e}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement("section",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("form",{action:"submit"},l.a.createElement("label",{htmlFor:"search-bar"},"Type in an artist to discover their entire discography"),l.a.createElement("input",{type:"text",id:"newAlbum",className:"search-bar",onChange:this.handleChange,value:this.state.userInput}),l.a.createElement("input",{type:"submit",className:"submit",value:"Go",onClick:this.handleClick})),l.a.createElement("button",{className:"sort",onClick:this.handleSort},"Sort ",l.a.createElement(b.a,{icon:f.a})))),this.state.albums.map((function(e){console.log(e);e.artistName;var t=e.artworkUrl100,a=e.collectionName,n=e.collectionExplicitness,r=e.releaseDate,c=e.collectionId;return l.a.createElement("section",{className:"wrapper"},l.a.createElement("ul",{key:c},l.a.createElement("li",null,l.a.createElement("img",{src:t,alt:"Album artwork"}),l.a.createElement("h3",null,a),l.a.createElement("p",null,n),l.a.createElement("p",null,"Released: ",r.slice(0,10)))))})),";",l.a.createElement(d,null))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2f8f38a0.chunk.js.map