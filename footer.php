<section class="followme">
                <div class="col-md-12 centered">
                    <div class="col-md-4">
                        Facebook
                    </div>
                    <div class="col-md-4">
                        Twitter
                    </div>
                    <div class="col-md-4">
                        Instagram
                    </div>
                </div>
            </section> <!-- end of social section -->
            
            <section class="footer">
            
                <footer class="container">
                    <div class="col-md-12 centered contactme">
                        <h4>Like what you see?</h4>
                        <p>Let's work on your next project together. I am currently taking on new projects so contact me to get started.</p>
                    </div>
                    
                    <div class="col-md-12 centered copyright">
                        <p>&copy; Copyright 2015, Aroldo Alvarez</p>
                    </div>
                </footer>
                
            </section> <!-- end of footer section -->
        </div>
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
        <!-- tween library -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        <script src="http://localhost/aro/inc/js/slideout.min.js"></script>
         <!-- custom scripts -->
        <script src="http://localhost/aro/inc/js/anim.js"></script>
        <script>
                var slideout = new Slideout({
                'panel': document.getElementById('panel'),
                'menu': document.getElementById('menu'),
                'padding': 256,
                'tolerance': 70
            });
            
                // Toggle button
                document.querySelector('.toggle-button').addEventListener('click', function() {
                slideout.toggle();
            });
        </script>
       
    </body>
</html>