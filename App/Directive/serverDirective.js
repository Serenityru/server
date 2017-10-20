/**
 * Created by Serenity on 2017/10/19.
 */
app.directive('service',function() {
    return {
        restrict: 'EA',
        templateUrl: 'App/View/temp/_server.html',
        link:function(){
            var con = $('.swiper-container');
            var myswiper = new Swiper(con,{
                autoplay:2000,
                loop:true,
                pagination:".swiper-pagination",
                autoplayDisableOnInteraction:false,
                prevButton:".swiper-button-prev",
                nextButton:".swiper-button-next"
            })
            var iscroll = new IScroll(".main",{

            })
            var scroll = new IScroll(".commodity",{
                hScrollbar:true,
                vScroll:false,
                hideScrollbar:false
            })
        }
    }
});