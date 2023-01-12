/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
tinymce.init({
    selector: "textarea#mailedit",
    toolbar_mode: "floating",
    plugins:
      "lists advlist anchor link autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image insertdatetime link lists media nonbreaking pagebreak preview searchreplace table visualblocks wordcount",
    toolbar1:
      "undo redo styles bold italic alignleft aligncenter alignright alignjustify lineheight bullist  numlist bullist |table visualblocks visualchars wordcount ",
    toolbar2:
      " anchor link charmap code codesample ltr rtl emoticons fullscreen  image insertdatetime link nonbreaking pagebreak preview searchreplace visualchars help",
    table_toolbar:
      "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol ",
    toolbar_mode: "floating",
    visualchars_default_state: true,
    tinycomments_mode: "embedded",
    tinycomments_author: "Author name",
    autosave_ask_before_unload: false,
    allow_html_in_named_anchor: true,
    automatic_uploads: true,
    file_picker_types: "image",
    image_title: true,
    link_default_target: "_blank",
    fullscreen_native: true,
    file_picker_callback: (cb, value, meta) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
    
        input.addEventListener('change', (e) => {
          const file = e.target.files[0];
    
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            /*
              Note: Now we need to register the blob in TinyMCEs image blob
              registry. In the next release this part hopefully won't be
              necessary, as we are looking to handle it internally.
            */
            const id = 'blobid' + (new Date()).getTime();
            const blobCache =  tinymce.activeEditor.editorUpload.blobCache;
            const base64 = reader.result.split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
    
            /* call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name });
          });
          reader.readAsDataURL(file);
        });
    
        input.click();
      },
    //   a11y_advanced_options: true,
  });
