<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

    <head>
        <meta charset='utf-8' />
        <title>Talia Swartz - Home Page</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="defaultstyles.css">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Lobster+Two" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
        <script src="javascript/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.js"></script>
        <script src="defaultcontroller.js"></script>
        <script src="pages/assignments.js"></script>
    </head>

    <body ng-app="DefaultApp">
        <header>
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#/home">Talia Swartz</a>
                </div>
                <div id="top-navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#/home">Home</a></li>
                        <li><a href="#/assignments">Assignments</a></li>
                        <li><a href="#/project">Project</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a id="drop1" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                                Required Links
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
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
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <div class="container">
            <main>
                <div class="pad">
                    <form id="form1" runat="server">
                        <div ng-view></div>
                    </form>
                </div>
            </main>
        </div>
    </body>

</html>
