const main = () => {

  const self = $.nChorizada = new function () {
  };

  $.extend(self, {
    nChorizadaImgs: [
      'https://i.ytimg.com/vi/gZ0W3BNeNgg/hqdefault.jpg'
    ],
    handleImages: (lstImgs, time) => {
      $.each($('img'), (i, item) => {
        //Skip if image is already replaced
        if ($.inArray($(item).attr('src'), lstImgs) === -1) {
          const h = $(item).height()
          const w = $(item).width()

          //If image loaded
          if (h > 0 && w > 0) {
            //Replace
            $(item).css('width', w + 'px').css('height', h + 'px')
            $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)])
          }
          else {
            //Replace when loaded
            $(item).load(() => {
              //Prevent 'infinite' loop
              if ($.inArray($(item).attr('src'), lstImgs) === -1) {
                const h = $(item).height()
                const w = $(item).width()
                $(item).css('width', w + 'px').css('height', h + 'px')
                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)])
              }
            })
          }
        }
      })

      //Keep replacing
      if (time > 0)
        setTimeout(() => self.handleImages(lstImgs, time), time)
    }
  })

  //Run on jQuery ready
  $(() => self.handleImages(self.nChorizadaImgs, 3000))
}

main()