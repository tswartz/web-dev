<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset='utf-8' />
        <title>Talia Swartz - Home Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="defaultstyles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Talia Swartz</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
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
                </div>
            </nav>
        </header>

        <div class="container">
            <main>
                <div class="pad">
                    <form id="form1" runat="server">
                        <h2>CS 4550 Home Page</h2>
                        <p>My name is Talia. This is my webpage for CS 4550. Below are links to the assignments I have completed.</p>
                        <img class="headshot" src="homepage_pic.jpg" />
                        <hr />
                        <h2>Assignments</h2>
                        <ol>
                            <li>
                                <div><a href="assignments/html/studyList.html" target="_blank">HTML Assignment</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/html/studyList.html" target="_blank">Source Code</a></div>
                            </li>
                            <li>
                                <div><a href="assignments/css/profile.html" target="_blank">CSS Assignment</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/css/profile.html" target="_blank">HTML Source Code</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/css/styles.css" target="_blank">CSS Source Code</a></div>
                            </li>
                            <li>
                                <div><a href="assignments/jquery/profile.html" target="_blank">jQuery Assignment</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/jquery/profile.html" target="_blank">HTML Source Code</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/jquery/styles.css" target="_blank">CSS Source Code</a></div>
                                <div><a href="fileview/default.aspx?~/assignments/jquery/script.js" target="_blank">JS Source Code</a></div>
                            </li>
                            <li>
                                <div><a href="http://onlineuniversity-tswartz.rhcloud.com/assignments/angular/profile.html" target="_blank">Angular Assignment</a></div>
                            </li>
                        </ol>
                    </form>
                </div>
            </main>
        </div>
    </body>

</html>
