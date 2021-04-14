module.exports = {

  
    "src_folders" : ["tests"],
    "page_objects_path" : ['page-objects'],
    "output_folder": "/Reports/HTML-Reports/",
    screenshots: {
      enabled: true,
      path: "./Reports/Faild-screenshots/",
      on_failure: true,
      on_error: true
  },


    "webdriver" : {
      "start_process": true,
      "server_path": require('chromedriver').path,
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      },


      firefox: {
        desiredCapabilities: {
            browserName: 'firefox'
        },
        webdriver: {
            start_process: true,
            port: 4446,
            server_path: require('geckodriver').path
        }
    }

  }
  

}