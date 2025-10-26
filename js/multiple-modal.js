//(function($,window){'use strict';var MultiModal=function(element){this.$element=$(element);this.modalCount=0};MultiModal.BASE_ZINDEX=1050;MultiModal.prototype.show=function(target){var that=this;var $target=$(target);var modalIndex=that.modalCount++;$target.css('z-index',MultiModal.BASE_ZINDEX+(modalIndex*20)+10);window.setTimeout(function(){if(modalIndex>0)
//$('.modal-backdrop').not(':first').addClass('hidden');that.adjustBackdrop()})};MultiModal.prototype.hidden=function(target){this.modalCount--;if(this.modalCount){this.adjustBackdrop();$('body').addClass('modal-open')}};MultiModal.prototype.adjustBackdrop=function(){var modalIndex=this.modalCount-1;$('.modal-backdrop:first').css('z-index',MultiModal.BASE_ZINDEX+(modalIndex*20))};function Plugin(method,target){return this.each(function(){var $this=$(this);var data=$this.data('multi-modal-plugin');if(!data)
//$this.data('multi-modal-plugin',(data=new MultiModal(this)));if(method)
//data[method](target);})}
//$.fn.multiModal=Plugin;$.fn.multiModal.Constructor=MultiModal;$(document).on('show.bs.modal',function(e){$(document).multiModal('show',e.target)});$(document).on('hidden.bs.modal',function(e){$(document).multiModal('hidden',e.target)})}(jQuery,window));


// ഇൻപുട്ട് ഫീൽഡിൽ നിന്ന് മൂല്യം എടുക്കുന്നു
var input_value = $('#input_field_id').val();

// 1. "₹" ചിഹ്നം, കോമകൾ, അക്ഷരങ്ങൾ എന്നിവ ഒഴിവാക്കുന്നു.
// 2. മൂല്യത്തെ ഒരു സംഖ്യയായി (Floating-Point Number) മാറ്റുന്നു.
var amount = parseFloat(input_value.replace(/[^0-9.]/g, ''));

// 3. ഇപ്പോൾ ഗുണനം നടത്താം
var total = amount * 10; // 10-ന് പകരം നിങ്ങൾ ഗുണിക്കാൻ ഉദ്ദേശിക്കുന്ന സംഖ്യ നൽകുക.