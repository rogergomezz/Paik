window.fusionForms={onLoad:function(){setTimeout(function(){window.fusionForms.calcSelectArrowDimensions()},100),jQuery(".fusion-form-recaptcha-v2").length&&window.fusionForms.renderRecaptcha(),window.fusionForms.calcTooltipWidth(),jQuery("#fusion-form-preview").length||jQuery.each(jQuery(".fusion-form-builder"),function(e,r){window.fusionForms.ajaxUpdateView(this)})},onReady:function(){window.fusionForms.startFlatpickr(),jQuery(".fusion-form-range-field-container").on("change input",function(e){var r=jQuery(e.target),i=parseInt(r.attr("max")),o=parseInt(r.attr("min")),t=parseInt(r.val()),n=r.hasClass("fusion-form-range-value")?".fusion-form-input":".fusion-form-range-value";(t<o||t>i)&&(t=t<o?o:i,r.val(t)),r.siblings(n).val(t)}),jQuery(".fusion-form-upload-field-button").on("click",function(e){e.preventDefault(),jQuery(this).closest(".fusion-form-upload-field-container").find('input[type="file"]').trigger("click")}),jQuery('.fusion-form-upload-field-container input[type="file"]').on("change",function(){window.fusionForms.fileUploadChange(this)}),jQuery(".form-form-submit").on("click",function(e){window.fusionForms.hiddenFields(e,this),window.fusionForms.submitClick(e,this)}),jQuery("form.fusion-form").on("submit",function(e){window.fusionForms.submitForm(e,this)}),jQuery("body").on("click",".fusion-alert .close",function(e){e.preventDefault(),jQuery(this).parent().slideUp()}),jQuery(".fusion-form-field input, .fusion-form-field textarea").on("blur",function(){var e=jQuery(this).closest(".fusion-form-field");e.hasClass("error")&&this.checkValidity()&&e.removeClass("error")}),jQuery(".fusion-form-upload-field").on("drag dragstart dragend dragover dragenter dragleave drop",function(e){e.preventDefault(),e.stopPropagation()}).on("dragover dragenter",function(){jQuery(this).addClass("focused")}).on("dragleave dragend drop",function(){jQuery(this).removeClass("focused")}).on("drop",function(e){var r=e.originalEvent.dataTransfer.files;jQuery(this).find('input[type="file"]').prop("files",r).trigger("change")})},startFlatpickr:function(){jQuery('.fusion-form-field input[type="date"]').each(function(){var e=jQuery(this),r=e.attr("data-type"),i="custom"===r;"native"!==r&&e.flatpickr({allowInput:!0,disableMobile:i})}),jQuery('.fusion-form-field input[type="time"]').each(function(){var e=jQuery(this),r=e.attr("data-type"),i="custom"===r,o="full"===e.attr("data-clock");"native"!==r&&e.flatpickr({allowInput:!0,disableMobile:i,enableTime:!0,noCalendar:!0,dateFormat:o?"H:i":"h:i K",time_24hr:o})})},renderRecaptcha:function(){var e;jQuery.each(jQuery(".fusion-form-recaptcha-v2"),function(r,i){e=jQuery(this).attr("id"),grecaptcha.render(e,{sitekey:jQuery(this).data("sitekey"),type:jQuery(this).data("type"),theme:jQuery(this).data("theme")})})},calcTooltipWidth:function(){jQuery.each(jQuery(".fusion-form-tooltip-content"),function(e,r){var i;jQuery(r).closest(".fusion-form-tooltip").css({position:"inherit"}),i=jQuery(r).width()+23,jQuery(r).css({width:i+"px"}),jQuery(r).closest(".fusion-form-tooltip").removeAttr("style")})},calcSelectArrowDimensions:function(){jQuery(".fusion-form-select-wrapper .select-arrow").filter(":visible").each(function(){0<jQuery(this).prev().innerHeight()&&jQuery(this).css({height:jQuery(this).prev().innerHeight(),width:jQuery(this).prev().innerHeight(),"line-height":jQuery(this).prev().innerHeight()+"px"})})},withinViewport:function(e){var r=e.offset().top,i=r+e.outerHeight(),o=jQuery(window).scrollTop(),t=o+jQuery(window).height();return i>o&&r<t},submitClick:function(e,r){var i,o=jQuery(r).closest("form.fusion-form"),t=jQuery(r).data("form-number"),n=[];"default"!==window["formCreatorConfig_"+t].form_type&&(e.preventDefault(),o.find('[data-holds-private-data="true"]').each(function(e,r){n.push(r.name)}),o.find('[name="fusion-fields-hold-private-data"]').length||o.append('<input type="hidden" name="fusion-fields-hold-private-data" value="'+n.join(",")+'">'),setTimeout(function(){o.trigger("submit"),i=new CustomEvent("fusion-form-submit",{detail:{event:e,form:o}}),window.dispatchEvent(i)},50))},hiddenFields:function(e,r){jQuery(r).closest("form.fusion-form").find(".fusion-form-field-hidden").find("input, textarea, select").attr("required",!1)},submitForm:function(e,r){var i=jQuery(r),o=i.find(".form-form-submit").data("form-number"),t=window["formCreatorConfig_"+o];if("default"!==t.form_type){if(e.preventDefault(),i.find(".fusion-form-field.error").removeClass("error"),!i[0].checkValidity())return i[0].reportValidity(),void i.find("input:invalid, textarea:invalid").each(function(){jQuery(this).closest(".fusion-form-field").addClass("error")});0==i.find(".error:not(.fusion-alert)").length&&window.fusionForms.ajaxSubmit(i,t)}},getFormData:function(e,r){var i,o,t=new FormData,n=e.find('input[type="file"]'),a=e.serializeArray(),f=e.parent().data("form-id");for(n.length&&n.each(function(){var e=jQuery(this).attr("name"),r=this.files.length;jQuery.each(this.files,function(i,o){1<r?t.append("files["+e.replace("[]","")+" "+(i+1)+"]",o):t.append("files["+e+"]",o)})}),i=0,o=a.length;i<o;i++)a[i].value=jQuery.trim(a[i].value);return t.append("formData",jQuery.param(a)),t.append("action","fusion_form_submit_form_to_"+r.form_type),t.append("fusion_form_nonce",e.find("#fusion-form-nonce-"+f).val()),t.append("form_id",r.form_id),t.append("post_id",r.post_id),t.append("field_labels",JSON.stringify(r.field_labels)),e.find(".fusion-form-recaptcha-v2").length&&t.append("g-recaptcha-response",e.find("#g-recaptcha-response").val()),e.find(".fusion-form-recaptcha-v3").length&&t.append("g-recaptcha-response",e.find(".g-recaptcha-response").val()),"url"===r.form_type&&(t.append("fusionAction",e.attr("action")),t.append("fusionActionMethod",e.attr("method"))),t},ajaxSubmit:function(e,r){var i=this;e.find(".form-form-submit").addClass("fusion-form-working"),jQuery.ajax({type:"POST",url:formCreatorConfig.ajaxurl,data:window.fusionForms.getFormData(e,r),action:"fusion_form_submit_form_to_"+r.form_type,dataType:"json",processData:!1,contentType:!1}).done(function(o){o.captcha||jQuery(e)[0].reset(),"success"==o.status&&"redirect"==r.confirmation_type&&""!==r.redirect_url?window.location=r.redirect_url:i.revealAlert(e,o.status),jQuery(window).trigger("fusion-form-ajax-submit-done",o)}).fail(function(){i.revealAlert(e,"error")}).always(function(){e.find(".form-form-submit").removeClass("fusion-form-working"),jQuery(window).trigger("fusion-form-ajax-submitted")})},revealAlert:function(e,r){var i=e.find(".form-submission-notices"),o=-1!==r.indexOf("error")?"error":r,t=i.find(" > .fusion-form-response-"+o);i.find(".fusion-form-response").hide(),t.length&&(this.withinViewport(i)?t.slideDown(300):(t.css({display:"block"}),jQuery(".fusion-page-load-link").attr("href","#"+i.attr("id")).fusion_scroll_to_anchor_target(30)))},ajaxUpdateView:function(e){jQuery.ajax({type:"POST",url:formCreatorConfig.ajaxurl,data:{action:"fusion_form_update_view",form_id:jQuery(e).data("form-id")},success:function(r){jQuery(e).find(".fusion-form").append(r)},dataType:"html"})},fileUploadChange:function(e){var r=jQuery(e),i=r.val(),o=r.attr("accept"),t=(jQuery(e).prop("files")[0].size/1024/1024).toFixed(4),n=r.data("size"),a=r.closest(".fusion-form-upload-field"),f=i.match(/\.([^\.]+)$/)[1].toLowerCase();if(a.removeClass("error"),1<jQuery(e).prop("files").length){if(i="",jQuery.each(jQuery(e).prop("files"),function(e,s){return t=(s.size/1024/1024).toFixed(4),f=s.name.match(/\.([^\.]+)$/)[1].toLowerCase(),i+=""!==i?", "+s.name.split("\\").pop():s.name.split("\\").pop(),void 0===o||o.toLowerCase().includes(f)?void 0!==n&&t>n?(a.find('input[type="text"]').val(formCreatorConfig.file_size_error+n+"MB"),a.addClass("error"),r.val(""),!1):void 0:(a.find('input[type="text"]').val(formCreatorConfig.file_ext_error+o),a.addClass("error"),r.val(""),!1)}),a.hasClass("error"))return}else{if(i=i.split("\\").pop(),void 0!==o&&!o.toLowerCase().includes(f))return a.find('input[type="text"]').val(formCreatorConfig.file_ext_error+o),a.addClass("error"),void r.val("");if(void 0!==n&&t>n)return a.find('input[type="text"]').val(formCreatorConfig.file_size_error+n+"MB"),a.addClass("error"),void r.val("")}r.closest(".fusion-form-upload-field-container").find(".fusion-form-upload-field").val(i).trigger("change")}},function(e){e(window).on("load",function(){window.fusionForms.onLoad()}),e(document).ready(function(){window.fusionForms.onReady()}),e(window).on("fusion-element-render-fusion_form",function(){window.fusionForms.startFlatpickr()})}(jQuery);