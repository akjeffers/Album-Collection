parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n9pj":[function(require,module,exports) {
"use strict";function n(n){return'\n        <ul id="comment">\n            '.concat(n.map(function(n){return'\n                    <li class="comment">\n                        <h3 class="commentContent">'.concat(n.content,"</h3>\n                    </li>\n                ")}).join(""),"\n        </ul>\n        \n        ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"Th3n":[function(require,module,exports) {
"use strict";function n(n){return'\n    <header>\n        <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n        <a href="index.html"><button class="menu__button"><i class="fa fa-bars"></i></button></a>\n    </header>\n\n    <ul class="album__list">    \n  '.concat(n.map(function(n){return'\n      <li>\n        <div class="album__container">\n            <img src="'.concat(n.albumImage,'" class="album__image" id="').concat(n.id,'">\n        \n            <h2 class="album__name">').concat(n.albumTitle,'</h2>\n            <p class="album__rating">Rating: ').concat(n.rating,"</p>\n          \n        </div>\n      </li>\n              \n \n      ")}).join(""),"\n    </ul>    \n")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"AE3x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=e(require("./ArtistComment")),a=e(require("./Albums"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return'\n    <header>\n        <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n        <a href="index.html"><button class="menu__button"><i class="fa fa-bars"></i></button></a>\n    </header>\n    \n\n    <div class="logo2"><img src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></div>\n    <ul class="artist__list">\n        '.concat(t.map(function(t){return'\n            <li>\n                <div class="artist__container">\n                    <img id="'.concat(t.id,'" class="artist__image" src="').concat(t.artistImage,'" alt="Artist Image"/>\n                    <h4 class="artist__name">').concat(t.artistName,"</h4>\n                </div> \n            </li>\n\n        ")}).join(""),'\n    </ul>\n    \n        <section class="add-artist">\n            <input type="text" class="add-artist__name" placeholder="Artist\'s Name">\n            <input type="text" class="add-artist__image" placeholder="Artist\'s Image">\n            <input type="text" class="add-artist__age" placeholder="Artist\'s Age">\n            <input type="text" class="add-artist__hometown" placeholder="Artist\'s Hometown">\n            <input type="text" class="add-artist__rating" placeholder="Artist Rating">\n            <button class="add-artist__submit">Add Artist</button>\n        </section>\n    ')}
},{"./ArtistComment":"n9pj","./Albums":"Th3n"}],"JqfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var n=e(require("./SongComment"));function e(n){return n&&n.__esModule?n:{default:n}}function t(n){return'\n\n    <header>\n    <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n    </header>\n  <main class="main__wrapper">\n\n  '.concat(n.map(function(n){return'\n<div class="main__content">\n    <h2 class="song__title" id="'.concat(n.id,'">').concat(n.songTitle,'</h2>\n    <p class="song__rating">').concat(n.rating,"</p>\n    \n\n    \n    </div>\n    </div>\n    ")}).join(""),"\n\n\n</main>\n\n<<<<<<< HEAD\n=======\n<footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n>>>>>>> 07973344a646a8cfa10b3975a77de30c35e7424e\n\n\n")}
},{"./SongComment":"n9pj"}],"Yw/X":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return console.log(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"WIWw":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"EvqF":[function(require,module,exports) {
"use strict";function n(n){return'\n        <ul id="tag">\n            '.concat(n.map(function(n){return'\n                    <li class="comment">\n                        <h3 class="tagContent">'.concat(n.content,"</h3>\n                    </li>\n                ")}).join(""),"\n        </ul>\n        \n        ")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"7Qs/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s;var t=e(require("./Albums")),n=e(require("./ArtistComment")),a=e(require("./Tags"));function e(t){return t&&t.__esModule?t:{default:t}}function s(e){return'\n    <header>\n    <a href="index.html"><img class="logo" src="https://raw.githubusercontent.com/nate-fritz/nate-fritz.github.io/master/static/media/white-logo-no-bg.png"></a>\n    </header>\n\n    <ul class="artist__list">\n        <li>\n            <div class="artist__container2">\n                <img id="'.concat(e.id,'" class="artist__image2" src="').concat(e.artistImage,'" alt="Artist Image"/>\n                <h4 class="artist__name2">').concat(e.artistName,'</h4>\n                <h5 class="artist__hometown">Hometown: ').concat(e.hometown,'</h5>\n                <h5 class="artist__rating">Avg Rating: ').concat(e.rating,'</h5>\n            </div> \n        </li>\n    </ul>\n\n\n            <li class="artist__albums">').concat((0,t.default)(e.allAlbums),'</li>\n\n       \n\n\n    <div class="comments__container">\n        <h3>Comments on this Artist</h3>\n        <ul class="comments__container__list">\n        <li>').concat((0,n.default)(e.artistComments),'</li>\n        </ul>\n    </div>\n\n    <div class="tags__container">\n    <h3>Tagged with: </h3>\n    <ul class="artist-tags">\n        <li>').concat((0,a.default)(e.tags),'</li>\n    </ul>\n    </div>\n\n\n    <section class="add-album">\n        <input type="text" class="add-album__title" placeholder="Album Title">\n        <input type="text" class="add-album__image" placeholder="Album Image">\n        <input type="text" class="add-album__rating" placeholder="Album Rating">\n        <button class="add-album__submit" id="').concat(e.id,'">Add Album</button>\n    </section>\n\n    <section class="add-comments">\n        <input type="text" class="add-comment__box" placeholder="Leave A Comment">\n        <button class="add-comment__singleArtist" id="').concat(e.id,'">Add Comment</button>\n    </section>\n\n    <section class="add-tags">\n        <input type="text" class="add-tag__box" placeholder="Tag">\n        <button class="add-tag__singleArtist" id="').concat(e.id,'">Add Tag</button>\n    </section>\n\n\n    <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n    ')}
},{"./Albums":"Th3n","./ArtistComment":"n9pj","./Tags":"EvqF"}],"w97b":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var n=a(require("./Songs")),t=a(require("./AlbumComment")),l=a(require("./Tags"));function a(n){return n&&n.__esModule?n:{default:n}}function e(a){return'\n    \n    <ul class="album">\n        <li><img id="'.concat(a.id,'" class="album__image" src="').concat(a.albumImage,'"/></li>\n        <li class="album__title">').concat(a.albumTitle,'</li>\n        <li class="album__rating">').concat(a.rating,'</li>\n      \n            <ul>\n            <li class="album__songs">').concat((0,n.default)(a.allSongs),'</li>\n\n       \n    </ul>\n\n   \n    <h3>Comments on this Album</h3>\n    <ul class="album-comments">\n        <li>').concat((0,t.default)(a.albumComments),'</li>\n    </ul>\n\n    <h3>Tags on this Album</h3>\n    <ul class="album-tags">\n        <li>').concat((0,l.default)(a.tags),'</li>\n    </ul>\n\n\n    <section class="add-song">\n        <input type="text" class="add-song__title" placeholder="Song Title">\n        <input type="text" class="add-song__duration" placeholder="Song Duration">\n        <input type="text" class="add-song__rating" placeholder="Song Rating">\n        <button class="add-song__submit" id="').concat(a.id,'">Add Song</button>\n    </section>\n\n    <section class="add-comments">\n        <input type="text" class="add-comment__box" placeholder="Leave A Comment">\n        <button class="add-comment__singleAlbum" id="').concat(a.id,'">Add Comment</button>\n    </section>\n\n    <section class="add-tags">\n        <input type="text" class="add-tag__box" placeholder="Tag">\n        <button class="add-tag__singleAlbum" id="').concat(a.id,'">Add Tag</button>\n    </section>\n\n    <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n    ')}
},{"./Songs":"JqfT","./AlbumComment":"n9pj","./Tags":"EvqF"}],"hH1S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var n=o(require("./SongComment")),t=o(require("./Tags"));function o(n){return n&&n.__esModule?n:{default:n}}function e(o){return'\n    \n    <ul class="song">\n        <li class="song__title" id="'.concat(o.id,'">').concat(o.songTitle,'</li>\n        <li class="song__rating">').concat(o.rating,'</li>\n    </ul>\n\n   \n    <h3>Comments on this Song</h3>\n    <ul class="song-comments">\n        <li>').concat((0,n.default)(o.songComments),'</li>\n    </ul>\n\n    <h3>Tags on this Song</h3>\n    <ul class="song-tags">\n        <li>').concat((0,t.default)(o.tags),'</li>\n    </ul>\n\n    <section class="add-comments">\n        <input type="text" class="add-comment__box" placeholder="Leave A Comment">\n        <button class="add-comment__singleSong" id="').concat(o.id,'">Add Comment</button>\n    </section>\n\n    <section class="add-tags">\n        <input type="text" class="add-tag__box" placeholder="Tag">\n        <button class="add-tag__singleSong" id="').concat(o.id,'">Add Tag</button>\n    </section>\n\n    <footer>Before They Sold Out: A Hipster Music Collection © 2019</footer> \n    ')}
},{"./SongComment":"n9pj","./Tags":"EvqF"}],"GFX4":[function(require,module,exports) {
"use strict";var t=r(require("./components/Artists")),e=r(require("./components/Albums")),n=r(require("./components/Songs")),a=r(require("./utils/api/api-actions")),u=r(require("./utils/events/event-actions")),o=r(require("./components/SingleArtist")),i=r(require("./components/SingleAlbum")),c=r(require("./components/SingleSong"));function r(t){return t&&t.__esModule?t:{default:t}}function s(){function e(){return document.querySelector("#app")}a.default.getRequest("/artists",function(n){e().innerHTML=(0,t.default)(n)}),u.default.on(e(),"click",function(){event.target.classList.contains("artist__image")&&a.default.getRequest("/artists/".concat(event.target.id),function(t){e().innerHTML=(0,o.default)(t)})}),u.default.on(e(),"click",function(){event.target.classList.contains("album__image")&&a.default.getRequest("/albums/".concat(event.target.id),function(t){e().innerHTML=(0,i.default)(t)})}),u.default.on(e(),"click",function(){event.target.classList.contains("song__title")&&a.default.getRequest("/songs/".concat(event.target.id),function(t){e().innerHTML=(0,c.default)(t)})}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-artist__submit")){var n=document.querySelector(".add-artist__name").value,u=document.querySelector(".add-artist__image").value,o=document.querySelector(".add-artist__age").value,i=document.querySelector(".add-artist__hometown").value,c=document.querySelector(".add-artist__rating").value;a.default.postRequest("/artists/add",{artistName:n,artistImage:u,age:o,hometown:i,rating:c},function(n){return e().innerHTML=(0,t.default)(n)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-album__submit")){var t=document.querySelector(".add-album__title").value,n=document.querySelector(".add-album__image").value,u=document.querySelector(".add-album__rating").value;a.default.postRequest("/artists/".concat(event.target.id),{albumTitle:t,albumImage:n,rating:u},function(t){return e().innerHTML=(0,o.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-song__submit")){var t=document.querySelector(".add-song__title").value,n=document.querySelector(".add-song__duration").value,u=document.querySelector(".add-song__rating").value;a.default.postRequest("/albums/".concat(event.target.id),{songTitle:t,duration:n,rating:u},function(t){return e().innerHTML=(0,i.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-comment__singleArtist")){var t=document.querySelector(".add-comment__box").value;a.default.postRequest("/artists/add/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,o.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-comment__singleAlbum")){var t=document.querySelector(".add-comment__box").value;a.default.postRequest("/albums/add/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,i.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-comment__singleSong")){var t=document.querySelector(".add-comment__box").value;a.default.postRequest("/songs/add/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,c.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-comment__singleSong")){var t=document.querySelector(".add-comment__box").value;a.default.postRequest("/songs/add/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,i.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-tag__singleSong")){var t=document.querySelector(".add-tag__box").value;a.default.postRequest("/songs/add/tags/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,c.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-tag__singleAlbum")){var t=document.querySelector(".add-tag__box").value;a.default.postRequest("/albums/add/tags/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,i.default)(t)})}}),u.default.on(e(),"click",function(){if(event.target.classList.contains("add-tag__singleArtist")){var t=document.querySelector(".add-tag__box").value;a.default.postRequest("/artists/add/tags/".concat(event.target.id),{content:t},function(t){return e().innerHTML=(0,o.default)(t)})}})}s();
},{"./components/Artists":"AE3x","./components/Albums":"Th3n","./components/Songs":"JqfT","./utils/api/api-actions":"Yw/X","./utils/events/event-actions":"WIWw","./components/SingleArtist":"7Qs/","./components/SingleAlbum":"w97b","./components/SingleSong":"hH1S"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.c0f0033a.js.map