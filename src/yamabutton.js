/* -----------------------------------------------------------------------------
 YaMaButton - Yet Another jquery action button plugin
 Copyright (C) 2012-2013 Sameer Rahmani <lxsameer@gnu.org>

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 ----------------------------------------------------------------------------- */

(function($){


    // Global settings object
    var settings;
    var $this;
    var items;
    var menu;
    var button;

    // methods
    var methods = {
	init : function(options) { 
	    
	    settings = $.extend({
		'title_class': "btntitle",
		'before_change': function(){},
		'after_change': function(){}
	    }, options);

	    menu = $this.find("ul").first();
	    items = menu.find("li");
	    button = $this.find("." + settings.title_class);
	    menu.hide();

	    $this.on("click", clicked);

	},
	changetab: function(tabname) {
	    changee_tab(tabname);
	}
	
    };

    function clicked() {
	if (button.hasClass("pressed")) {
	    button.removeClass("pressed");
	}
	else {
	    button.addClass("pressed");
	}
	menu.slideToggle('slow');
    }
    
    $.fn.yamabutton = function(method) {

	$this = this;
	if (methods[method]) {
	    return methods[method].apply(this,
					 Array.prototype.slice.call(arguments, 1));
	    
	}
	else if (typeof method === 'object' || ! method) {
	    return methods.init.apply(arguments);
	    
	}
	else {
	    $.error('Method ' +  method + ' does not exist on jQuery.yamabutton');
	}
	return this;
    };

})(jQuery);
