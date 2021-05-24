(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{R:()=>p});var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var r,n,o;return r=e,o=[{key:"fromJson",value:function(t){var r=t.id,n=t.tarea,o=t.completado,a=t.creado,i=new e(n);return i.id=r,i.completado=o,i.creado=a,i}}],(n=[{key:"imprimirClase",value:function(){return"".concat(this.tarea," - ").concat(this.id)}}])&&t(r.prototype,n),o&&t(r,o),e}();function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o,i;return t=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!==e})),this.guardarLocalStorage()}},{key:"completadoTodo",value:function(e){var t,r=n(this.todos);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(o.id===e){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(e){r.e(e)}finally{r.f()}}},{key:"eliminarCompletadosTodo",value:function(){this.todos=this.todos.filter((function(e){return!e.completados})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(e){return r.fromJson(e)}))}}])&&a(t.prototype,o),i&&a(t,i),e}();function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.querySelector(".new-todo"),d=document.querySelector(".todo-list"),s=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=function(e){var t=document.createDocumentFragment(),r=document.createElement("LI");r.classList.toggle("completed",e.completado),r.setAttribute("data-id",e.id);var n=document.createElement("DIV");n.classList.add("view");var o=document.createElement("INPUT");o.classList.add("toggle"),o.setAttribute("type","checkbox"),e.completado?o.checked=!0:o.checked=!1;var a=document.createElement("LABEL");a.textContent="".concat(e.tarea);var i=document.createElement("BUTTON");i.classList.add("destroy");var c=document.createElement("INPUT");c.classList.add("edit"),c.setAttribute("value","Create a TodoMVC template"),n.append(o),n.append(a),n.append(i),r.append(n),r.append(c),t.append(r),d.append(t)};u.addEventListener("keyup",(function(e){var t=e.target.value;if(13===e.keyCode&&t.length>0){var n=new r(t);p.nuevoTodo(n),v(n),u.value=""}})),d.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,n=parseInt(r.getAttribute("data-id"));t.includes("input")?(p.completadoTodo(n),r.classList.toggle("completed")):t.includes("button")&&(p.eliminarTodo(n),d.removeChild(r))})),s.addEventListener("click",(function(){p.eliminarCompletadosTodo();for(var e=d.children.length-1;e>=0;e--){var t=d.children[e];t.classList.contains("completed")&&d.removeChild(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){m.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var r,n=c(d.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var p=new i;p.todos.forEach((function(e){return v(e)}))})();