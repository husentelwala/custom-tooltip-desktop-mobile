/*************************/
/***** AUTHOR : EMP0699 
/***** DATE : 22-09-2014
/***** VERSION 2 : 09-10-2014
/*************************/
$(document).ready(function(){
	
	$cust_tooltip=$('.custom-tooltip');
	$cust_tooltip.wrap('<div class="custom-tooltip-parent"></div>');
	var $defaultClass = 'custom-tooltip-parent';
	$customTooltipParent = $('.custom-tooltip-parent');
	$customTooltipParent.each(function(){
		$(this).append('<p class="custom-tooltip-msg"></p>');
		$(this).find('.custom-tooltip-msg').text($(this).find($cust_tooltip).attr('title'));
	});
	condtionalTooltipAlignment();	
	function condtionalTooltipAlignment() {
		$windowwidth=$(window).width();
		$customTooltipParent.each(function(){		
			$vertical_space_ttip_content=6;
			$horizontal_space_ttip_content=10;
			$a_element_height_tooltip=$(this).find('.custom-tooltip').outerHeight();
			$a_element_width_tooltip=$(this).find('.custom-tooltip').outerWidth();
			$p_element_height_tooltip=$(this).find('.custom-tooltip-msg').outerHeight();
			$p_element_width_tooltip=$(this).find('.custom-tooltip-msg').outerWidth();
			$data_placement_tooltip= $(this).find($cust_tooltip).attr('data-placement');
			if($data_placement_tooltip==='top')
			{
				fn_tooltip_top(this);
			}
			else if($data_placement_tooltip==='bottom')
			{
				fn_tooltip_bottom(this);
			}
			else if($data_placement_tooltip==='left')
			{
				fn_tooltip_left(this);
			}
			else if($data_placement_tooltip==='right')
			{
				fn_tooltip_right(this);
			}
			else if($data_placement_tooltip==='right-desktop-left-mobile')
			{
				if($windowwidth>768) { fn_tooltip_left(this); } else { fn_tooltip_right(this); }
			}		
			else if($data_placement_tooltip==='left-desktop-right-mobile')
			{
				if($windowwidth>768) { fn_tooltip_right(this); } else { fn_tooltip_left(this); }
			}
			else if($data_placement_tooltip==='right-desktop-top-mobile')
			{
				if($windowwidth>768) { fn_tooltip_left(this); } else { fn_tooltip_top(this); }
			}		
			else if($data_placement_tooltip==='left-desktop-top-mobile')
			{
				if($windowwidth>768) { fn_tooltip_right(this); } else { fn_tooltip_top(this); }
			}
			else if($data_placement_tooltip==='right-desktop-bottom-mobile')
			{
				if($windowwidth>768) { fn_tooltip_left(this); } else { fn_tooltip_bottom(this); }
			}		
			else if($data_placement_tooltip==='left-desktop-bottom-mobile')
			{
				if($windowwidth>768) { fn_tooltip_right(this); } else { fn_tooltip_bottom(this); }
			}
			$(this).find('p').css({
				top : $p_top_position_tooltip,
				left : $p_left_position_tooltip
			});
		});
	}	
	function fn_tooltip_top(obj)
	{
		$(obj).attr('class',$defaultClass+ ' top');
		$p_top_position_tooltip=-($p_element_height_tooltip+$vertical_space_ttip_content);
		$p_left_position_tooltip=-(($p_element_width_tooltip-$a_element_width_tooltip)/2);	
	}
	function fn_tooltip_bottom(obj)
	{
		$(obj).attr('class',$defaultClass+' bottom');
		$p_top_position_tooltip=($a_element_height_tooltip+$vertical_space_ttip_content);
		$p_left_position_tooltip=-(($p_element_width_tooltip-$a_element_width_tooltip)/2);		
	}
	function fn_tooltip_left(obj)
	{
		$(obj).attr('class',$defaultClass+' left');	
		$p_top_position_tooltip=-(($p_element_height_tooltip-$a_element_height_tooltip)/2);
		$p_left_position_tooltip=($a_element_width_tooltip + $horizontal_space_ttip_content);
	}
	function fn_tooltip_right(obj)
	{
		$(obj).attr('class',$defaultClass+' right');	
		$p_top_position_tooltip=-(($p_element_height_tooltip-$a_element_height_tooltip)/2);
		$p_left_position_tooltip=-($p_element_width_tooltip + $horizontal_space_ttip_content);
	}
	
	/*
	 * WINDOW WIDTH RESIZE EVENT HANDLER ***********************/
	function checkWindowWidth(callback){
		var lastHeight = $(window).width(), newHeight, timer;
		(function run(){
			newHeight = $(window).width();
			if( lastHeight != newHeight )
				callback();
			lastHeight = newHeight;
			timer = setTimeout(run, 200);	
			console.log(1);
		})();
	}
	
	function windowWidthChanged(){
	  condtionalTooltipAlignment();
	}
	checkWindowWidth(windowWidthChanged);
	/* ENDED ***********************/
});
