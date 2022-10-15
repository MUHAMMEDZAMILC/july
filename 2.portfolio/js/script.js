// ============ togggle functions ===================
function myFunction() {
    document.getElementById("navcontent").classList.toggle("show");
  }
function myFunction2() {
    document.getElementById("c-left").classList.toggle("show2");
  }
function myFunction3() {
    document.getElementById("c-left").classList.toggle("show2");
    // document.getElementById("top").style.display="none";
  }
  
  // work page

  //================== particles=====================
  var count_particles, stats, update;
  stats = new Status;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  // ===================== validator ==========================
  
  // function validator(){
  //   var fname = document.getElementById('name').value;
  // var email = document.getElementById('email').value;
  //  var subject = document.getElementById('subject').value;
  //  var message = document.getElementById('message').value;
  //  var submit =document.getElementById('send');
  //   // console.log(fname);
  //   if(fname == '')
  //     {
  //       alert('Please fill your name');
  //     }
  //     else if(email == '')
  //     {
  //       alert('email is not valid?');
  //     }
  //     else if(subject == '')
  //     {
  //       alert('Subject is null');
  //     }
  //     else if(message == '')
  //     {
  //       alert('Please something message');
  //     }
  // }
  // =================================