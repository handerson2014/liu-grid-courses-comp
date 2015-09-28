/*
 * angular-dragon-drop v0.0.1
 * (c) 2015 handerson.contreras@gmail.com
 * License: MIT
 */

'use strict';

angular.module('liu-onecampus-grid-courses', [])
    .controller('MainCtrl', ['$scope', '__Courses', function($scope, __Courses){
        /*$scope.courses = __Courses.getBySchool(1, 2, 46);
        console.log($scope.courses); */

        var service = __Courses.getBySchool(1, 2, 46);
        service.then(function(response){
            console.log(response.data.Courses);
            $scope.courses = response.data.Courses;
        }, function(response){
            //here put your errors handler
        });
    }])
    .directive('gridCourses', function() {
        return {
            templateUrl: 'grid.html',
        };
    })
    .service('__Courses', ['$http', function($http){
        var services = {
            getBySchool: function(school_id, language_id, institution_id){
                var config = {
                    'method': 'GET',
                    'url': 'http://190.4.22.235/laureate/api/sections/GetCoursesBySchool?schoolid=' + school_id + '&languageid=' + language_id + '&institutionid=' + institution_id,
                    headers: {
                      'Content-Type': 'application/json; charset=UTF-8'
                    }
                };                                
                return $http(config);                
            }
        }
        return services;
    }]);