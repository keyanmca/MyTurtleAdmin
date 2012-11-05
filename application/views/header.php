<!doctype html>
<html lang="en">

	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Your FlatTurtle</title>
		
		<!-- For iPhone 4 -->
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://www.flatturtle.com/themes/site/img/apple-touch-icon-114.png">
		<!-- For iPad 1-->
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://www.flatturtle.com/themes/site/img/apple-touch-icon-72.png">
		<!-- For everything else -->
		<link rel="shortcut icon" href="https://www.flatturtle.com/themes/site/img/favicon.ico">

		<link rel="stylesheet" href="<?= base_url(); ?>assets/css/style.css" type="text/css" media="screen" />
		<!--[if lte IE 8]><link rel="stylesheet" href="<?= base_url(); ?>assets/css/ie7-font-awesome.css" type="text/css" media="screen" /><![endif]-->
		
		<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<script type="text/javascript">
			if (typeof jQuery == 'undefined'){
				document.write(unescape("%3Cscript src='<?= base_url(); ?>assets/js/jquery-min.js' type='text/javascript'%3E%3C/script%3E"));
			}
		</script>
	</head>
	<body>
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="span8">
						<header role="banner">
							<hgroup>
								<h1><img src="<?= base_url(); ?>assets/img/logo_320_2x.gif" alt="FlatTurtle" /></h1>
							</hgroup>
						</header>
					</div>
					<div class="span4">
						<? if ($this->session->userdata('logged_in')) { ?>
							<nav role="navigation">
								<h4>
									<i class='icon-user'></i>&nbsp;&nbsp;Hi, <?= $this->session->userdata('username') ?>!
								</h4>
								<a href="<?= site_url('/logout') ?>" alt="Log out" class="btn btn-small">
									Log out
								</a>
							</nav>
						<? } ?>
					</div>
				</div>
			</div>
			<div class="grey_wrapper">
				<div class="container">