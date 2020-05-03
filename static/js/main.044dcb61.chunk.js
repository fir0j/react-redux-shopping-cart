(this["webpackJsonpreact-redux-shopping-cart"]=this["webpackJsonpreact-redux-shopping-cart"]||[]).push([[0],{15:function(e,t,a){var r={"./burger.jpg":28,"./pasta.jpg":29,"./pizza.jpg":30,"./sandwitch.jpg":31};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=15},18:function(e,t,a){e.exports=a(33)},28:function(e,t,a){e.exports=a.p+"static/media/burger.985768f2.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/pasta.88b271db.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/pizza.ab3d785c.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/sandwitch.8d8ae09f.jpg"},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),o=a.n(c),l=a(3),i=a(4),s=a(7),u=a(6),m=a(5),p=a(1),d=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"UNSAFE_componentWillMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return n.a.createElement("div",{key:t.id,className:"col-md-4"},console.log(t.id),n.a.createElement("div",{className:"card text-center mb-4"},n.a.createElement("a",{href:"#".concat(t.id)},n.a.createElement("img",{width:"100%",height:"130px",src:a(15)("./".concat(t.name,".jpg")),alt:t.name})),n.a.createElement("h3",null,t.name),n.a.createElement("div",null,n.a.createElement("b",null,"Rs.".concat(t.price)),n.a.createElement("button",{className:"btn btn-primary ml-5 mb-1",onClick:function(){return e.props.addToCart(e.props.cartItems,t)}},"Add To Cart"))))}));return n.a.createElement("div",{className:"row"},t)}}]),r}(r.Component),f=Object(m.b)((function(e){return{products:e.products.filteredItems,cartItems:e.cart.cartItems}}),{fetchProducts:function(){return function(e){fetch("https://fir0j.github.io/JSON-Server/db.json").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_PRODUCTS",payload:t})}))}},addToCart:function(e,t){return function(a){var r=!1,n=e.slice();return n.forEach((function(e){e.id===t.id&&(r=!0,e.count++)})),r||n.push(Object(p.a)(Object(p.a)({},t),{},{count:1})),localStorage.setItem("cartItems",JSON.stringify(n)),a({type:"ADD_TO_CART",payload:{cartItems:n}})}}})(d),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},this.props.filteredProducts.length," products found."),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("label",null,"Order by",n.a.createElement("select",{className:"form-control",value:this.props.products.priceType,onChange:function(t){return e.props.sortProducts(e.props.filteredProducts,t.target.value)}},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"Lowest"},"Lowest to Highest"),n.a.createElement("option",{value:"Highest"},"Highest to Lowest")))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("label",null,"Filter Item",n.a.createElement("select",{className:"form-control",value:this.props.products.itemType,onChange:function(t){return e.props.filterProducts(e.props.products,t.target.value)}},n.a.createElement("option",{value:""},"Select"),n.a.createElement("option",{value:"pizza"},"pizza"),n.a.createElement("option",{value:"burger"},"burger"),n.a.createElement("option",{value:"pasta"},"pasta"),n.a.createElement("option",{value:"sandwitch"},"sandwitch")))))}}]),a}(r.Component),h=Object(m.b)((function(e){return{itemType:e.products.itemType,sortBy:e.products.sortBy,products:e.products.items,filteredProducts:e.products.filteredItems}}),{filterProducts:function(e,t){return function(a){return a({type:"FILTER_PRODUCTS_BY_TYPE",payload:{itemType:t,filteredItems:""===t?e:e.filter((function(e){return e.type===t}))}})}},sortProducts:function(e,t){return function(a){var r=e.slice();return r.sort((function(e,a){return"Highest"===t?e.price<a.price?1:-1:e.price>a.price?1:-1})),a({type:"FILTER_PRODUCTS_BY_PRICE",payload:{sortBy:t,sortedItems:r}})}}})(E),b=(a(32),function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props.cartItems,r=this.props.cartItems.map((function(t){return n.a.createElement("div",{key:t.id,className:"basketDesign"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{className:"image"},n.a.createElement("a",{href:"#".concat(t.id)},n.a.createElement("img",{width:"20%",height:"60px",src:a(15)("./".concat(t.name,".jpg")),alt:t.name}))),t.name," x",t.count," = Rs.",(t.price*t.count).toFixed(2),n.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.props.removeFromCart(e.props.cartItems,t)}},"X"))))}));return n.a.createElement("div",{className:"alter alert-info"},0===t.length?n.a.createElement("div",{className:"cart"},"Basket is Empty"):"".concat(t.length," Products in the basket"),t.length>0&&n.a.createElement("div",null,r,n.a.createElement("center",null,n.a.createElement("b",null,"Total: Rs:",t.reduce((function(e,t){return e+t.price*t.count}),0).toFixed(2)),n.a.createElement("br",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){return alert("Checkout Feature has not been implemented yet!")}},"Checkout"))))}}]),r}(r.Component)),v=Object(m.b)((function(e){return{cartItems:e.cart.cartItems}}),{removeFromCart:function(e,t){return function(a){var r=e.slice();return r=r.filter((function(e){return e.id!==t.id})),localStorage.setItem("cartItems",JSON.stringify(r)),a({type:"REMOVE_FROM_CART",payload:{cartItems:r}})}}})(b),O=a(8),y=a(17),g={items:[],filteredItems:[],itemType:""},j={cartItems:[]},I=Object(O.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(p.a)(Object(p.a)({},e),{},{filteredItems:t.payload,items:t.payload});case"FILTER_PRODUCTS_BY_TYPE":return Object(p.a)(Object(p.a)({},e),{},{filteredItems:t.payload.filteredItems,itemType:t.payload.type});case"FILTER_PRODUCTS_BY_PRICE":return Object(p.a)(Object(p.a)({},e),{},{filteredItems:t.payload.sortedItems,itemType:t.payload.sortBy});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":case"REMOVE_FROM_CART":return Object(p.a)(Object(p.a)({},e),{},{cartItems:t.payload.cartItems});default:return e}}}),T={};localStorage.getItem("cartItems")&&(T.cart={cartItems:JSON.parse(localStorage.getItem("cartItems"))});var C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,_=Object(O.e)(I,T,C(Object(O.a)(y.a))),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{store:_},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Ecommerce Shopping Cart Application"),n.a.createElement("div",{className:"row"},n.a.createElement(h,null),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-md-8"},n.a.createElement(f,null)),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(v,null)))))}}]),a}(r.Component);o.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.044dcb61.chunk.js.map