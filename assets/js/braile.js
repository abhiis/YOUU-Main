            var draw = SVG().addTo('#props').viewbox(10, 10, 800, 800)
            var rect = draw.circle(200).fill('#000').center(700,200)
            var rect1 = draw.circle(200).fill('#ffce00').center(700,400)
            var timeline = new SVG.Timeline()
           

            var circles = new Array();
            function reboot(){
                rect.animate(700,100,'now').center(400,150)
                rect1.animate(700,100,'now').center(400,500)
            }
            function owk(){
                rect.animate(1000, 100, 'now').center(400,200)
                rect1.animate(700,100,'now').size(50)
                rect1.animate(100).center(220,400)
                for(var i=0,j=350; i<=5; i++, j+=60)
                {
                    circles[i]= draw.circle(50).fill('#fff').move(500,400)
                }
                for(var i=0,j=280; i<=5; i++, j+=60)
                {
                    circles[i].animate(j,500).center(j,400).animate().attr({fill: '#ffce00'})
                }
            }
            function connect(){
                rect.animate(700,100,'now').center(400,250)
                rect1.animate(700,100,'now').center(400,350)
            }
            function consume(){
                
                rect1.animate(700,100,'now').center(400,300).animate().size(200)
                rect.animate(700,100,'now').center(400,300).animate(500).size(220)
                //rect1.animate(500,120).size(50)
               
            }
            function canteen(){
                rect1.animate(700,'now').center(400,400)
                rect.animate(700,100,'now').center(400,300).animate(500).size(500)
                rect.front();
            }
            function normal(){
                rect.back();
                rect.animate().center(700,200).animate().attr({fill: '#000'}).animate().size(200)
                rect1.animate().center(700,400).animate().attr({fill:'#ffce00'}).animate().size(200)
            }
            function removeCircles(){
                if(circles)
                {
                for(var i=0;i<=5;i++)
                {
                    circles[i].remove();
                }
            }
                
            }
