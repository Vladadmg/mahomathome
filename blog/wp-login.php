<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="de-DE">
<head>
	<title>mahom@home &rsaquo; Anmelden</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel='stylesheet' href='http://www.mahomathome.de/blog/wp-admin/css/login.css?ver=20081210' type='text/css' media='all' />
<link rel='stylesheet' href='http://www.mahomathome.de/blog/wp-admin/css/colors-fresh.css?ver=20081210' type='text/css' media='all' />
</head>
<body class="login">

<div id="login"><h1><a href="http://wordpress.org/" title="Powered by WordPress">mahom@home</a></h1>

<form name="loginform" id="loginform" action="http://www.mahomathome.de/blog/wp-login.php" method="post">
	<p>
		<label>Benutzername<br />
		<input type="text" name="log" id="user_login" class="input" value="" size="20" tabindex="10" /></label>
	</p>
	<p>
		<label>Passwort<br />
		<input type="password" name="pwd" id="user_pass" class="input" value="" size="20" tabindex="20" /></label>
	</p>
	<p class="forgetmenot"><label><input name="rememberme" type="checkbox" id="rememberme" value="forever" tabindex="90" /> Erinnere dich an mich</label></p>
	<p class="submit">
		<input type="submit" name="wp-submit" id="wp-submit" value="Anmelden" tabindex="100" />
		<input type="hidden" name="redirect_to" value="http://www.mahomathome.de/blog/wp-admin/" />
		<input type="hidden" name="testcookie" value="1" />
	</p>
</form>

<p id="nav">
<a href="http://www.mahomathome.de/blog/wp-login.php?action=lostpassword" title="Passwort-Fundb&uuml;ro">Passwort vergessen?</a>
</p>

</div>

<p id="backtoblog"><a href="http://www.mahomathome.de/blog/" title="Verlaufen?">&larr; Back to mahom@home</a></p>

<script type="text/javascript">
try{document.getElementById('user_login').focus();}catch(e){}
</script>
</body>
</html>
