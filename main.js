(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i){var u=this,a=r.handleCardClick,c=r.handleCardRemove,l=r.handleLikeAdd,s=r.handleLikeRemove;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_isOwner",(function(){return u._data.owner._id!==u._userId})),t(this,"_toggleLikeState",(function(e){u._isLiked()?u._handleLikeRemove(u._data):u._handleLikeAdd(u._data)})),this._data=e,this._link=e.link,this._name=e.name,this._id=e.id,this._likes=e.likes,this._cardSelector=o,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__photo"),this._handleCardClick=a,this._handleDeleteIconClick=c,this._buttonLike=this._element.querySelector(".button_type_like"),this._buttonDelete=this._element.querySelector(".button_type_delete"),this._likesInfo=this._element.querySelector(".element__like-count"),this._userId=i,this._handleLikeAdd=l,this._handleLikeRemove=s}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._element.querySelector(".element__title").textContent=this._name,this._cardImage.alt=this._name,this._cardImage.src=this._link,this._isOwner()&&this._buttonDelete.remove(),this._likesInfo.textContent=this._likes.length,this._isLiked()&&this._buttonLike.classList.add("button_status_active"),this._isLiked(),this._isOwner(),this._setEventListeners(),this._element}},{key:"updateLikes",value:function(e){this._likes=e,this._likesInfo.textContent=this._likes.length}},{key:"_isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"addLike",value:function(e){this._buttonLike.classList.add("button_status_active"),this.updateLikes(e)}},{key:"removeLike",value:function(e){this._buttonLike.classList.remove("button_status_active"),this.updateLikes(e)}},{key:"handleCardDelete",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._buttonLike.addEventListener("click",(function(){e._toggleLikeState(e._data)})),this._buttonDelete.addEventListener("click",(function(t){t.preventDefault(),e._handleDeleteIconClick(e._data)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButton",value:function(){this._buttonElement.disabled=!this._formElement.checkValidity(),this._buttonElement.classList.toggle(this._inactiveButtonClass,!this._formElement.checkValidity())}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButton()}))}))}},{key:"cancelValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"},u=(document.querySelectorAll(".popup"),document.querySelector(".popup_action_edit")),a=document.querySelector(".popup_action_add"),c=(document.querySelector(".popup_action_open-pic"),document.querySelector(".popup_action_update-avatar")),l=document.querySelector(".button_type_add"),s=document.querySelector(".button_type_edit"),f=u.querySelector(".popup__form_edit-element"),p=a.querySelector(".popup__form_add-element"),d=c.querySelector(".popup__form_update-avatar"),_=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup__input_el_name")),h=document.querySelector(".popup__input_el_job"),y=(document.querySelector(".popup__input_el_title"),document.querySelector(".popup__input_el_link"),document.querySelector(".popup__image"),document.querySelector(".popup__caption"),document.querySelector(".elements__list")),m=document.querySelector(".popup__input_el_avatar"),v=document.querySelector(".profile__edit-icon"),b=document.querySelector(".profile__avatar");function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"closePopup",(function(){n._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",n._handleEscClose)})),g(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.closePopup()})),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".button_type_close"),this._buttonSubmit=this._popup.querySelector(".popup__button")}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup()})),this._buttonClose.addEventListener("click",(function(){e.closePopup()}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t,n){var r,o=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleFormSubmit=o,r._form=r._popup.querySelector(n),r._inputList=r._popup.querySelectorAll(".popup__input"),r._buttonSubmit=document.querySelectorAll(".popup__button"),r}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";this._buttonSubmit.textContent=e?n:t}},{key:"setEventListeners",value:function(){var e=this;E(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){E(C(u.prototype),"closePopup",this).call(this),this._form.reset()}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function A(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(n);if(r){var o=D(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return A(this,e)});function i(e,t,n){var r,u,a,c,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),l=function(e,t){u._cardImage.src=t,u._cardImage.alt=e,u._caption.textContent=e,x((r=T(u),D(i.prototype)),"openPopup",r).call(r)},(c="openPopup")in(a=T(u=o.call(this,e)))?Object.defineProperty(a,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[c]=l,u._cardImage=document.querySelector(t),u._caption=document.querySelector(n),u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(S);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t),this._profileJob=document.querySelector(n),this._profileAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e}},{key:"getUserAvatar",value:function(){user.avatar=this._profileAvatar.src}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers={authorization:"26c152b8-4b25-45b9-afcc-e4f2f5c8d0d0","Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=K(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},$.apply(this,arguments)}function K(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(t),n}return t=u,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()})),$(X(u.prototype),"setEventListeners",this).call(this)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ee(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var te=new J(".profile__title",".profile__subtitle",".profile__avatar"),ne=new H("https://mesto.nomoreparties.co/v1/cohort-43","26c152b8-4b25-45b9-afcc-e4f2f5c8d0d0");Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t=Z(e,2),n=t[0],r=t[1];te.setUserInfo(n),te.setUserAvatar(n.avatar);var o=new N({items:r,renderer:function(e){o.addItem(re(e,n._id))}},".elements__list");r.reverse(),o.renderItems()})).catch((function(e){console.log(e)}));var re=function(e,t){var r=new n(e,{handleCardClick:function(e,t){ae.openPopup(e,t)},handleCardRemove:function(e){ie.openPopup(),ie.setSubmitAction((function(){ne.deleteCard(e._id).then((function(e){r.handleCardDelete(),ie.closePopup()})).catch((function(e){console.log(e)}))}))},handleLikeAdd:function(e){ne.addLike(e._id).then((function(e){r.addLike(e.likes)})).catch((function(e){console.log(e)}))},handleLikeRemove:function(e){ne.deleteLike(e._id).then((function(e){r.removeLike(e.likes)})).catch((function(e){console.log(e)}))}},".template-element",t);return r.generateCard()},oe=new I(".popup_action_edit",{handleFormSubmit:function(e){oe.renderLoading(!0),ne.editUserInfo(_.value,h.value).then((function(e){te.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1)})),oe.closePopup()}},".popup__form_edit-element");oe.setEventListeners();var ie=new Y(".popup_action_delete-pic",".popup__form_delete-pic");ie.setEventListeners();var ue=new I(".popup_action_add",{handleFormSubmit:function(e){ue.renderLoading(!0,"Создать","Cоздание"),Promise.all([ne.getUserInfo(),ne.addCard(e)]).then((function(e){var t=Z(e,2),n=t[0],r=t[1];y.prepend(re(r,n._id)),te.setUserInfo(n)})).catch((function(e){console.log(e)})).finally((function(){ue.renderLoading(!1)})),ue.closePopup()}},".popup__form_add-element");ue.setEventListeners();var ae=new U(".popup_action_open-pic",".popup__image",".popup__caption");ae.setEventListeners();var ce=new o(i,p),le=new o(i,f),se=new o(i,d);ce.enableValidation(),le.enableValidation(),se.enableValidation(),s.addEventListener("click",(function(){ne.getUserInfo().then((function(e){te.getUserInfo(),_.value=e.name,h.value=e.about})),oe.openPopup(),le.cancelValidation()})),l.addEventListener("click",(function(){ue.openPopup(),ce.cancelValidation(),ce.toggleButton()}));var fe=new I(".popup_action_update-avatar",{handleFormSubmit:function(){fe.renderLoading(!0),ne.updateAvatar(m.value).then((function(e){te.setUserAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally((function(){fe.renderLoading(!1)})),fe.closePopup()}},".popup__form_update-avatar");fe.setEventListeners(),v.addEventListener("click",(function(){se.cancelValidation(),se.toggleButton(),fe.openPopup()})),b.addEventListener("mouseout",(function(){v.classList.add("profile__edit-icon_hidden")})),b.addEventListener("mouseover",(function(){v.classList.remove("profile__edit-icon_hidden")}))})();
//# sourceMappingURL=main.js.map