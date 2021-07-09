$(document).ready(function() {
    new WOW().init();

    $('.skill-per').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 1000,
            step: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function() {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });
    $('.circle1').circleProgress({
        value: 0.95,
        size: 120,
        fill: {
            gradient: ["red", "orangered"]
        }
    });
    $('.circle2').circleProgress({
        value: 0.90,
        size: 120,
        fill: {
            gradient: ["cyan", "deepskyblue"]
        }
    });
    $('.circle3').circleProgress({
        value: 0.85,
        size: 120,
        fill: {
            gradient: ["darkmagenta", "darkorchid"]
        }
    });
    $('.circle4').circleProgress({
        value: 0.70,
        size: 120,
        fill: {
            gradient: ["gray", "gainsboro"]
        }
    });
    $('.circle5').circleProgress({
        value: 0.45,
        size: 120,
        fill: {
            gradient: ["yellow", "gold"]
        }
    });
    $('.circle6').circleProgress({
        value: 0.75,
        size: 120,
        fill: {
            gradient: ["royalblue", "steelblue"]
        }
    });
    var typed = new Typed('#animation', {
        strings: ['DEVELOPER', 'DESIGNER', 'FREELANCER'],
        smartBackspace: true,
        typeSpeed: 120,
        backSpeed: 60,
        loop: true,
    });
});