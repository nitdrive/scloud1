angular.module('starter.controllers', ['ngStorage'])

.controller('DashCtrl', function($scope,Feeds,$stateParams,$localStorage,$window) {
  
  $scope.usersname = $stateParams.firstName;
  $scope.chats = Feeds.all();
  $scope.remove = function(chat) {
    Feeds.remove(chat);
  };
  
  

  $scope.$storage = $localStorage;
  if($scope.$storage.refresh)
  {

	$window.location.reload(true);
	$scope.$storage.refresh = false;

  }
  var userdata = $scope.$storage.userdata;
  console.log("USERDATA:"+userdata.firstName);
  $scope.count = 1;
  $scope.contents = {personal:true,contact:false,enrollment:false,preveducation:false,testscores:false};
  var i = userdata;
 
	var degree = i.degreeExpected;
	
	console.log(degree);
	$scope.c = [];
	if(i.maddress && i.district && i.city && i.state && i.city!=null && i.district!=null)
	{
		
		$scope.contents.contact = true;
	        $scope.count++;

	}
	if(i.semesterIntended && i.majorIntended && i.degreeExpected)
	{
	
                   
                $scope.contents.enrollment = true;
		$scope.count++;
		
	}
	if(i.undergradMajor && parseFloat(i.undergradGPA)>0 && i.undergradCollege && i.undergradCollegeCity && i.lastDegreeEarned && parseInt(i.lastDegreeYear)>0 && i.undergradDuration )
	{
		
		  
                   
                   $scope.contents.preveducation = true;
		   $scope.count++;

	}
	if(degree!=null && degree.indexOf("Bachelor")>-1)
	{
		
		if(((parseInt(i.toeflScore)>0 && parseInt(i.toeflListeningScore)>0  && parseInt(i.toeflReadingScore)>0  && parseInt(i.toeflWritingScore)>0  && parseInt(i.toeflSpeakingScore)>0 ) || (parseFloat(i.iletsScore)>0  && parseFloat(i.iletsListeningScore)>0  && parseFloat(i.iletsReadingScore)>0  && parseFloat(i.iletsWritingScore)>0  && parseFloat(i.iletsSpeakingScore)>0 )) && ((parseInt(i.actScore)>0 && parseInt(i.actEnglishScore)>0 && parseInt(i.actMathScore)>0 && parseInt(i.actReadingScore)>0 && parseInt(i.actScienceScore)>0) || ( parseInt(i.satScore)>0 && parseInt(i.satCriticalReadingScore)>0 && parseInt(i.satMathScore)>0 && parseInt(i.satVerbalScore)>0)))
		{
			
		           
		           $scope.contents.testscores = true;
			   $scope.count++;

			
		}
	}
	else if(degree!=null && degree.indexOf("Master")>-1 || degree!=null && degree.indexOf("Doctor")>-1)
	{
		
		if(((parseInt(i.toeflScore)>0 && parseInt(i.toeflListeningScore)>0  && parseInt(i.toeflReadingScore)>0  && parseInt(i.toeflWritingScore)>0  && parseInt(i.toeflSpeakingScore)>0 ) || (parseFloat(i.iletsScore)>0  && parseFloat(i.iletsListeningScore)>0  && parseFloat(i.iletsReadingScore)>0  && parseFloat(i.iletsWritingScore)>0  && parseFloat(i.iletsSpeakingScore)>0 )) && ((parseInt(i.greScore)>0 && parseInt(i.greQuantScore)>0 && parseInt(i.greVerbalScore)>0 && parseFloat(i.greAWAScore)>0) || (parseInt(i.gmatScore)>0 && parseInt(i.gmatQuantScore)>0 && parseInt(i.gmatVerbalScore)>0 && parseFloat(i.gmatAWAScore)>0)))
		{
			
		           
		           $scope.contents.testscores = true;
			   $scope.count++;

			
		}

	}
  
   $scope.count = $scope.count*20;
 

  
  $scope.viewApplication = function(){
	
	
	location.href = "#/tab/profile/p1";


  }
   $scope.logout = function() {

         $scope.$storage.firstName = null;
	 $scope.$storage.middleName = null;
	 $scope.$storage.lastName = null;
	 $scope.$storage.email = null;
	 $scope.$storage.uploadflag = null;
	 $scope.$storage.userdata = null;
	 location.href =  "#/landings/login";
	 $window.location.reload(true);
  };



})

.controller('LandingCtrl', function($scope,Connect,$stateParams,$window,$timeout,$localStorage) {

	

        var first = this;
        var errors = [];
        var validationSuccess = true;
	$scope.buttonDisabled = true;
	var namePattern = /^[a-zA-Z ]{2,25}$/;
        $scope.namePattern = namePattern;
         var namePattern1 = /^[a-zA-Z0-9 ]{0,25}$/;
	 $scope.namePattern1 = namePattern1;
         
         $scope.emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
         $scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
	 $scope.phnoPattern = /^([0-9]){10,12}$/;
	 $scope.$storage = $localStorage;
	 $scope.$storage.userdata = null;
	 $scope.$storage.filemetadata = null;
	 $scope.$storage.firstName = null;
	 $scope.$storage.middleName = null;
	 $scope.$storage.lastName = null;
	 $scope.$storage.email = null;
	 $scope.$storage.uploadflag = null;
	 
	
	 $scope.user = {uname:''};
	 
	 if($stateParams.uname != null)
	 {
		
		$scope.user.uname = $stateParams.uname;

	 }
	
        
	$scope.checkUsername = function(user){
		 
		if(typeof user.uname!='undefined')
		{
			console.log("User:"+user.uname);
			Connect.checkUsername(user).success(function (response) {
				     
		
					globaldata = response;
					
		                       console.log("Response:"+globaldata[0]);
					if(typeof globaldata[0] !== 'undefined')
		                        {
					  $scope.statusmessages = true;
					  $scope.usernameFlag = true;
		                          $scope.usernameConflict = "UserName Already Exists";
		                          
		                        }
					else
		                        {
					  $scope.statusmessages = true;
					  $scope.usernameFlag = false;
					  $scope.usernameConflict = "UserName Looks Good";
					}
			
				$timeout(function() {
				  
				   $scope.statusmessages = false;		
					
                                }, 3000);
				   

		      });
		}
		
         }

         $scope.display = false;
         $scope.checkPassword = function(pass,cpass) {
                
         
                 $scope.display = false;
                 if(typeof pass!='undefined' && typeof cpass!='undefined')
                 {
                   
		         if(pass !== cpass)
		         {
		             
		             $scope.display = !$scope.display;
		             $scope.displayMessage = "Passwords Do Not Match";
		             
			     $scope.passwordFlag = true;
                             flag = true;
		         }
		         else
		         {
		             
		               //$scope.display = !$scope.display;
		              $scope.displayMessage = "Passwords Match";
			      $scope.passwordFlag = false;
		             // $scope.displayPane = {'background-color':'lightgreen'};
                              flag = false;
		         }
                 
                  return flag;
                }
                

         }

	$scope.loginUser = function(user){

		if(user.uname && !$scope.emailPattern.test(user.uname))
	        {
		
			alert("Enter a valid email");
			return;
	
	        }
		if(user.pass==null || user.pass === undefined)
	        {
		
			alert("Password Cannot Be Empty");
			return;
	
	        }
		
		Connect.login(user).success(function (response) {
				
			    
		           logindata = response;


			   $scope.$storage = $localStorage;
			   if(logindata[0])
			   {
				console.log("LOGIN CODE:"+logindata[0].firstName);
				   if(logindata[0].firstName)
				   {
				
					$scope.$storage.userdata = logindata[0]; //userdata
				        
					$scope.$storage.firstName = logindata[0].firstName;
					$scope.$storage.middleName = logindata[0].middleName;
					$scope.$storage.lastName = logindata[0].lastName;
					$scope.$storage.email = user.uname;
					location.href="#/tab/dash/"+logindata[0].firstName;
					var degree = logindata[0].degreeExpected;
		                        if(degree !== undefined && degree!=null)
					{
						if(degree.indexOf("Bachelor") > -1)
						{
							$scope.$storage.undergradflag = true;
						
						} 
						else
						{
							$scope.$storage.undergradflag = false;

						}

					}
				
				    }	
				    else
				    {

					alert("Login Failed.\n Please Check Username and Password");
					$scope.$storage.firstName = null;
					$scope.$storage.middleName = null;
					$scope.$storage.lastName = null;
					$scope.$storage.email = null;

				    }
				
			   } 
			   else
		           {

					alert("Login Failed.\n Please Check Username and Password");
					$scope.$storage.firstName = null;
					$scope.$storage.middleName = null;
					$scope.$storage.lastName = null;
					$scope.$storage.email = null;
					$scope.$storage.userdata = null;
		           }  

		      });


	}

	$scope.registerUser = function(user){


		if($scope.checkPassword(user.pass,user.cpass))
		{
				
			alert("Passwords Do Not Match");
			return;		
		
		}
	
		if($scope.usernameFlag)
	        {
		     alert("Email or Username Already Exists");
		     return;
	        }
		if(user.middleName && !namePattern1.test(user.middleName))
	        {
		
			alert("Middle Name Cannot Contain Numbers and Special Characters");
			return;
	
	        }
		if(user.lastName && !namePattern1.test(user.lastName))
		{
		
			alert("Last Name Cannot Contain Numbers and Special Characters");
			return;
	
		}
                if(!user.middleName)
                {

                    user.middleName = "None";

                }
                 if(!user.lastName)
                {

                    user.lastName = "None";

                }
		if(!user.firstName)
                {
		    alert("Firstname Cannot Be Empty");
                    return;

                }
		
		           Connect.register(user).success(function (response) {
				     
		           globaldata = response;

                           $scope.currentuser = user.uname;
			   console.log("INSERT CODE:"+globaldata);
		
			   if(globaldata == 1)
			   {
				        $scope.$storage = $localStorage;
					$scope.$storage.firstName = user.firstName;
					$scope.$storage.middleName = user.middleName;
					$scope.$storage.lastName = user.lastName;
					$scope.$storage.email = user.uname;
					console.log("In Return:"+user.uname);
				        location.href="#/landings/registersuccess";
				
				
			    }	
			    else{

				
				    console.log("Could Not Register");
				    alert("Error could not register user.\n Try Again");
				


			   }
				
				   

		      });		
		
		
	


	}

	
	

	
    



})

.controller('UploadCtrl', function($scope,$localStorage,Connect,$window) {

       $scope.user = {appMaterial:'none'};
       $scope.$storage = $localStorage;
	
       var uname =  $scope.$storage.email;
       Connect.getUploads(uname).success(function(response){
		
		 var uploadedfiles = [];
		 var urls = [];
		 var p = response[0];
		 $scope.url  = p;
		 $scope.extracount = p['extracounter'];
		 console.log("E count:"+$scope.extracount);
		 for (var key in p) {
		  if (p.hasOwnProperty(key)) {
		       if(p[key]){
			uploadedfiles.push(key);
			
			}
		  }
                }
		var uploads = [];
		var l = uploadedfiles.length;
		if(p['extracounter']>0)
		{
			for(var i=0;i<l;i++)
			{
			      if(i>0 && i<(l - 2))
				  uploads.push(uploadedfiles[i]);
			}
		}
		else
		{

			for(var i=0;i<l;i++)
			{
			      if(i>0 && i<(l - 1))
				  uploads.push(uploadedfiles[i]);
			}


		}
		$scope.uploadedfiles = uploads;


       });
       var filecount = 1;
       
       $scope.uploadFile = function(upload){
	
      
       console.log("Material to upload:"+$scope.user.appMaterial);
	
       
       
       console.log(upload);
	
	var files = upload.files;
	var file = files[0];
	
	
	var material = $scope.user.appMaterial;
	
	console.log(file);
	if(file == null)
	{
		
		console.log("File not selected or valid");
		alert("File not selected or valid");
		return;
	
	}
	else{
               // alert("File Uploaded\n"+"File Name: "+file.name+" \nFile type: "+file.type);
		//console.log("File Name: "+file.name+" File type: "+file.type);
		


	}

	
        
	material = material.replace(/ /g, '_');
	console.log("Index:"+material.indexOf("SEM1"));
	console.log("Material to Upload:"+material);
	var fileNameParts = file.name;
	fileNameParts = fileNameParts.split('.');
	var contents = "";
	if(material.indexOf("GRE")>-1)
	{
	
		contents = "grefile";


	}
	else if(material.indexOf("TOEFL")>-1)
	{

		contents = "toeflfile";

	}
	else if(material.indexOf("ILETS")>-1)
	{

		contents = "iletsfile";

	}
	else if(material.indexOf("GMAT")>-1)
	{

		contents = "gmatfile";

	}
	else if(material.indexOf("SAT")>-1)
	{

		contents = "satfile";

	}
	else if(material.indexOf("ACT")>-1)
	{

		contents = "actfile";

	}

	else if(material.indexOf("SEM1")>-1)
	{

		contents = "sem1file";

	}
	else if(material.indexOf("SEM2")>-1)
	{

		contents = "sem2file";

	}
	else if(material.indexOf("SEM3")>-1)
	{

		contents = "sem3file";

	}
	else if(material.indexOf("SEM4")>-1)
	{

		contents = "sem4file";

	}
	else if(material.indexOf("SEM5")>-1)
	{

		contents = "sem5file";

	}
	else if(material.indexOf("SEM6")>-1)
	{

		contents = "sem6file";

	}
	else if(material.indexOf("SEM7")>-1)
	{

		contents = "sem7file";

	}
	else if(material.indexOf("SEM8")>-1)
	{

		contents = "sem8file";

	}
	else if(material.indexOf("Cumulative")>-1)
	{

		contents = "cmm";

	}
	else if(material.indexOf("SOP")>-1)
	{

		contents = "sop";

	}
	else if(material.indexOf("Extra")>-1)
	{
		
		if($scope.extracount<5)
		{
		   $scope.forextralimit = false;
		   $scope.extracount = $scope.extracount + 1;
		   contents = "extra"+$scope.extracount;
		   
		  // alert("E file:"+$scope.extracount);
		   filecount ++;
		   
		}
		else
		{
			alert("Max files upload limit reached!");
			$scope.forextralimit = true;
			return;
		
		}

	}
	
	
	
	if($scope.user.extraname)
	{
		
		material = $scope.user.extraname;
		material = material.replace(/ /g, '_');
	
	}
	
	Connect.getSignedURL(uname,file.type,material,fileNameParts,contents).success(function (response){
	
		
		rdata = response;
		console.log(response.signed_request);
		var signed_request = response.signed_request;
		var url = response.url;
	    
                console.log("URL:"+url);
		     document.getElementById("file_url").innerHTML = 'Please wait Uploading....';  
                    var xhr = new XMLHttpRequest();
		    xhr.open("PUT", signed_request);
		    xhr.setRequestHeader('x-amz-acl', 'public-read');
		    xhr.onload = function() {
			if (xhr.status === 200) {
				
			   
			   
			    document.getElementById("file_url").innerHTML = 'File Uploaded';   
			    var filemetadata = {};   
			    filemetadata.fileurl = url;
			    filemetadata.uploadedby = uname;
			    filemetadata.filetype = contents;
			    filemetadata.extracount = $scope.extracount;
			    $scope.$storage.filemetadata = filemetadata; 
			    
			    //$scope.uploadedFlag = true;
			    
			}
		    };
		    xhr.onerror = function() {
			alert("Could not upload file."); 
		    };
		    xhr.send(file);
		  
	        $scope.buttonReady = true;
		
         });  


	$scope.showLink = function(){

		

		
		window.open ($scope.$storage.filemetadata.fileurl, '_system', 'location=yes');
		/*ref.addEventListener('exit', myexitcallback);
		function myexitcallback(){
			alert("Exited");
   			ref.close();
		}
		*/



	}

	
	
   

   }

   $scope.showFile = function(file){
		
		
		console.log($scope.url[file]);

		
		window.open ($scope.url[file], '_blank', 'location=yes');
		


	}

	

   $scope.saveFilesToDB = function(upload) {


	//alert($scope.$storage.filemetadata.fileurl+"\n"+$scope.$storage.filemetadata.uploadedby+"\n"+$scope.$storage.filemetadata.filetype);
	var filemetadata = $scope.$storage.filemetadata;
	if($scope.forextralimit)
	{
		alert("No file uploaded");
		return;
	
	}
	if(filemetadata!=null)
	{
		
		Connect.registerUploads(filemetadata).success(function(response){


			   uploadeddata = response;

                          
		
			   if(uploadeddata == 1)
			   {
				        
				 alert("Uploaded File is Now Saved");
				 
                                 $window.location.reload(true);
				 $scope.$storage.refresh = true;
				
			    }	
                          
     



		});


	}
	else
	{

		alert("Please upload file before saving");

	}

   }


     $scope.logout = function() {

         $scope.$storage.firstName = null;
	 $scope.$storage.middleName = null;
	 $scope.$storage.lastName = null;
	 $scope.$storage.email = null;
	 $scope.$storage.uploadflag = null;
	 $scope.$storage.userdata = null;
	 location.href =  "#/landings/login";
	 $window.location.reload(true);
  };

	
	








})

.controller('ChatsCtrl', function($scope, Connect,$localStorage,$window,$ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {

  //});
         $scope.buttonDisabled = false;
         var namePattern = /^[a-zA-Z ]{2,25}$/;
	 var namePattern1 = /^[a-zA-Z0-9 ]{0,25}$/;
	 $scope.namePattern1 = namePattern1;
         $scope.namePattern = namePattern;
         $scope.emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
         $scope.passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
	 $scope.phnoPattern = /^([0-9]){10,12}$/;
         $scope.personaldetails = true;
        var first = this;
	$scope.user = {firstName:'NONE',middleName:'NONE',lastName:'NONE'};
        $scope.$storage = $localStorage;
	$scope.undergrad = $scope.$storage.undergradflag;
	console.log("Fname:"+$scope.$storage.firstName);
	//$scope.user.firstName = $scope.$storage.firstName;
	//$scope.user.middleName = $scope.$storage.middleName;
	//$scope.user.lastName = $scope.$storage.lastName;
	$scope.uname = $scope.$storage.email;

	$scope.user = $scope.$storage.userdata; //userdata
       
	$scope.degreeCheck = function(user) {

		
		var degree = user.degreeExpected;
		
		if(degree.indexOf("Bachelor") > -1)
		{

			$scope.undergrad = true;
		} 
		else
		{
			$scope.undergrad = false;

		}
		

	}
	$scope.saveandContinue = function(user){

           var contents = {personal:true,contact:false,enrollment:false,preveducation:false,testscores:false};
		
	   

		if($scope.personaldetails){

		$scope.$storage.firstName  = $scope.user.firstName;
		$scope.$storage.middleName = $scope.user.middleName;
	        $scope.$storage.lastName = $scope.user.lastName;

		$scope.personaldetails = false;
		$scope.contactdetails = true;
		
		
			  
                }
		
		
		else if($scope.contactdetails){
		
		
		
		

		 $scope.enrollmentdetails = true;
		 $scope.contactdetails = false;
		
		
		

		}
		else if($scope.enrollmentdetails){
		
		

		$scope.enrollmentdetails = false;
		$scope.educationdetails = true;

		
		

		}
		else if($scope.educationdetails){
                
			$scope.educationdetails = false;
			$scope.testscores = true;
		

		}
		else if($scope.testscores){

		$scope.testscores = false;
		$scope.policy = true;
		

		}
                
		
	}
	
	$scope.checkValidations = function(user)
	{
		errors = [];
		validationSuccess = true;
		$scope.buttonDisabled  = !validationSuccess;
		
		if(user.isOldPattern)
		{
			
			
			if(parseInt(user.greScore) < 400 || parseInt(user.greScore) > 1600)
			{
				
				var error = "GRE Total Score should be greater than 400 and less than or equal to 1600";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
		        }

			if(parseInt(user.greQuantScore) < 200 || parseInt(user.greQuantScore) > 800 )
			{
				var error = "GRE Quant Score should be greater than 200 and less than or equal to 800";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
			}
			if(parseInt(user.greVerbalScore) < 200 || parseInt(user.greVerbalScore) > 800 )

			{
				var error = "GRE Verbal Score should be greater than 200 and less than or equal to 800";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
			}
			

		}
		else
		{
		
			if(parseInt(user.greScore) < 260 || parseInt(user.greScore) > 340)
			{
			
				var error = "GRE Total Score should be greater than 260 and less than or equal to  340";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
			}
			if((parseInt(user.greQuantScore) < 130 || parseInt(user.greQuantScore) > 170) )
			{
				var error = "GRE Quant Score should be greater than 130 and less than or equal to 170";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
			}
			if((parseInt(user.greVerbalScore) < 130 || parseInt(user.greVerbalScore) > 170) )

			{
				var error = "GRE Verbal Score should be greater than 130 and less than or equal to 170";
				errors.push(error);
				validationSuccess = false;
				$scope.buttonDisabled = !validationSuccess;
			
			}

		}
		if(parseInt(user.greAWAScore) < 1 || parseInt(user.greAWAScore) > 6)
		{
			var error = "GRE AWA Score should be greater than 1 and less than or equal to 6";
			errors.push(error);
			validationSuccess = false;
			$scope.buttonDisabled = !validationSuccess;
			
		}
		if(parseInt(user.toeflScore) < 80 || parseInt(user.toeflScore) > 120)
		{
			var error = "TOEFL Total Score should be greater than 80 and less than  or equal to 120";
			errors.push(error);
			validationSuccess = false;
			$scope.buttonDisabled = !validationSuccess;
			
		}	
		
		$scope.errorList = errors;	

	}

	$scope.finishandUpdate = function(user){
 	
	if(user.middleName && !namePattern1.test(user.middleName))
	{
		
		alert("Middle Name Cannot Contain Numbers and Special Characters");
		return;
	
	}
	if(user.lastName && !namePattern1.test(user.lastName))
	{
		

		alert("Last Name Cannot Contain Numbers and Special Characters");
		return;
	
	}
	if(!user.firstName)
	{
		
		alert("First Name Cannot Be Empty");
		return;

	}
	if(!user.middleName )
	{

		user.middleName = "None";

	}
	else if(!user.lastName)
	{

		user.lastName = "None";
	}
	
	
	Connect.update(user).success(function (response) {

		
		if(response == 1)
		{
			
			$scope.$storage.userdata = user;
			var degree = user.degreeExpected;
		
			if(degree.indexOf("Bachelor") > -1)
			{

				$scope.undergrad = true;
			} 
			else
			{
				$scope.undergrad = false;

			}
			alert("Update Successful");
			$window.location.reload(true);
		
		}
		else{

		 alert("Could Not Update\nPlease try again!");

		}

	});

	}

	
	
  $scope.chats = Connect.all();
  $scope.remove = function(chat) {
    Connect.remove(chat);
  };

    $scope.logout = function() {

         $scope.$storage.firstName = null;
	 $scope.$storage.middleName = null;
	 $scope.$storage.lastName = null;
	 $scope.$storage.email = null;
	 $scope.$storage.uploadflag = null;
	 $scope.$storage.userdata = null;
	 location.href =  "#/landings/login";
	 $window.location.reload(true);
  };


   var myPopup;
   $scope.showPopup = function(user) {
   

   // An elaborate, custom popup
   myPopup = $ionicPopup.show({
     templateUrl: 'templates/popupConfirmation.html',
     title: 'Confirmation',
     subTitle: 'You are about to update',
     scope: $scope,
     buttons: [
       { text: 'Cancel' }]
       
   });
   
   
   /*myPopup.then(function(res) {
     console.log('Tapped!', res);
     
     
   });*/
   /*$scope.popup = myPopup;*/
  /* $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 5000);*/
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Connect) {
  $scope.chat = Connect.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$localStorage,$window) {

  $scope.$storage = $localStorage;
  $scope.settings = {
    enableOptions: true
  };
   $scope.logout = function() {

         $scope.$storage.firstName = null;
	 $scope.$storage.middleName = null;
	 $scope.$storage.lastName = null;
	 $scope.$storage.email = null;
	 $scope.$storage.uploadflag = null;
	 $scope.$storage.userdata = null;
	 location.href =  "#/landings/login";
	 $window.location.reload(true);
  };


});
