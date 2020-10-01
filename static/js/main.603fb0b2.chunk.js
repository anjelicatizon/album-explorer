(this["webpackJsonpalbum-explorer"]=this["webpackJsonpalbum-explorer"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),s=(a(33),a(9)),o=a(22),i=a(23),u=a(27),m=a(26),p=a(24),h=a.n(p),d=a(3),E=a(5),b=a(4),f=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("h1",null,r.a.createElement(d.a,{icon:E.a})," Album Explorer"),r.a.createElement("div",{className:"socialIcons"},r.a.createElement("a",{href:"https://github.com/anjelicatizon/album-explorer"},r.a.createElement(d.a,{icon:b.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/anjelicatizon/"},r.a.createElement(d.a,{icon:b.c})),r.a.createElement("a",{href:"https://twitter.com/anjelicatizon"},r.a.createElement(d.a,{icon:b.d}))))))},v=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Created at ",r.a.createElement("a",{href:"https://junocollege.com/"},"Juno College"))))},w=function(e){var t=e.handleClick,a=e.handleChange,n=e.userValue;return r.a.createElement("section",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{action:"submit"},r.a.createElement("label",{htmlFor:"searchBar"},"Type in an artist to discover their entire discography"),r.a.createElement("input",{type:"text",onChange:a,value:n,placeholder:"search for an artist"}),r.a.createElement("input",{type:"submit",onClick:t,value:"search"}))))},g=a(25),y=a.n(g),k=(a(56),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({userInput:t.target.value})},e.getResults=function(t){t.preventDefault(),h()({url:"https://proxy.hackeryou.com",responseType:"json",paramsSerializer:function(e){return y.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"https://itunes.apple.com/search",params:{term:e.state.userInput,country:"CA",media:"music",entity:"album"},xmlToJSON:!1}}).then((function(t){var a=e.state.userInput;e.setState({displayedBand:a});var n=t.data.results;n.map((function(e){var t=e.artworkUrl100.replace("100x100bb.jpg","500x500bb.jpg");e.artworkUrl100=t})),n.map((function(e){var t=e.collectionExplicitness.replace("notExplicit","not explicit");e.collectionExplicitness=t})),0!==n.length?e.setState({albums:n}):alert("Sorry! We couldn't find an artist with that name. Please try another artist!"),e.setState({userInput:""})}))},e.handleSortDesc=function(){var t=Object(s.a)(e.state.albums).sort((function(e,t){return Date.parse(t.releaseDate)-Date.parse(e.releaseDate)}));e.setState({albums:t})},e.handleSortAsc=function(){var t=Object(s.a)(e.state.albums).sort((function(e,t){return Date.parse(e.releaseDate)-Date.parse(t.releaseDate)}));e.setState({albums:t})},e.state={albums:[],userInput:"",displayedBand:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(w,{handleClick:this.getResults,handleChange:this.handleChange,userValue:this.state.userInput}),r.a.createElement("section",{className:"results"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("button",{className:"sort",onClick:this.handleSortDesc},"Sort (newest to oldest) ",r.a.createElement(d.a,{icon:E.b})),r.a.createElement("button",{className:"sort",onClick:this.handleSortAsc},"Sort (oldest to newest) ",r.a.createElement(d.a,{icon:E.c})),r.a.createElement("h2",null,this.state.displayedBand),r.a.createElement("ul",null,this.state.albums.map((function(t){var a=t.artworkUrl100,n=t.collectionName,l=t.collectionExplicitness,c=t.releaseDate,s=t.collectionId,o=t.collectionViewUrl;return r.a.createElement("li",{key:s,className:"albumCard",onClick:e.handleModal},r.a.createElement("div",{className:"albumContainer"},r.a.createElement("img",{src:a,alt:"Album artwork"}),r.a.createElement("h3",null,n),"explicit"===l?r.a.createElement("p",{className:"explicit"},l):r.a.createElement("p",{className:"notExplicit"},l),r.a.createElement("p",null,"Release Date: ",c.slice(0,10)),r.a.createElement("a",{href:o},r.a.createElement(d.a,{icon:b.a})," Listen on Apple Music")))}))))),r.a.createElement(v,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.603fb0b2.chunk.js.map