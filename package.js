Package.describe({
    summary: "JQuery cookie plugin"
});

Package.on_use(function(api) {
    api.use('jquery', ['client']);

    api.add_files('jquery-cookie/jquery.cookie.js', ['client']);
});

