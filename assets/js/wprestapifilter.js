const e="wraf";var t=t=>{let a=document.getElementById(e+"-result-employees-employees_category");const o=document.getElementsByClassName("wraf-result-wrapper")[0]?document.getElementsByClassName("wraf-result-wrapper")[0].getAttribute("data-label"):"Search results";if(t){t.sort((function(e,t){return e.employees_order-t.employees_order}));var i="<h2>"+o+'</h2><div class="mk-employees jupiter-donut-margin-bottom-10 jupiter-donut-margin-top-10 three-column u6col u5col u4col o0col o1col o2col simple c_cs  jupiter-donut-"><ul>';if($j.each(t,(function(e,t){i+='<li class="mk-employee-item jupiter-donut-colitem jupiter-donut-align-center jupiter-donut-display-inline-block jupiter-donut-float-left">',i+='<div class="item-holder">',i+='<div class="team-thumbnail jupiter-donut-position-relative jupiter-donut-width-100-per jupiter-donut-height-100-per jupiter-donut-overflow-hidden rounded-false"><a href="'+t.link+'"><img alt="'+t.title.rendered+'" title="'+t.title.rendered+'" src="'+t.employees_image_src+'" /> </a></div>',i+='<div class="team-info-wrapper" itemscope="itemscope" itemtype="https://schema.org/Person">',i+='<a class="team-member-name" href="'+t.link+'"> <span class="team-member-name jupiter-donut-font-16 jupiter-donut-display-block jupiter-donut-font-weight-bold jupiter-donut-text-transform-up jupiter-donut-color-333">'+t.title.rendered+"</span> </a>",i+='<span class="team-member-position jupiter-donut-font-12 jupiter-donut-text-transform-up jupiter-donut-display-block jupiter-donut-color-777 jupiter-donut-letter-spacing-1">'+t.employees_position+"</span>",i+='<div class="team-member-desc jupiter-donut-margin-top-20 jupiter-donut-margin-bottom-10 jupiter-donut-display-block"><p>'+t.employees_desc+"</p></div>",i+="</li>"})),(i+="</ul></div>").length){if(void 0!==a&&null!=a)for(;a.firstChild;)a.removeChild(a.firstChild);$j(a).append(i),$j(a).removeClass("loading"),$j(window).width()<640&&$j("html, body").animate({scrollTop:$j(a).offset().top},1e3)}}};var a=t=>{let a=document.getElementById(e+"-result-posts"),o=a.getAttribute("categories");if(t){const e=document.getElementsByClassName("wraf-result-wrapper")[0]?document.getElementsByClassName("wraf-result-wrapper")[0].getAttribute("data-label"):"Search results";if("news"==o||"legal-updates"==o||"webinars"==o||"news-vi"==o||"legal-updates-vi"==o||"webinars-vi"==o){let o="<h2>"+e+'</h2><div class=""><ul class="js-loop js-el jupiter-donut-clearfix mk-blog-container mk-grid-wrapper jupiter-donut- mag-one-column mk-blog-container-lazyload js-loop--loaded">';if($j.each(t,(function(e,t){o+='<li class="mk-blog-grid-item mk-isotop-item image-post-type two-column mk-blog-grid-item--loaded">',o+='<div class="blog-grid-holder">',o+='<div class="mk-blog-meta">',o+='<h3 class="the-title"><a href="'+t.link+'">'+t.title.rendered+"</a></h3>";let a=new Date(t.date);o+='<div class="mk-blog-meta-wrapper"><time><a href="https://ykvn-law.lndo.site/2020/06/">'+a.toLocaleString("default",{month:"long"})+" "+a.getDate()+", "+a.getFullYear()+"</a></time></div>",o+='<div class="the-excerpt">'+t.excerpt.rendered+"</div>",o+="</div></li>"})),o+="</ul></div>",o.length){if(void 0!==a&&null!=a)for(;a.firstChild;)a.removeChild(a.firstChild);$j(".mk-blog-container").empty(),$j(a).append(o),$j(a).removeClass("loading"),$j(window).width()<640&&$j("html, body").animate({scrollTop:$j(a).offset().top},1e3)}}else{let o="<h2>"+e+'</h2><div class=""><ul class="mk-blog-container mk-thumbnail-wrapper   jupiter-donut- mag-one-column">';if($j.each(t,(function(e,t){o+='<li class="mk-blog-thumbnail-item image-post-type mk-isotop-item image-post-type content-align-right  jupiter-donut-clearfix">',o+='<div class="item-holder">',o+='<div class="featured-image">',t.feature_image_src&&(o+='<a href="'+t.link+'"><img alt="'+t.title.rendered+'" title="'+t.title.rendered+'" src="'+t.feature_image_src+'" /> </a>'),o+="</div>",o+='<div class="item-wrapper" itemscope="itemscope" itemtype="https://schema.org/Post"><div class="mk-blog-meta">';let a=new Date(t.date);o+='<div class="mk-blog-meta-wrapper"><time datetime="2020-06-25"><a href="https://ykvn-law.lndo.site/2020/06/">'+a.toLocaleString("default",{month:"long"})+" "+a.getDate()+", "+a.getFullYear()+"</a></time></div>",o+='<h3 class="the-title"><a href="'+t.link+'">'+t.title.rendered+"</a></h3>",o+="</div>",o+='<div class="the-excerpt">'+t.excerpt.rendered+"</div>",o+='<div class="mk-teader-button">',o+='<div class="mk-teader-button"><div class="mk-button-container _ jupiter-donut-relative    jupiter-donut-inline-block jupiter-donut-left "><a href="'+t.link+'" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-outline mk-button--size-medium mk-button--corner-pointed skin-dark _ jupiter-donut-relative jupiter-donut-text-center jupiter-donut-font-weight-700 jupiter-donut-no-backface  letter-spacing-1 jupiter-donut-inline-block"><span class="mk-button--text">READ MORE</span></a></div></div>',o+="</div></li>"})),o+="</ul></div>",o.length){if(void 0!==a&&null!=a)for(;a.firstChild;)a.removeChild(a.firstChild);$j(".mk-blog-container").empty(),$j(a).append(o),$j(a).removeClass("loading"),$j(window).width()<640&&$j("html, body").animate({scrollTop:$j(a).offset().top},1e3)}}}};window.$j=window.jQuery=jQuery;let o=jQuery.noConflict();const i=(e,i,n)=>{if(e.length){let i=new Date(e),n=new Date(i),r=document.getElementsByClassName("wraf-datepicker").item(0),d=r.getAttribute("data-type-filter"),s=l(r);n.setDate(n.getDate()+1),r.setAttribute("data-before",n.toISOString()),r.setAttribute("data-after",i.toISOString()),s+="&after="+i.toISOString(),o.ajax({dataType:"json",url:s,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wraf_ajax_filter_params.ajax_nonce)}}).done((function(e){"taxanomy"==d?t(e):"meta"==d&&a(e)})).fail((function(e){console.log("Something went wrong, can't fetch")})).always((function(e){requestRunning=!1}))}},l=t=>{let a=wraf_ajax_filter_params.json_url,i=document.querySelectorAll(".wraf-dropdown__button.active");if(a+="posts?",i.length){let l=t.getAttribute("data-posttype"),n=t.getAttribute("data-taxonomy"),r=document.getElementById([e,"result",l,n].filter(Boolean).join("-")),d='<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>',s=!1;if(s)return;if(s=!0,void 0!==r&&null!=r){for(;r.firstChild;)r.removeChild(r.firstChild);r.classList.add("loading"),o(r).append(d)}Array.from(i,(e=>{""!=e.getAttribute("data-value")&&(a+="&"+e.getAttribute("data-term")+"="+e.getAttribute("data-value"))}))}return a};var n={useDatePicker:(e,t)=>{const a={dateFormat:"F d, Y",onChange:function(e,t,a){i(e)}};o(".wraf-datepicker").flatpickr(a)},onChangeDatePickerField:i};window.$j=window.jQuery=jQuery;let r=jQuery.noConflict();const d=e=>{if("BUTTON"==e.tagName){let t=e.parentNode.getElementsByTagName("ul");if(void 0!==t&&null!=t){t[0].classList.add("current");let a=document.querySelectorAll(".wraf-dropdown__list:not(.current)");if(a)for(let e=0,t=a.length;e<t;e++)a[e].classList.remove("active");t[0].classList.remove("current");for(let o=0,i=t.length;o<i;o++)t[0].classList.toggle("active"),e.classList.toggle("active")}}else if("LI"==e.tagName){let t=e.parentNode.parentNode.getElementsByTagName("select")[0];void 0!==t&&null!=t&&s(t.id,e.getAttribute("data-value"));let a=e.parentNode.parentNode.getElementsByTagName("span");void 0!==a&&null!=a&&(e.parentNode.classList.toggle("active"),a[0].textContent=e.textContent,a[0].parentNode.setAttribute("data-value",e.getAttribute("data-value")))}},s=(e,t)=>{let a=document.getElementById(e);a.value=t,a.setAttribute("selected","selected")},u=o=>{let i=o.parentNode.parentNode.getElementsByTagName("select").item(0);if(i){let o=i.getAttribute("data-posttype"),l=i.getAttribute("data-taxonomy"),n=i.getAttribute("data-type-filter"),d=document.getElementById([e,"result",o,l].filter(Boolean).join("-"));i.classList.contains("list");let s='<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>',u=!1,m=[];if(u)return;if(u=!0,void 0!==d&&null!=d){for(;d.firstChild;)d.removeChild(d.firstChild);d.classList.add("loading"),r(d).append(s)}let p=document.getElementsByClassName(e+"-dropdown__button");"posts"==o&&i.getAttribute("data-categories")&&m.push({categories:i.getAttribute("data-categories")});let f=c(o,n,l,p,m);r.ajax({dataType:"json",url:f,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wraf_ajax_filter_params.ajax_nonce)}}).done((function(e){"taxanomy"==n?t(e):"meta"==n&&a(e)})).fail((function(e){console.log("Something went wront, can't fetch")})).always((function(e){u=!1}))}},c=(e,t,a,o,i=null)=>{"post"==e&&(e="posts","category"==a&&(a="categories"));let l=wraf_ajax_filter_params.json_url;if(void 0!==e&&null!=e){if(l+=e+"?","taxanomy"==t){if(void 0!==a&&null!=a){l+="filter["+a+"]=";let e=!1;Array.from(o).forEach((function(t,a){let o="";e&&(o="%2B"),""!=t.getAttribute("data-value")&&(l+=o+t.getAttribute("data-value"),e=!0)}))}l+="&per_page=100"}else"meta"==t&&(Array.from(o).forEach((function(e,t){""!=e.getAttribute("data-value")&&(l+="&"+e.getAttribute("data-term")+"="+e.getAttribute("data-value"))})),i&&i.forEach((function(e){Object.keys(e).forEach((function(t){l+="&"+t+"="+e[t]}))})));let n=document.getElementsByClassName("wraf-datepicker").item(0);if(n){let e=n.getAttribute("data-before"),t=n.getAttribute("data-after");e&&t&&(l+="&after="+t)}}return l},m=(e,t,a,o)=>{let i=wraf_ajax_filter_params.json_url;return void 0!==e&&null!=e&&(i+=e+"?",("taxanomy"==t||"meta"==t)&&(void 0!==a&&null!=a&&(i+="search="+a),i+="&per_page=100&orderby=date&order=desc")),o&&o.forEach((function(e){Object.keys(e).forEach((function(t){i+="&"+t+"="+e[t]}))})),i};var p={useDropdown:(t,a)=>{let o=document.createElement("div");t.parentNode.insertBefore(o,t),o.appendChild(t);let i=document.createElement("button"),l=document.createElement("span"),n=document.createTextNode(t.getAttribute("data-label")),r=document.createElement("i"),s=document.createElement("ul");o.className=e+"-dropdown select-dropdown--"+a,i.className=e+"-dropdown__button "+e+"-dropdown__button--"+a+" "+t.getAttribute("data-posttype"),i.setAttribute("data-value",""),i.setAttribute("data-term",t.getAttribute("data-term")),l.className=e+"-dropdown__label "+e+"-dropdown__label--"+a,r.className="chevron-down",s.className=e+"-dropdown__list "+e+"-dropdown__list--"+a,s.id=e+"-dropdown__list",o.appendChild(i),l.appendChild(n),i.appendChild(l),i.appendChild(r),o.appendChild(s);for(let c=0;c<t.options.length;c++){let a=document.createElement("li"),o=t.options[c].value,i=document.createTextNode(t.options[c].text);a.className=e+"-dropdown__list-item",a.setAttribute("data-value",o),a.appendChild(i),s.appendChild(a),a.addEventListener("click",(function(){d(this),u(this)}),!1)}},displayUl:d,selectElement:s,filter:u,buildJsonFilterURL:c,InitializeSearch:()=>{let o=document.getElementsByClassName("wraf-submit").item(0);o&&(r(document).on("keydown","form",(function(e){return"Enter"!=e.key})),o.addEventListener("click",(function(i){i.preventDefault(),i.stopPropagation();let l=this.getAttribute("data-posttype"),n=this.parentNode.getElementsByClassName("search-field").item(0).value,d=o.getAttribute("data-taxonomy"),s=o.getAttribute("data-type-filter"),u=document.getElementById([e,"result",l,d].filter(Boolean).join("-")),c=[],p=!1;if(p)return;if(p=!0,void 0!==u&&null!=u){for(;u.firstChild;)u.removeChild(u.firstChild);u.classList.add("loading"),r(u).append('<div class="ball-pulse"><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div><div style="background-color: #223c7e"></div></div>')}"posts"==l&&o.getAttribute("data-categories")&&c.push({categories:o.getAttribute("data-categories")});let f=m(l,s,n,c);r.ajax({dataType:"json",url:f,beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",wraf_ajax_filter_params.ajax_nonce)}}).done((function(e){"taxanomy"==s?t(e):"meta"==s&&a(e)})).fail((function(e){console.log("Something went wrong, can't fetch")})).always((function(e){p=!1}))}),!1))},resetDropdown:()=>{let t=document.getElementsByClassName("wraf-dropdown-reset")[0];if(void 0!==t&&null!=t){let a=t.getAttribute("data-posttype"),o=t.getAttribute("data-taxonomy"),i=document.getElementById([e,"result",a,o].filter(Boolean).join("-"));t.addEventListener("click",(function(e){if(e.preventDefault(),void 0!==i&&null!=i)for(;i.firstChild;)i.removeChild(i.firstChild);let t=document.getElementsByClassName("wraf-dropdown");if(void 0!==t&&null!=t&&Array.from(t).forEach((function(e,t){let a=e.getElementsByTagName("select")[0].getAttribute("data-label"),o=e.getElementsByTagName("button")[0];o.classList.remove("active");let i=o.getElementsByTagName("span")[0];i.textContent=a,i.parentNode.setAttribute("data-value","")})),"posts"==a){document.getElementsByClassName("search-field").item(0).value="",document.getElementsByClassName("wraf-submit").item(0).click()}let o=r(".wraf-datepicker");o.attr("data-before",""),o.attr("data-after","");const l={dateFormat:"F d, Y",onChange:function(e,t,a){n.onChangeDatePickerField(e,t,a)}};o.flatpickr(l).clear()}))}}},f=f||{};

/*
 * @preserve: Custom JavaScript Logic - Frontend
 */f.Site={initializeDropdown:function(){var t=document.getElementsByClassName("wraf-select-dropdown");if(void 0!==t&&null!=t){for(var a=0,o=t.length;a<o;a++)t[a].style.display="none",p.useDropdown(t[a],a);var i=document.getElementsByClassName(e+"-dropdown__button");if(void 0!==i&&null!=i){var l=0;for(o=i.length;l<o;l++)i[l]&&i[l].addEventListener("click",(function(){p.displayUl(this)}),!1);p.InitializeSearch()}}p.resetDropdown(),n.useDatePicker()}},f.Site.initializeDropdown();
