export class NavbarController {
  constructor ($location) {
      this.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
      }
  }

 NavbarController.$inject = ['$location']