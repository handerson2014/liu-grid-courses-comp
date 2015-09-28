/*
 * angular-dragon-drop v0.0.1
 * (c) 2015 handerson.contreras@gmail.com
 * License: MIT
 */

'use strict';

angular.module('liu-onecampus-grid-courses', []).
    directive('btfDragon', function ($document, $compile, $rootScope) {
        var dragValue,
          dragKey,
          dragOrigin,
          dragDuplicate = false,
          floaty,
          offsetX,
          offsetY;

        var drag = function (ev) {
          var x = ev.clientX - offsetX,
            y = ev.clientY - offsetY;

          floaty.css('left', x + 'px');
          floaty.css('top', y + 'px');
        };

    return {
      restrict: 'A',
    };
});
