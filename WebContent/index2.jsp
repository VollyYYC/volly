<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<jsp:include page="includes/header.jsp" />
<script src="js/index.js"></script>
</head>
<body>
	<div id="main-wrapper">
		<div id="heading-wrapper">
			<div id="logo-wrapper">
				<img id='logo-main' src='img/logo-main.png' />
			</div>
			<div id="bag-wrapper"></div>
			<div class="heading">These charities need your help:</div>
		</div>
		<div id="carousel-wrapper">
		</div>
	</div>
	<script type="text/javascript" src="js/app.out.js"></script>
	<script type="text/javascript">
		var scrolling = false;
		$("#scrollRight").bind("mouseover", function(event) {
			scrolling = true;
			scrollContent("right");
		}).bind("mouseout", function(event) {
			scrolling = false;
		});

		$("#scrollLeft").bind("mouseover", function(event) {
			scrolling = true;
			scrollContent("left");
		}).bind("mouseout", function(event) {
			scrolling = false;
		});

		function scrollContent(direction) {
			var amount = (direction === "right" ? "+=3px" : "-=3px");
			$("#carousel-wrapper").animate({
				scrollLeft : amount
			}, 1, function() {
				if (scrolling) {
					scrollContent(direction);
				}
			});
		}
	</script>
</body>
</html>