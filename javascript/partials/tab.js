var tmn = document.querySelectorAll('[data-tab="menu"] [data-href]');
var tcn = document.querySelectorAll('[data-tab="content"]');

for(var i=0;i<tmn.length;i++) {
    tmn[i].addEventListener('click', function(e) {
        e.preventDefault();
        for(var j=0;j<tmn.length;j++) {
            tmn[j].classList.remove('-active');
        }
        this.classList.add('-active');
        for(var k=0;k<tcn.length;k++) {
            tcn[k].classList.remove('-active');
        }
        var ga = document.getElementById(this.getAttribute('data-href'));
        ga.classList.add('-active');

        // scroll to
        let	zz = this.clientWidth
        let	aw = this.getBoundingClientRect()['x']
        let skj = aw - (zz / 2) + 12
        // this.parentElement.scrollLeft = (skj>0?skj:0)
        this.parentElement.scroll({
            left: (skj>0?skj:0),
            top: 0,
            behavior: 'smooth'
        })
        // console.log(zz)
        // console.log(aw)
        // console.log(aw - zz)
    });
}
