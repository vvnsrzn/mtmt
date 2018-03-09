const initpara = function () {
  console.log('initpara')

  $(".p1, [data-paroller-factor]").paroller({
    factor: 0.3,              // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal' // vertical, horizontal
  });

  $(".p2, [data-paroller-factor]").paroller({
    factor: -0.6,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal'   // vertical, horizontal
  });

  $(".vp1, [data-paroller-factor]").paroller({
    factor: -0.2,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical'   // vertical, vertical
  });

  $(".vp2, [data-paroller-factor]").paroller({
    factor: 0.0,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical'   // vertical, vertical
  });

  $(".vp3, [data-paroller-factor]").paroller({
    factor: 0.2,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'vertical'   // vertical, vertical
  });

  $(".t1, [data-paroller-factor]").paroller({
    factor: -50,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal'   // vertical, vertical
  });
  $(".t2, [data-paroller-factor]").paroller({
    factor: 48,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal'   // vertical, vertical
  });
  $(".t3, [data-paroller-factor]").paroller({
    factor: -46,            // multiplier for scrolling speed and offset
    type: 'foreground',     // background, foreground
    direction: 'horizontal'   // vertical, vertical
  });
}

module.exports = initpara;