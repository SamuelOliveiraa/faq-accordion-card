$(document).ready(function() {
    $('.card1').click(function(){
        var tit1 = document.querySelector('.tit1')
        tit1.style.fontWeight = '700'
        $('.par1').toggle()
    });

    $('.card2').click(function() {
        $('.par2').toggle()
        var tit2 = document.querySelector('.tit2')
        tit2.style.fontWeight = '700'
    });

    $('.card3').click(function() {
        $('.par3').toggle()
        var tit3 = document.querySelector('.tit3')
        tit3.style.fontWeight = '700'
    });

    $('.card4').click(function() {
        $('.par4').toggle()
        var tit4 = document.querySelector('.tit4')
        tit4.style.fontWeight = '700'
    });

    $('.card5').click(function() {
        $('.par5').toggle()
        var tit5 = document.querySelector('.tit5')
        tit5.style.fontWeight = '700'
    })
});