window.$j=window.jQuery=jQuery;var e=jQuery.noConflict();const t=e=>{if("BUTTON"==e.tagName){var t=e.parentNode.getElementsByTagName("ul");if(void 0!==t&&null!=t){t[0].classList.add("current");var a=document.querySelectorAll(".wraf-dropdown__list:not(.current)");if(a)for(var n=0,r=a.length;n<r;n++)a[n].classList.remove("active");t[0].classList.remove("current");for(n=0,r=t.length;n<r;n++)t[0].classList.toggle("active"),e.classList.toggle("active")}}else if("LI"==e.tagName){var i=e.parentNode.parentNode.getElementsByTagName("select")[0];void 0!==i&&null!=i&&o(i.id,e.getAttribute("data-value"));let t=e.parentNode.parentNode.getElementsByTagName("span");void 0!==t&&null!=t&&(e.parentNode.classList.toggle("active"),t[0].textContent=e.textContent,t[0].parentNode.setAttribute("data-value",e.getAttribute("data-value")))}},o=(e,t)=>{var o=document.getElementById(e);o.value=t,o.setAttribute("selected","selected")},a=t=>{var o=t.parentNode.parentNode.getElementsByTagName("select").item(0);if(o){var a=o.getAttribute("data-posttype"),r=o.getAttribute("data-taxonomy");t.getAttribute("data-value");var i=document.getElementById("wraf-result-"+a+"-"+r);o.classList.contains("list");var l=!1;if(l)return;if(l=!0,void 0!==i&&null!=i){for(;i.firstChild;)i.removeChild(i.firstChild);i.classList.add("loading"),e(i).append('<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>')}var d=document.getElementsByClassName("wraf-dropdown__button"),s=n(a,r),u=!1;Array.from(d).forEach((function(e,t){let o="";u&&(o="%2B"),""!=e.getAttribute("data-value")&&(s+=o+e.getAttribute("data-value"),u=!0)})),s+="&per_page=100",e.ajax({dataType:"json",url:s,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wraf_ajax_filter_params.ajax_nonce)}}).done((function(t){t.sort((function(e,t){return e.employees_order-t.employees_order}));var o='<h2>Search results</h2><div class="mk-employees jupiter-donut-margin-bottom-10 jupiter-donut-margin-top-10 three-column u6col u5col u4col o0col o1col o2col simple c_cs  jupiter-donut-"><ul>';if(e.each(t,(function(e,t){o+='<li class="mk-employee-item jupiter-donut-colitem jupiter-donut-align-center jupiter-donut-display-inline-block jupiter-donut-float-left">',o+='<div class="item-holder">',o+='<div class="team-thumbnail jupiter-donut-position-relative jupiter-donut-width-100-per jupiter-donut-height-100-per jupiter-donut-overflow-hidden rounded-false"><a href="'+t.link+'"><img alt="'+t.title.rendered+'" title="'+t.title.rendered+'" src="'+t.employees_image_src+'" /> </a></div>',o+='<div class="team-info-wrapper" itemscope="itemscope" itemtype="https://schema.org/Person">',o+='<a class="team-member-name" href="'+t.link+'"> <span class="team-member-name jupiter-donut-font-16 jupiter-donut-display-block jupiter-donut-font-weight-bold jupiter-donut-text-transform-up jupiter-donut-color-333">'+t.title.rendered+"</span> </a>",o+='<span class="team-member-position jupiter-donut-font-12 jupiter-donut-text-transform-up jupiter-donut-display-block jupiter-donut-color-777 jupiter-donut-letter-spacing-1">'+t.employees_position+"</span>",o+='<div class="team-member-desc jupiter-donut-margin-top-20 jupiter-donut-margin-bottom-10 jupiter-donut-display-block"><p>'+t.employees_desc+"</p></div>",o+="</li>"})),(o+="</ul></div>").length){if(void 0!==i&&null!=i)for(;i.firstChild;)i.removeChild(i.firstChild);e(i).append(o),e(i).removeClass("loading"),e(window).width()<640&&e("html, body").animate({scrollTop:e(i).offset().top},1e3)}})).fail((function(e){console.log("Something went wront, can't fetch")})).always((function(e){l=!1}))}},n=(e,t,o)=>{"post"==e&&(e="posts","category"==t&&(t="categories"));let a=wraf_ajax_filter_params.json_url;return void 0!==e&&null!=e&&(a+=e,void 0!==t&&null!=t&&(a+="?filter["+t+"]=")),a};var r={useDropdown:(e,o)=>{let n=document.createElement("div");e.parentNode.insertBefore(n,e),n.appendChild(e);var r=document.createElement("button"),i=document.createElement("span"),l=document.createTextNode(e.getAttribute("data-label")),d=document.createElement("i"),s=document.createElement("ul");n.className="wraf-dropdown select-dropdown--"+o,r.className="wraf-dropdown__button wraf-dropdown__button--"+o,r.setAttribute("data-value",""),i.className="wraf-dropdown__label wraf-dropdown__label--"+o,d.className="chevron-down",s.className="wraf-dropdown__list wraf-dropdown__list--"+o,s.id="wraf-dropdown__list",n.appendChild(r),i.appendChild(l),r.appendChild(i),r.appendChild(d),n.appendChild(s);for(var u=0;u<e.options.length;u++){let o=document.createElement("li"),n=e.options[u].value,r=document.createTextNode(e.options[u].text);o.className="wraf-dropdown__list-item",o.setAttribute("data-value",n),o.appendChild(r),s.appendChild(o),o.addEventListener("click",(function(){t(this),a(this)}),!1)}},displayUl:t,selectElement:o,filter:a,buildJsonFilterURL:n,InitializeSearch:()=>{var t=document.getElementsByClassName("wraf-submit");t.item(0)&&(e(document).on("keydown","form",(function(e){return"Enter"!=e.key})),t.item(0).addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var o=this.getAttribute("data-posttype"),a=this.parentNode.getElementsByClassName("search-field").item(0).value,n=document.getElementById("wraf-result-"+o+"-employees_category"),r=!1;if(!r){if(r=!0,void 0!==n&&null!=n){for(;n.firstChild;)n.removeChild(n.firstChild);n.classList.add("loading"),e(n).append('<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>')}var i=wraf_ajax_filter_params.json_url;void 0!==o&&null!=o&&(i+=o,null!=a&&(i+="?search="+a+"&per_page=100")),e.ajax({dataType:"json",url:i,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wraf_ajax_filter_params.ajax_nonce)}}).done((function(t){t.sort((function(e,t){return e.employees_order-t.employees_order}));var o='<h2>Search results</h2><div class="mk-employees jupiter-donut-margin-bottom-10 jupiter-donut-margin-top-10 three-column u6col u5col u4col o0col o1col o2col simple c_cs  jupiter-donut-"><ul>';if(e.each(t,(function(e,t){o+='<li class="mk-employee-item jupiter-donut-colitem jupiter-donut-align-center jupiter-donut-display-inline-block jupiter-donut-float-left">',o+='<div class="item-holder">',o+='<div class="team-thumbnail jupiter-donut-position-relative jupiter-donut-width-100-per jupiter-donut-height-100-per jupiter-donut-overflow-hidden rounded-false"><a href="'+t.link+'"><img alt="'+t.title.rendered+'" title="'+t.title.rendered+'" src="'+t.employees_image_src+'" /> </a></div>',o+='<div class="team-info-wrapper" itemscope="itemscope" itemtype="https://schema.org/Person">',o+='<a class="team-member-name" href="'+t.link+'"> <span class="team-member-name jupiter-donut-font-16 jupiter-donut-display-block jupiter-donut-font-weight-bold jupiter-donut-text-transform-up jupiter-donut-color-333">'+t.title.rendered+"</span> </a>",o+='<span class="team-member-position jupiter-donut-font-12 jupiter-donut-text-transform-up jupiter-donut-display-block jupiter-donut-color-777 jupiter-donut-letter-spacing-1">'+t.employees_position+"</span>",o+='<div class="team-member-desc jupiter-donut-margin-top-20 jupiter-donut-margin-bottom-10 jupiter-donut-display-block"><p>'+t.employees_desc+"</p></div>",o+="</li>"})),(o+="</ul></div>").length){if(void 0!==n&&null!=n)for(;n.firstChild;)n.removeChild(n.firstChild);e(n).append(o),e(n).removeClass("loading"),e(window).width()<640&&e("html, body").animate({scrollTop:e(n).offset().top},1e3)}})).fail((function(e){console.log("Something went wront, can't fetch")})).always((function(e){r=!1}))}}),!1))},resetDropdown:()=>{var e=document.getElementsByClassName("wraf-dropdown-reset")[0];if(void 0!==e&&null!=e){var t=e.getAttribute("data-posttype"),o=e.getAttribute("data-taxonomy"),a=document.getElementById("wraf-result-"+t+"-"+o);e.addEventListener("click",(function(e){if(e.preventDefault(),void 0!==a&&null!=a)for(console.log("result-test 1");a.firstChild;)a.removeChild(a.firstChild);var t=document.getElementsByClassName("wraf-dropdown");void 0!==t&&null!=t&&Array.from(t).forEach((function(e,t){var o=e.getElementsByTagName("select")[0].getAttribute("data-label"),a=e.getElementsByTagName("button")[0];a.classList.remove("active");var n=a.getElementsByTagName("span")[0];n.textContent=o,n.parentNode.setAttribute("data-value","")}))}))}}},i=i||{};
/*
 * @preserve: Custom JavaScript Logic - Frontend
 */i.Site={initializeDropdown:function(){var e=document.getElementsByClassName("wraf-select-dropdown");if(void 0!==e&&null!=e){for(var t=0,o=e.length;t<o;t++)e[t].style.display="none",r.useDropdown(e[t],t);var a=document.getElementsByClassName("wraf-dropdown__button");if(void 0!==a&&null!=a){var n=0;for(o=a.length;n<o;n++)a[n]&&a[n].addEventListener("click",(function(){r.displayUl(this)}),!1);r.InitializeSearch()}}r.resetDropdown()}},i.Site.initializeDropdown();
