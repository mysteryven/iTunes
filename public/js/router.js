{
    selectTab()

    $('.container').find('#switchTab > li > a').on('click', (e) => {
        e.preventDefault()

        location.hash = e.currentTarget.getAttribute('href') + '-n'
        selectTab()
    })    

    function selectTab() {
        let str = location.hash
        console.log(str.substring(2, str.length-2))
        let currentTab = str.substring(2, str.length-2) || 'my'
        console.log(currentTab)
        $('.container').find('#' + currentTab).addClass('active').siblings('.active').removeClass('active')
        
        let index = $('#' + currentTab).index()
        $('#pages').css({
            'transform': `translateX(${-index*390}px)`
        })

        let isPlaying = str.charAt(str.length - 1) === 'y' ? true : false
        if (isPlaying) {
            $('#player').addClass('active')
        } else {
            $('#player').removeClass('active')
        }
    }
}