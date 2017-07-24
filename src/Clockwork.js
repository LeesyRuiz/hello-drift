import './Clockwork.css';
import React, { Component } from "react";
// import './App.css';
 import $ from "jquery";


class Clockwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blnReady:	  true,
      strPath :  'section .layer',
      strFinished: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend'
    };

  }

  render(){
    var blnReady	   = true;
    var strPath 	   = 'section .layer';
    var strFinished  = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

    $('.btn').click(function(e) {
      e.preventDefault();

      var top 		= $(strPath).first();
      var bottom 	= $(strPath).last();
      var sliceL	= $(top).find('.slice.left');
      var sliceR	= $(top).find('.slice.right');
      var btn     = $(this);

      if($(btn).hasClass("next") && (blnReady === true)){
        blnReady = false;
        $(btn).addClass('disable');
        $(sliceR).addClass('next spin-in');
        $(sliceR).one(strFinished,
          function() {
            $(sliceL).addClass('next spin-out');
            $(sliceL).one(strFinished,
              function() {
                $(top).insertAfter(bottom);
                $(sliceL).removeClass('next spin-out');
                $(sliceR).removeClass('next spin-in');
                $(btn).removeClass('disable');
                blnReady = true;
                return;
              });
            });
          }

          if($(this).hasClass("prev") && (blnReady === true)){
            blnReady = false;
            $(btn).addClass('disable');
            $(bottom).insertAfter(top);
            $(sliceL).addClass('prev spin-in');
            $(sliceL).one(strFinished,
              function() {
                $(sliceR).addClass('prev spin-out');
                $(sliceR).one(strFinished,
                  function() {
                    $(bottom).insertBefore(top);
                    $(sliceL).removeClass('prev spin-in');
                    $(sliceR).removeClass('prev spin-out');
                    $(btn).removeClass('disable');
                    blnReady = true;
                    return;
                  });
                });
              }
            });


            $('.btn').hover(function(e) {
              $('.btn').removeClass('wake');
            });
            $('.btn').addClass('wake');


            return (
              <div className="Clockwork">
              <header>
              <h1>Clockwerk</h1>
              <small>
              Photography &copy;<a rel="nofollow" rel="noreferrer"href="http://alexdemora.com/">Alex de Mora</a></small>
              </header>
              <nav>
              <a rel="nofollow" rel="noreferrer"class="btn prev" href="#">&larr;</a>
              <a rel="nofollow" rel="noreferrer"class="btn next" href="#">&rarr;</a>
              </nav>
              <section>
              <div class="layer image-1">
              <div class="slice left">
              <div class="inner"></div>
              </div>
              <div class="slice right">
              <div class="inner">background-image: url("./src/assets/01.jpg");
              </div>
              </div>
              </div>


              <div class="layer image-2">
              <div class="slice left">
              <div class="inner"></div>
              </div>
              <div class="slice right">
              <div class="inner">background-image: url("./assets/02.jpg");
              </div>
              </div>
              </div>


              <div class="layer image-3">
              <div class="slice left">
              <div class="inner"></div>
              </div>
              <div class="slice right">
              <div class="inner">background-image: url("./src/assets/03.jpg");
              </div>
              </div>
              </div>


              <div class="layer image-4">
              <div class="slice left">
              <div class="inner"></div>
              </div>
              <div class="slice right">
              <div class="inner">background-image: url("./assets/04.jpg");
              </div>
              </div>
              </div>

              </section>
              </div>
            )
          }
        }

        export default Clockwork;
