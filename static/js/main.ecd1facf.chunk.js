(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/noPosterSmall.87a0eb6a.png"},44:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(36),o=n.n(i),l=n(9),u=n(10),c=n(12),s=n(11),p=n(13),d=n(17),m=n(16),f=n(5),g=n.n(f),v=n(15),h=n(2),b=n(1);function E(){var e=Object(h.a)(["    \n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 25px;\n"]);return E=function(){return e},e}function x(){var e=Object(h.a)(["\n    font-size: 16px;\n    font-weight: 600;\n"]);return x=function(){return e},e}function y(){var e=Object(h.a)(["\n    :not(:last-child) {\n        margin-bottom: 50px\n    }\n"]);return y=function(){return e},e}var j=b.default.div(y()),O=b.default.span(x()),_=b.default.div(E()),w=function(e){var t=e.title,n=e.children;return r.a.createElement(j,null,r.a.createElement(O,null,t),r.a.createElement(_,null,n))};function k(){var e=Object(h.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 28px;\n    margin-top: 20px\n"]);return k=function(){return e},e}var S=b.default.div(k()),T=function(){return r.a.createElement(S,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"\u23f0"))},R=n(14),U=n.n(R);function M(){var e=Object(h.a)(["\n    color : $(props => props.color);\n"]);return M=function(){return e},e}function z(){var e=Object(h.a)(["\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n"]);return z=function(){return e},e}var P=b.default.div(z()),C=b.default.span(M()),D=function(e){var t=e.text,n=e.color;return r.a.createElement(P,null,r.a.createElement(C,{color:n},t))};function I(){var e=Object(h.a)(["\n    font-size: 10px;\n    color: rgba(255, 255, 255, 0.5)\n"]);return I=function(){return e},e}function F(){var e=Object(h.a)(["\n    display: block;\n    font-size: 12px;\n    marign-bottom: 3px;\n"]);return F=function(){return e},e}function V(){var e=Object(h.a)(["\n    margin-bottom: 5px;\n    position: relative;\n    &:hover {\n        "," {\n            opacity: 0.3;\n        }\n        "," {\n            opacity: 1;\n        }\n    };\n"]);return V=function(){return e},e}function N(){var e=Object(h.a)(["\n    bottom: 5px;\n    right: 5px;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 0.1s linear;\n"]);return N=function(){return e},e}function A(){var e=Object(h.a)(["\n    background-image: url(",");\n    height: 180px;\n    background-size: cover;\n    border-radius: 4px;\n    background-position: center center;\n    transition: opacity 0.1s linear;\n"]);return A=function(){return e},e}function B(){var e=Object(h.a)(["\n    font-size: 12px;s\n"]);return B=function(){return e},e}var L=b.default.div(B()),q=b.default.div(A(),function(e){return e.bgUrl}),J=b.default.span(N()),G=b.default.div(V(),q,J),$=b.default.span(F()),H=b.default.span(I()),K=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(d.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(L,null,r.a.createElement(G,null,r.a.createElement(q,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(30)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\xa0\u2b50\ufe0f")," ",o,"/10")),r.a.createElement($,null,i.length>18?"".concat(i.substring(0,15),"..."):i),r.a.createElement(H,null,l)))};function Q(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return Q=function(){return e},e}var W=b.default.div(Q()),X=function(e){var t=e.upcoming,n=e.popular,a=e.nowPlaying,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Movies | Nomflix")),i?r.a.createElement(T,null):r.a.createElement(W,null,a&&a.length>0&&r.a.createElement(w,{title:"Now Playing"},a.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),t&&t.length>0&&r.a.createElement(w,{title:"Upcoming"},t.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(w,{title:"Popular movies"},n.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},Y=n(41),Z=n.n(Y).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"8ade9cc04b163e330ac46663032b5719",language:"en-US"}}),ee={nowPlaying:function(){return Z.get("movie/now_playing")},upcoming:function(){return Z.get("movie/upcoming")},popular:function(){return Z.get("movie/popular")},movieDetail:function(e){return Z.get("movie/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return Z.get("search/movie",{params:{query:encodeURIComponent(e)}})}},te={topRated:function(){return Z.get("tv/top_rated")},popular:function(){return Z.get("tv/popular")},airingToday:function(){return Z.get("tv/airing_today")},showDetail:function(e){return Z.get("tv/".concat(e),{params:{append_to_response:"videos"}})},search:function(e){return Z.get("search/tv",{params:{query:encodeURIComponent(e)}})}},ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={upcoming:null,nowPlaying:null,popular:null,loading:!0,error:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.upcoming();case 3:return t=e.sent,e.next=6,ee.nowPlaying();case 6:return n=e.sent,e.next=9,ee.popular();case 9:a=e.sent,this.setState({upcoming:t.data.results,nowPlaying:n.data.results,popular:a.data.results}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({error:"cant't find"});case 16:return e.prev=16,this.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[0,13,16,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.upcoming,n=e.popular,a=e.nowPlaying,i=e.loading,o=e.error;return r.a.createElement(X,{upcoming:t,popular:n,nowPlaying:a,loading:i,error:o})}}]),t}(r.a.Component);function ae(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return ae=function(){return e},e}var re=b.default.div(ae()),ie=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"TV shows | Nomflix")),i?r.a.createElement(T,null):r.a.createElement(re,null,t&&t.length>0&&r.a.createElement(w,{title:"Top Rated Shows"},t.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),a&&a.length>0&&r.a.createElement(w,{title:"Airing Today"},a.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),n&&n.length>0&&r.a.createElement(w,{title:"Popular TV"},n.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),o&&r.a.createElement(D,{color:"#e74c3c",text:o})))},oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.topRated();case 3:return t=e.sent,e.next=6,te.popular();case 6:return n=e.sent,e.next=9,te.airingToday();case 9:a=e.sent,this.setState({topRated:t.data.results,popular:n.data.results,airingToday:a.data.results}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),this.setState({error:"can't find TV information"});case 16:return e.prev=16,this.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}},e,this,[[0,13,16,19]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(ie,{topRated:t,popular:n,airingToday:a,loading:i,error:o})}}]),t}(r.a.Component);function le(){var e=Object(h.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return le=function(){return e},e}function ue(){var e=Object(h.a)(["\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid\n        ",";\n    transition: border-bottom .5s ease-in-out;\n"]);return ue=function(){return e},e}function ce(){var e=Object(h.a)(["\n    display: flex;\n"]);return ce=function(){return e},e}function se(){var e=Object(h.a)(["\n    color: #fff;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n    background: rgba(20, 20, 20, 0.8);\n    z-index: 10;\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]);return se=function(){return e},e}var pe=b.default.header(se()),de=b.default.ul(ce()),me=b.default.li(ue(),function(e){return e.current?"#3498db":"transparent"}),fe=Object(b.default)(d.b)(le()),ge=Object(m.f)(function(e){var t=e.location.pathname;return r.a.createElement(pe,null,r.a.createElement(de,null,r.a.createElement(me,{current:"/"===t||t.includes("/movie")},r.a.createElement(fe,{to:"/"},"Movies")),r.a.createElement(me,{current:"/tv"===t||t.includes("/show")},r.a.createElement(fe,{to:"/tv"},"TV")),r.a.createElement(me,{current:"/search"===t},r.a.createElement(fe,{to:"/search"},"Search"))))});function ve(){var e=Object(h.a)(["\n    all: unset;\n    font-size: 28px;\n    width: 100%\n"]);return ve=function(){return e},e}function he(){var e=Object(h.a)(["\n    margin-bottom: 50px;\n    width: 100%;\n"]);return he=function(){return e},e}function be(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return be=function(){return e},e}var Ee=b.default.div(be()),xe=b.default.form(he()),ye=b.default.input(ve()),je=function(e){var t=e.movieResults,n=e.tvResults,a=e.loading,i=e.searchTerm,o=e.handleSubmit,l=e.error,u=e.updateTerm;return r.a.createElement(Ee,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Search | Nomflix")),r.a.createElement(xe,{onSubmit:o},r.a.createElement(ye,{placeholder:"Search Movies or TV Shows...",value:i,onChange:u})),a?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(w,{title:"Movie Results"},t.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_title,rating:e.vote_average,year:e.release_date.substring(0,4),isMovie:!0})})),n&&n.length>0&&r.a.createElement(w,{title:"TV Show Results"},n.map(function(e){return r.a.createElement(K,{key:e.id,id:e.id,imageUrl:e.poster_path,title:e.original_name,rating:e.vote_average,year:e.first_air_date.substring(0,4)})})),l&&r.a.createElement(D,{color:"#e74c3c",text:l}),n&&t&&0===n.length&&0===t.length&&r.a.createElement(D,{text:"Nothing found",color:"#95a5a6"})))},Oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(g.a.mark(function e(){var t,a,r,i,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,ee.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,te.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results"});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}},e,null,[[2,14,17,20]])})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.loading,o=e.error;return r.a.createElement(je,{movieResults:t,tvResults:n,loading:i,error:o,searchTerm:a,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function _e(){var e=Object(h.a)(["\n    font-size: 12px;\n    opcacity: 0.7;\n    line-height: 1.5;\n    width: 50%;\n"]);return _e=function(){return e},e}function we(){var e=Object(h.a)(["\n    margin: 0 10px;\n"]);return we=function(){return e},e}function ke(){var e=Object(h.a)(["\n\n"]);return ke=function(){return e},e}function Se(){var e=Object(h.a)(["\n    margin: 20px 0;\n"]);return Se=function(){return e},e}function Te(){var e=Object(h.a)(["\n    font-size: 32px;\n"]);return Te=function(){return e},e}function Re(){var e=Object(h.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]);return Re=function(){return e},e}function Ue(){var e=Object(h.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    filter: blur(3px);\n    opacity: 0.5;\n    z-index: 0;\n"]);return Ue=function(){return e},e}function Me(){var e=Object(h.a)(["\n    width: 30%;\n    background-image: url(",");\n    background-position: center center;\n    background-size: cover;\n    height: 100%;\n    border-radius: 5px;\n"]);return Me=function(){return e},e}function ze(){var e=Object(h.a)(["\n    display: flex;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    height: 100%;\n"]);return ze=function(){return e},e}function Pe(){var e=Object(h.a)(["\n    height: calc(100vh - 50px);\n    width: 100%;\n    position: relative;\n    padding: 50px;\n"]);return Pe=function(){return e},e}var Ce=b.default.div(Pe()),De=b.default.div(ze()),Ie=b.default.div(Me(),function(e){return e.bgImage}),Fe=b.default.div(Ue(),function(e){return e.bgImage}),Ve=b.default.div(Re()),Ne=b.default.h3(Te()),Ae=b.default.div(Se()),Be=b.default.span(ke()),Le=b.default.span(we()),qe=b.default.p(_e()),Je=function(e){var t=e.result,a=e.loading;e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,null,r.a.createElement("title",null,"Loading...")),a?r.a.createElement(T,null):r.a.createElement(Ce,null,r.a.createElement(U.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name)),r.a.createElement(Fe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(De,null,r.a.createElement(Ie,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30)}),r.a.createElement(Ve,null,r.a.createElement(Ne,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ae,null,r.a.createElement(Be,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Le,null,"\xb7"),r.a.createElement(Be,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Le,null,"\xb7"),r.a.createElement(Be,null,t.genres&&t.genres.map(function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name,"/")}))),r.a.createElement(qe,null,t.overview)))))},Ge=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,loading:!0,error:null,isMovie:a.includes("movie")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark(function e(){var t,n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,!this.state.isMovie){e.next=8;break}return e.next=4,ee.movieDetail(t);case 4:n=e.sent,this.setState({result:n.data,loading:!1}),e.next=12;break;case 8:return e.next=10,te.showDetail(t);case 10:a=e.sent,this.setState({result:a.data,loading:!1});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading,i=e.isMovie;return r.a.createElement(Je,{result:t,error:n,loading:a,isMovie:i})}}]),t}(r.a.Component),$e=function(){return r.a.createElement(d.a,null,r.a.createElement(ge,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:ne}),r.a.createElement(m.b,{path:"/tv",exact:!0,component:oe}),r.a.createElement(m.b,{path:"/show/:id",exact:!0,component:Ge}),r.a.createElement(m.b,{path:"/movie/:id",exact:!0,component:Ge}),r.a.createElement(m.b,{path:"/search",exact:!0,component:Oe}),r.a.createElement(m.a,{from:"*",to:"/"})))},He=n(42),Ke=n.n(He);function Qe(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration: none;\n        color: inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;\n        font-size: 12px;\n        background: rgba(20, 20, 20, 1);\n        color: #fff;\n        padding-top: 50px;\n    }\n"]);return Qe=function(){return e},e}var We=Object(b.createGlobalStyle)(Qe(),Ke.a),Xe=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($e,null),r.a.createElement(We,null))}}]),t}(a.Component);o.a.render(r.a.createElement(Xe,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ecd1facf.chunk.js.map