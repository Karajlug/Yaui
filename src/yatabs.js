/* -----------------------------------------------------------------------------
    YaTabs - Yet Another jquery tabs plugin
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

    function change_tab(tabname) {
	tabs.removeClass(settings.active_class);
	tabs.find('a[href="#' + tabname + '"]').parent("li." + settings.tab_class).addClass(settings.active_class);
	settings.before_change();
	containers.hide();
	document.dd = containers;
	containers.filter("#" + tabname).fadeIn(settings.fadespeed);
	settings.after_change();
    }

    // Global settings object
    var settings;
    var $this;
    var containers, tabs;

    // YaTabs methods
    var methods = {
	init : function( options ) { 
	    
	    settings = $.extend({
		'active_class': 'active',
		'container_class': "tabcontainer",
		'tab_class': "tab",
		'fadespeed': 'slow',
		'before_change': function(){},
		'after_change': function(){}
	    }, options);
	    
	    containers = $this.find("." + settings.container_class);
	    tabs = $this.find("." + settings.tab_class);
	    containers.hide();

	    var hash = new String(location.hash).replace("#", "");
	    
	    if (hash !== "") {
		change_tab(hash);

	    }
	    else {
		var count = tabs.has("." + settings.active_class).size();

		if ((count == 0) || (count === undefined)) {
		    var first_tab = tabs.first();
		    first_tab.addClass(settings.active_class);
		    var tabname = new String(first_tab.find("a").attr("href")).replace("#", "");
		    change_tab(tabname);

		}
		else {
		    var active_tab = tabs.has("." + settings.active_class).first();
		    change_tab(new String(actove_tab.find("a").attr("href")).replace("#", ""));

		}
	    }

	    function on_hashchange(){
		change_tab(new String(location.hash).replace("#", ""));
	    }
	    
	    window.onhashchange = on_hashchange;
	    
	    return this;

	},
	changetab: function(tabname) {
	    changee_tab(tabname);
	}
      
  };

  $.fn.yatabs = function(method) {

      $this = this;
      if (methods[method]) {
	  return methods[method].apply(this,
				       Array.prototype.slice.call(arguments, 1));
	  
      }
      else if (typeof method === 'object' || ! method) {
	  return methods.init.apply(this, arguments);
	  
      }
      else {
	  $.error('Method ' +  method + ' does not exist on jQuery.yatabs');
      }
      return this;
  };

})(jQuery);
