angular.module('app').controller('files', function($scope, fileUpload){

	$scope.submit = function(){
		var file = $scope.arquivo;
               
       console.log('file is ' );
       console.dir(file);
       
       var uploadUrl = "api/fileUpload.php";
       fileUpload.uploadFileToUrl(file, uploadUrl);
	}
})