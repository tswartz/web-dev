<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Talia Swartz - Home Page</title>

<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 0.5em 0;
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #08f;
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #f00;
    }

    p
    {
        text-align: justify;
    }

    li
    {
	margin-bottom: 10px;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:900px;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }

    .pad {
        padding: 10px;
    }
</style>

</head>

<body>

<div class="pad">

<form id="form1" runat="server">

<div>

<ul class="master_navigation">
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
</ul>

<hr />

<h1>Talia Swartz - CS 4550 Home Page</h1>

<p>
My name is Talia. This is my webpage for CS 4550. Below are links to the assignments I have completed.
</p>

<img src="homepage_pic.jpg" />

<hr />

<h2>Assignments</h2>

<ol>

	<li>
		<div>
			<a href="assignments/html/studyList.html" target="_blank">HTML Assignment</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/html/studyList.html" target="_blank">Source Code</a>
		</div>
	</li>
	<li>
		<div>
			<a href="assignments/css/profile.html" target="_blank">CSS Assignment</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/css/profile.html" target="_blank">HTML Source Code</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/css/styles.css" target="_blank">CSS Source Code</a>
		</div>
	</li>
	<li>
		<div>
			<a href="assignments/jquery/profile.html" target="_blank">jQuery Assignment</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/jquery/profile.html" target="_blank">HTML Source Code</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/jquery/styles.css" target="_blank">CSS Source Code</a>
		</div>
		<div>
			<a href="fileview/default.aspx?~/assignments/jquery/script.js" target="_blank">JS Source Code</a>
		</div>
	</li>

</ol>

</div>

</form>

</div>

</body>
</html>
