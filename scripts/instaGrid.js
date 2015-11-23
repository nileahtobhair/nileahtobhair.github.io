var instaGrid = (function() {

		var options;
		var apiData;


		function init(config) {

			options = {
			'clientId' : config.clientID !== undefined ? config.clientID : null,
				'noOfPics' : config.size !== undefined ? config.size : null,
				'element' : config.element !== undefined ? config.element : null,
        'userID' :config.userID !== undefined ? config.userID : null
			};
			getPics();
		}

	 function getPics() {

    	var url = "https://api.instagram.com/v1/users/"+options.userID+"/media/recent/?client_id="+options.clientId+"&count="+options.noOfPics;
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: url,
      success: initGrid,
      error: function(xhr, ajaxOptions, thrownError) {
        console.log(xhr.status, thrownError);
      }
    });
  }

  function initGrid(data){
  	console.log(data);
  	for(var i=0;i<options.noOfPics;i++){
      console.log(options.element);
    	var grid = document.getElementById(options.element);
    	var image = document.createElement('img');
      image.id='gridImage';
    	image.src=data.data[i].images.standard_resolution.url;
    	grid.appendChild(image);
    }
  }

  return {
    'init': init
  };

  })();